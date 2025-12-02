import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { getTableSchema } from "./schema.ts";
import { generateSQLFromQuery } from "./llm.ts";
import { executeQuery } from "./query.ts";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-942bf85d/health", (c) => {
  return c.json({ status: "ok" });
});

// Get database schema
app.get("/make-server-942bf85d/schema", async (c) => {
  try {
    const schema = await getTableSchema();
    return c.json({ success: true, schema });
  } catch (error: any) {
    console.error("Error fetching schema:", error);
    return c.json(
      { success: false, error: error.message },
      500
    );
  }
});

// Query endpoint - converts natural language to SQL and executes
app.post("/make-server-942bf85d/query", async (c) => {
  try {
    const body = await c.req.json();
    const { userQuery } = body;

    if (!userQuery) {
      return c.json(
        { success: false, error: "userQuery is required" },
        400
      );
    }

    console.log("User query received:", userQuery);

    // Step 1: Get database schema
    const schema = await getTableSchema();
    console.log("Schema retrieved");

    // Step 2: Generate SQL using LLM
    const llmResponse = await generateSQLFromQuery(userQuery, schema);
    console.log("SQL generated:", llmResponse.sql);

    // Step 3: Execute query
    const result = await executeQuery(llmResponse);
    console.log("Query executed successfully, rows:", result.data.length);

    return c.json({
      success: true,
      result,
    });
  } catch (error: any) {
    console.error("Error processing query:", error);
    return c.json(
      {
        success: false,
        error: error.message || "Failed to process query",
      },
      500
    );
  }
});

Deno.serve(app.fetch);