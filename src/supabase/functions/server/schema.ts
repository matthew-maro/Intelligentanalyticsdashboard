import { createClient } from "jsr:@supabase/supabase-js@2";

export interface ColumnInfo {
  name: string;
  type: string;
}

export interface SchemaInfo {
  tableName: string;
  columns: ColumnInfo[];
  sampleData: any;
}

let cachedSchema: SchemaInfo | null = null;

/**
 * Discover the schema of the events_duplicate table
 */
export async function getTableSchema(): Promise<SchemaInfo> {
  // Return cached schema if available
  if (cachedSchema) {
    return cachedSchema;
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  try {
    // Fetch a sample row to understand the schema
    const { data, error } = await supabase
      .from("events_duplicate")
      .select("*")
      .limit(1);

    if (error) throw error;

    if (!data || data.length === 0) {
      throw new Error("No data found in events_duplicate table");
    }

    const sampleRow = data[0];
    const columns: ColumnInfo[] = Object.keys(sampleRow).map((key) => ({
      name: key,
      type: typeof sampleRow[key],
    }));

    cachedSchema = {
      tableName: "events_duplicate",
      columns,
      sampleData: sampleRow,
    };

    console.log("Schema discovered:", cachedSchema);
    return cachedSchema;
  } catch (error) {
    console.error("Error discovering schema:", error);
    throw error;
  }
}

/**
 * Clear the cached schema (useful for testing)
 */
export function clearSchemaCache() {
  cachedSchema = null;
}
