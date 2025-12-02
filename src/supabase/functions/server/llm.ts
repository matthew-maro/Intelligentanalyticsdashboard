import { SchemaInfo } from "./schema.ts";

export interface LLMResponse {
  sql: string;
  visualizationType: "bar" | "line" | "pie" | "table" | "multi";
  chartConfig?: {
    xAxis?: string;
    yAxis?: string;
    groupBy?: string;
    title?: string;
  };
}

/**
 * Call Anthropic Claude API to generate SQL from natural language
 */
export async function generateSQLFromQuery(
  userQuery: string,
  schema: SchemaInfo
): Promise<LLMResponse> {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  const prompt = buildPrompt(userQuery, schema);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", errorText);
      throw new Error(`Anthropic API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;
    
    console.log("LLM response:", content);

    // Parse the JSON response from Claude
    const parsedResponse = parseClaudeResponse(content);
    return parsedResponse;
  } catch (error) {
    console.error("Error calling Anthropic API:", error);
    throw error;
  }
}

/**
 * Build the prompt for Claude
 */
function buildPrompt(userQuery: string, schema: SchemaInfo): string {
  const columnsDescription = schema.columns
    .map((col) => `  - ${col.name} (${col.type})`)
    .join("\n");

  return `You are a SQL expert. Generate a PostgreSQL query based on the user's natural language request.

DATABASE SCHEMA:
Table: ${schema.tableName}
Columns:
${columnsDescription}

Sample data:
${JSON.stringify(schema.sampleData, null, 2)}

USER QUERY:
"${userQuery}"

INSTRUCTIONS:
1. Generate a valid PostgreSQL SELECT query for the events_duplicate table
2. Use only columns that exist in the schema
3. Include appropriate WHERE, GROUP BY, ORDER BY, and LIMIT clauses as needed
4. For aggregations, use SUM, AVG, COUNT, etc.
5. Suggest the best visualization type: "bar", "line", "pie", "table", or "multi"
6. Return ONLY a JSON object with this structure (no markdown, no extra text):

{
  "sql": "SELECT ... FROM events_duplicate ...",
  "visualizationType": "bar",
  "chartConfig": {
    "title": "Descriptive chart title",
    "xAxis": "column_name",
    "yAxis": "column_name",
    "groupBy": "column_name"
  }
}

IMPORTANT: Return ONLY the JSON object, nothing else.`;
}

/**
 * Parse Claude's response
 */
function parseClaudeResponse(content: string): LLMResponse {
  try {
    // Remove markdown code blocks if present
    let cleaned = content.trim();
    if (cleaned.startsWith("```json")) {
      cleaned = cleaned.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    } else if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/```\n?/g, "");
    }

    const parsed = JSON.parse(cleaned);

    // Validate required fields
    if (!parsed.sql) {
      throw new Error("No SQL query in response");
    }

    return {
      sql: parsed.sql,
      visualizationType: parsed.visualizationType || "table",
      chartConfig: parsed.chartConfig || {},
    };
  } catch (error) {
    console.error("Error parsing Claude response:", error);
    console.error("Raw content:", content);
    throw new Error(`Failed to parse LLM response: ${error.message}`);
  }
}
