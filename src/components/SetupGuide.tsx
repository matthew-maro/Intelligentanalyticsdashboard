import { useState } from "react";
import { CheckCircle2, Circle, ExternalLink, Copy, Check } from "lucide-react";

interface SetupGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SetupGuide({ isOpen, onClose }: SetupGuideProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  if (!isOpen) return null;

  const steps = [
    {
      title: "Database Schema Setup",
      completed: false,
      description: "Create the search_history table in Supabase",
      code: `CREATE TABLE search_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  query TEXT NOT NULL,
  sql_generated TEXT,
  visualization_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  bookmarked BOOLEAN DEFAULT FALSE,
  bookmark_title TEXT,
  bookmark_visible BOOLEAN DEFAULT FALSE
);`,
      link: null,
    },
    {
      title: "Deploy Edge Function",
      completed: false,
      description: "Deploy the generate-insight function to Supabase",
      code: `supabase functions deploy generate-insight`,
      link: "https://supabase.com/docs/guides/functions",
    },
    {
      title: "Configure LLM API",
      completed: false,
      description: "Set your OpenAI or Anthropic API key as a Supabase secret",
      code: `supabase secrets set OPENAI_API_KEY=your_key_here`,
      link: "https://platform.openai.com/api-keys",
    },
    {
      title: "Create Database Function",
      completed: false,
      description: "Add the execute_query function for safe SQL execution",
      code: `CREATE OR REPLACE FUNCTION execute_query(query_text TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSONB;
BEGIN
  IF NOT (UPPER(TRIM(query_text)) LIKE 'SELECT %') THEN
    RAISE EXCEPTION 'Only SELECT queries are allowed';
  END IF;
  
  EXECUTE format('SELECT jsonb_agg(row_to_json(t)) FROM (%s) t', query_text) INTO result;
  
  RETURN COALESCE(result, '[]'::jsonb);
END;
$$;`,
      link: null,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-card border border-border rounded-xl shadow-[var(--elevation-sm)] my-8">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border/30 p-6 rounded-t-xl">
          <h2 style={{ color: "var(--foreground)" }}>Setup Guide: Connect to Real Data</h2>
          <p className="mt-2" style={{ 
            fontSize: "var(--text-sm)",
            color: "var(--muted)"
          }}>
            Follow these steps to enable LLM-powered insights with your Supabase database
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {steps.map((step, index) => (
            <div key={index} className="space-y-3">
              {/* Step Header */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {step.completed ? (
                    <CheckCircle2 className="w-6 h-6" style={{ color: "var(--chart-3)" }} />
                  ) : (
                    <Circle className="w-6 h-6" style={{ color: "var(--muted)" }} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 style={{ color: "var(--foreground)" }}>
                      {index + 1}. {step.title}
                    </h3>
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                        style={{ 
                          fontSize: "var(--text-xs)",
                          color: "var(--primary)"
                        }}
                      >
                        <span>Docs</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="mt-1" style={{ 
                    fontSize: "var(--text-sm)",
                    color: "var(--muted)"
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Code Block */}
              <div className="ml-9 relative">
                <div className="bg-background/80 border border-border/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="caption" style={{ color: "var(--foreground)" }}>
                    <code>{step.code}</code>
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(step.code, index)}
                  className="absolute top-2 right-2 p-2 bg-card/90 hover:bg-card border border-border rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedStep === index ? (
                    <Check className="w-4 h-4" style={{ color: "var(--chart-3)" }} />
                  ) : (
                    <Copy className="w-4 h-4" style={{ color: "var(--foreground)" }} />
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-lg">
            <p style={{ 
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--primary)"
            }}>
              📚 Full Documentation
            </p>
            <p className="mt-2 caption" style={{ color: "var(--foreground)" }}>
              For detailed instructions, troubleshooting, and security considerations, see <code className="px-2 py-1 bg-background/50 rounded">SETUP.md</code> in the project root.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <p style={{ 
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)"
            }}>
              Quick Links:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-secondary/30 hover:bg-secondary/50 border border-border rounded-lg transition-colors"
              >
                <span style={{ fontSize: "var(--text-sm)", color: "var(--foreground)" }}>
                  OpenAI API Keys
                </span>
                <ExternalLink className="w-4 h-4" style={{ color: "var(--muted)" }} />
              </a>
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-secondary/30 hover:bg-secondary/50 border border-border rounded-lg transition-colors"
              >
                <span style={{ fontSize: "var(--text-sm)", color: "var(--foreground)" }}>
                  Anthropic Console
                </span>
                <ExternalLink className="w-4 h-4" style={{ color: "var(--muted)" }} />
              </a>
              <a
                href="https://supabase.com/docs/guides/functions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-secondary/30 hover:bg-secondary/50 border border-border rounded-lg transition-colors"
              >
                <span style={{ fontSize: "var(--text-sm)", color: "var(--foreground)" }}>
                  Supabase Functions
                </span>
                <ExternalLink className="w-4 h-4" style={{ color: "var(--muted)" }} />
              </a>
              <a
                href="https://supabase.com/docs/guides/database"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-secondary/30 hover:bg-secondary/50 border border-border rounded-lg transition-colors"
              >
                <span style={{ fontSize: "var(--text-sm)", color: "var(--foreground)" }}>
                  Supabase Database
                </span>
                <ExternalLink className="w-4 h-4" style={{ color: "var(--muted)" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-card border-t border-border/30 p-6 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-primary rounded-lg hover:opacity-90 transition-opacity"
            style={{ 
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--primary-foreground)"
            }}
          >
            Got it, let's get started!
          </button>
        </div>
      </div>
    </div>
  );
}
