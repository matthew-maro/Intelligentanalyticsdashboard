import { useState, useEffect } from "react";
import { generateInsight, InsightResponse } from "../lib/api";

export interface UseInsightDataResult {
  data: InsightResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch insight data from LLM + database
 */
export function useInsightData(query: string, enabled: boolean = true): UseInsightDataResult {
  const [data, setData] = useState<InsightResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!query.trim() || !enabled) return;

    setLoading(true);
    setError(null);

    try {
      // Get LLM provider from config
      const provider = (localStorage.getItem("llm_provider") || "openai") as "openai" | "anthropic";
      const apiKey = localStorage.getItem(`${provider}_api_key`);

      if (!apiKey) {
        throw new Error("API key not configured. Please configure your LLM API in settings.");
      }

      // Store API key in session for edge function to use
      // Note: This is a simplified approach for demo. In production, use proper secret management
      sessionStorage.setItem("temp_llm_key", apiKey);
      sessionStorage.setItem("temp_llm_provider", provider);

      const result = await generateInsight({
        query,
        llmProvider: provider,
      });

      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate insight";
      setError(errorMessage);
      console.error("Error fetching insight:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, enabled]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
