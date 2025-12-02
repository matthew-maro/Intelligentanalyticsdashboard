import { useState, useEffect } from "react";
import { Settings, X, Check, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";

interface ApiKeyConfigProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApiKeyConfig({ isOpen, onClose }: ApiKeyConfigProps) {
  const [provider, setProvider] = useState<"openai" | "anthropic">("openai");
  const [apiKey, setApiKey] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      loadSavedConfig();
    }
  }, [isOpen]);

  const loadSavedConfig = () => {
    const savedProvider = localStorage.getItem("llm_provider") as "openai" | "anthropic" || "openai";
    const savedKey = localStorage.getItem(`${savedProvider}_api_key`) || "";
    setProvider(savedProvider);
    setApiKey(savedKey);
  };

  const handleSave = async () => {
    if (!apiKey.trim()) {
      setError("API key is required");
      return;
    }

    setSaving(true);
    setError("");

    try {
      // Store in Supabase secrets (secure server-side storage)
      const secretName = provider === "openai" ? "OPENAI_API_KEY" : "ANTHROPIC_API_KEY";
      
      // Note: In production, you would call a secure edge function to store this
      // For now, we'll store locally (NOT RECOMMENDED for production)
      localStorage.setItem("llm_provider", provider);
      localStorage.setItem(`${provider}_api_key`, apiKey);

      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        onClose();
      }, 1500);
    } catch (err) {
      setError("Failed to save configuration");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-xl shadow-[var(--elevation-sm)] p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Settings className="w-5 h-5" style={{ color: "var(--primary)" }} />
            </div>
            <h3 style={{ color: "var(--foreground)" }}>LLM Configuration</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-secondary/50 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </button>
        </div>

        {/* Warning */}
        <div className="flex gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--destructive)" }} />
          <div className="space-y-1">
            <p style={{ 
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--destructive)"
            }}>
              Development Mode
            </p>
            <p className="caption" style={{ color: "var(--foreground)" }}>
              API keys are stored locally for demo purposes. For production, use Supabase Edge Function secrets.
            </p>
          </div>
        </div>

        {/* Provider Selection */}
        <div className="space-y-2">
          <label style={{ 
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--foreground)"
          }}>
            LLM Provider
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setProvider("openai")}
              className={`p-3 rounded-lg border transition-all ${
                provider === "openai"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:bg-secondary/30"
              }`}
            >
              <p style={{ 
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                color: provider === "openai" ? "var(--primary)" : "var(--foreground)"
              }}>
                OpenAI
              </p>
              <p className="caption" style={{ color: "var(--muted)" }}>
                GPT-4
              </p>
            </button>
            <button
              onClick={() => setProvider("anthropic")}
              className={`p-3 rounded-lg border transition-all ${
                provider === "anthropic"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:bg-secondary/30"
              }`}
            >
              <p style={{ 
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                color: provider === "anthropic" ? "var(--primary)" : "var(--foreground)"
              }}>
                Anthropic
              </p>
              <p className="caption" style={{ color: "var(--muted)" }}>
                Claude
              </p>
            </button>
          </div>
        </div>

        {/* API Key Input */}
        <div className="space-y-2">
          <label style={{ 
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--foreground)"
          }}>
            API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={`Enter your ${provider === "openai" ? "OpenAI" : "Anthropic"} API key`}
            className="w-full px-4 py-3 bg-input-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            style={{ 
              fontSize: "var(--text-sm)",
              color: "var(--foreground)"
            }}
          />
          {error && (
            <p className="caption" style={{ color: "var(--destructive)" }}>
              {error}
            </p>
          )}
        </div>

        {/* Instructions */}
        <div className="p-4 bg-secondary/30 rounded-lg space-y-2">
          <p style={{ 
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)"
          }}>
            How to get an API key:
          </p>
          <ul className="caption space-y-1 list-disc list-inside" style={{ color: "var(--muted)" }}>
            {provider === "openai" ? (
              <>
                <li>Go to platform.openai.com/api-keys</li>
                <li>Sign in or create an account</li>
                <li>Click "Create new secret key"</li>
              </>
            ) : (
              <>
                <li>Go to console.anthropic.com</li>
                <li>Sign in or create an account</li>
                <li>Navigate to API Keys section</li>
              </>
            )}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors"
            style={{ 
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--secondary-foreground)"
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !apiKey.trim()}
            className="flex-1 px-4 py-3 bg-primary rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ 
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--primary-foreground)"
            }}
          >
            {saving ? (
              "Saving..."
            ) : saved ? (
              <>
                <Check className="w-4 h-4" />
                Saved!
              </>
            ) : (
              "Save Configuration"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ApiConfigButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 z-40 w-10 h-10 bg-card/80 backdrop-blur-md border border-border rounded-lg hover:bg-card transition-all shadow-md flex items-center justify-center group"
      title="Configure LLM API"
    >
      <Settings 
        className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" 
        style={{ color: "var(--foreground)" }} 
      />
    </button>
  );
}
