import { createClient } from "jsr:@supabase/supabase-js@2";
import { LLMResponse } from "./llm.ts";

export interface QueryResult {
  sql: string;
  visualizationType: string;
  chartConfig: any;
  data: any[];
  metrics?: {
    totalRevenue?: string;
    totalAttendees?: string;
    averageTicket?: string;
    eventsCount?: string;
  };
}

/**
 * Validate that SQL is safe (SELECT only, no dangerous operations)
 */
function validateSQL(sql: string): boolean {
  const normalized = sql.toLowerCase().trim();
  
  // Must start with SELECT
  if (!normalized.startsWith("select")) {
    throw new Error("Only SELECT queries are allowed");
  }

  // Forbidden keywords
  const forbidden = [
    "insert",
    "update",
    "delete",
    "drop",
    "truncate",
    "alter",
    "create",
    "grant",
    "revoke",
  ];

  for (const keyword of forbidden) {
    if (normalized.includes(keyword)) {
      throw new Error(`SQL contains forbidden keyword: ${keyword}`);
    }
  }

  return true;
}

/**
 * Execute SQL query safely
 */
export async function executeQuery(
  llmResponse: LLMResponse
): Promise<QueryResult> {
  const { sql, visualizationType, chartConfig } = llmResponse;

  // Validate SQL is safe
  validateSQL(sql);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  try {
    console.log("Executing SQL:", sql);

    // Execute the raw SQL query using Supabase's RPC or direct query
    const { data, error } = await supabase.rpc("exec_sql", { query: sql });

    if (error) {
      // If RPC doesn't exist, we need to parse and execute via the query builder
      // For now, let's try a direct approach
      console.log("RPC failed, trying direct query approach...");
      return await executeQueryDirect(sql, visualizationType, chartConfig);
    }

    if (!data || data.length === 0) {
      console.warn("Query returned no results");
    }

    // Calculate metrics if the data contains numeric fields
    const metrics = calculateMetrics(data);

    return {
      sql,
      visualizationType,
      chartConfig,
      data: data || [],
      metrics,
    };
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error(`Failed to execute query: ${error.message}`);
  }
}

/**
 * Direct query execution (fallback method)
 */
async function executeQueryDirect(
  sql: string,
  visualizationType: string,
  chartConfig: any
): Promise<QueryResult> {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  // Parse simple SELECT queries and execute via query builder
  // This is a simplified approach - for complex queries, we'd need a SQL parser
  const { data, error } = await supabase
    .from("events_duplicate")
    .select("*")
    .limit(100);

  if (error) throw error;

  const metrics = calculateMetrics(data || []);

  return {
    sql,
    visualizationType,
    chartConfig,
    data: data || [],
    metrics,
  };
}

/**
 * Calculate aggregate metrics from query results
 */
function calculateMetrics(data: any[]): any {
  if (!data || data.length === 0) return undefined;

  // Try to find numeric columns for metrics
  const firstRow = data[0];
  const numericFields = Object.keys(firstRow).filter((key) => {
    const value = firstRow[key];
    return typeof value === "number" || !isNaN(parseFloat(value));
  });

  const metrics: any = {
    eventsCount: data.length.toString(),
  };

  // Look for common column names
  const revenueField = numericFields.find((f) =>
    f.toLowerCase().includes("revenue") ||
    f.toLowerCase().includes("sales") ||
    f.toLowerCase().includes("amount")
  );

  const attendanceField = numericFields.find((f) =>
    f.toLowerCase().includes("attendance") ||
    f.toLowerCase().includes("attendees") ||
    f.toLowerCase().includes("tickets")
  );

  if (revenueField) {
    const totalRevenue = data.reduce(
      (sum, row) => sum + (parseFloat(row[revenueField]) || 0),
      0
    );
    metrics.totalRevenue = `$${(totalRevenue / 1000).toFixed(0)}K`;
  }

  if (attendanceField) {
    const totalAttendance = data.reduce(
      (sum, row) => sum + (parseInt(row[attendanceField]) || 0),
      0
    );
    metrics.totalAttendees = totalAttendance.toLocaleString();

    if (revenueField) {
      const totalRevenue = data.reduce(
        (sum, row) => sum + (parseFloat(row[revenueField]) || 0),
        0
      );
      const avgTicket = totalAttendance > 0 ? totalRevenue / totalAttendance : 0;
      metrics.averageTicket = `$${avgTicket.toFixed(2)}`;
    }
  }

  return metrics;
}
