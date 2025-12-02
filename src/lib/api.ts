import { projectId, publicAnonKey } from "../utils/supabase/info";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-942bf85d`;

export interface QueryResponse {
  success: boolean;
  result?: {
    sql: string;
    visualizationType: "bar" | "line" | "pie" | "table" | "multi";
    chartConfig: {
      title?: string;
      xAxis?: string;
      yAxis?: string;
      groupBy?: string;
    };
    data: any[];
    metrics?: {
      totalRevenue?: string;
      totalAttendees?: string;
      averageTicket?: string;
      eventsCount?: string;
    };
  };
  error?: string;
}

/**
 * Query the backend with a natural language query
 */
export async function queryDatabase(userQuery: string): Promise<QueryResponse> {
  try {
    const response = await fetch(`${API_BASE}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify({ userQuery }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }

    return data;
  } catch (error: any) {
    console.error("Error querying database:", error);
    return {
      success: false,
      error: error.message || "Failed to query database",
    };
  }
}

/**
 * Get the database schema
 */
export async function getSchema() {
  try {
    const response = await fetch(`${API_BASE}/schema`, {
      headers: {
        Authorization: `Bearer ${publicAnonKey}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching schema:", error);
    return { success: false, error: error.message };
  }
}
