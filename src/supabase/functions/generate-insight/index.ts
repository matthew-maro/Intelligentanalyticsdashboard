// Edge Function for generating insights using LLM
// This function receives a natural language query, calls an LLM to generate SQL,
// executes the SQL against the database, and suggests visualization types

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InsightRequest {
  query: string;
  llmProvider?: "openai" | "anthropic";
}

interface InsightResponse {
  sql: string;
  visualizationType: "line" | "bar" | "pie" | "table";
  data: any[];
  summary: string;
  error?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { query, llmProvider = "openai" }: InsightRequest = await req.json();

    // Initialize Supabase client
    const supabaseClient = createClient(
      Denv.get("SUPABASE_URL") ?? "",
      Denv.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get database schema for context
    const schema = await getDatabaseSchema(supabaseClient);

    // Generate SQL and visualization recommendation using LLM
    const llmResult = await callLLM(query, schema, llmProvider);

    // Validate and sanitize SQL (basic security check)
    const validatedSQL = validateSQL(llmResult.sql);

    // Execute SQL query
    const { data, error: queryError } = await supabaseClient.rpc("execute_query", {
      query_text: validatedSQL,
    });

    if (queryError) {
      throw new Error(`Query execution failed: ${queryError.message}`);
    }

    const response: InsightResponse = {
      sql: validatedSQL,
      visualizationType: llmResult.visualizationType,
      data: data || [],
      summary: llmResult.summary,
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error generating insight:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to generate insight",
        data: [],
        sql: "",
        visualizationType: "table",
        summary: "An error occurred while processing your query.",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

async function getDatabaseSchema(supabaseClient: any) {
  // Query information_schema to get table structure
  const { data, error } = await supabaseClient
    .from("information_schema.columns")
    .select("table_name, column_name, data_type")
    .eq("table_schema", "public");

  if (error) {
    console.error("Error fetching schema:", error);
    return "Table: events_duplicate (assumed structure: id, name, date, venue, revenue, attendance, etc.)";
  }

  // Format schema for LLM
  const schemaMap: Record<string, string[]> = {};
  data.forEach((col: any) => {
    if (!schemaMap[col.table_name]) {
      schemaMap[col.table_name] = [];
    }
    schemaMap[col.table_name].push(`${col.column_name} (${col.data_type})`);
  });

  return Object.entries(schemaMap)
    .map(([table, columns]) => `Table: ${table}\nColumns: ${columns.join(", ")}`)
    .join("\n\n");
}

async function callLLM(
  userQuery: string,
  schema: string,
  provider: "openai" | "anthropic"
): Promise<{ sql: string; visualizationType: string; summary: string }> {
  if (provider === "openai") {
    return callOpenAI(userQuery, schema);
  } else {
    return callAnthropic(userQuery, schema);
  }
}

async function callOpenAI(userQuery: string, schema: string) {
  const apiKey = Deno.env.get("OPENAI_API_KEY");
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not configured");
  }

  const systemPrompt = `You are a SQL expert for an event analytics platform. Generate PostgreSQL queries based on user questions.

Database Schema:
${schema}

Instructions:
1. Generate a valid PostgreSQL SELECT query
2. Return ONLY the SQL query, no explanations
3. Use appropriate aggregations (COUNT, SUM, AVG, etc.)
4. Suggest the best visualization type: "line", "bar", "pie", or "table"
5. Provide a brief summary of what the query shows

Format your response as JSON:
{
  "sql": "SELECT...",
  "visualizationType": "bar",
  "summary": "This shows..."
}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userQuery },
      ],
      temperature: 0.3,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const result = await response.json();
  const content = result.choices[0]?.message?.content;

  try {
    return JSON.parse(content);
  } catch {
    // Fallback if LLM doesn't return valid JSON
    return {
      sql: content,
      visualizationType: "table",
      summary: "Query results",
    };
  }
}

async function callAnthropic(userQuery: string, schema: string) {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  const systemPrompt = `You are a SQL expert for an event analytics platform. Generate PostgreSQL queries based on user questions.

Database Schema:
${schema}

Instructions:
1. Generate a valid PostgreSQL SELECT query
2. Return ONLY the SQL query, no explanations
3. Use appropriate aggregations (COUNT, SUM, AVG, etc.)
4. Suggest the best visualization type: "line", "bar", "pie", or "table"
5. Provide a brief summary of what the query shows

Format your response as JSON:
{
  "sql": "SELECT...",
  "visualizationType": "bar",
  "summary": "This shows..."
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-sonnet-20240229",
      max_tokens: 500,
      system: systemPrompt,
      messages: [{ role: "user", content: userQuery }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.statusText}`);
  }

  const result = await response.json();
  const content = result.content[0]?.text;

  try {
    return JSON.parse(content);
  } catch {
    // Fallback if LLM doesn't return valid JSON
    return {
      sql: content,
      visualizationType: "table",
      summary: "Query results",
    };
  }
}

function validateSQL(sql: string): string {
  // Basic SQL injection prevention
  const dangerous = ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER", "CREATE", "TRUNCATE", "EXEC", "EXECUTE"];
  const upperSQL = sql.toUpperCase();

  for (const keyword of dangerous) {
    if (upperSQL.includes(keyword)) {
      throw new Error(`Dangerous SQL keyword detected: ${keyword}`);
    }
  }

  // Ensure it's a SELECT query
  if (!upperSQL.trim().startsWith("SELECT")) {
    throw new Error("Only SELECT queries are allowed");
  }

  return sql;
}
