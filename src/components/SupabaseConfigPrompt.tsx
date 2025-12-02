import { Database, ExternalLink } from "lucide-react";

export function SupabaseConfigPrompt() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-card border border-border rounded-xl shadow-[var(--elevation-sm)] p-6 space-y-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
          <Database className="w-6 h-6" style={{ color: "var(--primary)" }} />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h3 style={{ color: "var(--foreground)" }}>
            Connect to Supabase
          </h3>
          <p style={{ 
            fontSize: "var(--text-sm)",
            color: "var(--muted)"
          }}>
            To use real data mode, you need to configure your Supabase connection.
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-secondary/30 rounded-lg p-4 space-y-3">
          <p style={{ 
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)"
          }}>
            Quick Setup:
          </p>
          <ol className="space-y-2 list-decimal list-inside" style={{ 
            fontSize: "var(--text-sm)",
            color: "var(--muted)"
          }}>
            <li>Create a <code className="px-2 py-1 bg-background/50 rounded">.env</code> file in your project root</li>
            <li>Copy the contents from <code className="px-2 py-1 bg-background/50 rounded">.env.example</code></li>
            <li>Add your Supabase URL and anon key from your project settings</li>
            <li>Restart the development server</li>
          </ol>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <a
            href="https://app.supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-colors group"
          >
            <span style={{ 
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--primary)"
            }}>
              Get Supabase Credentials
            </span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: "var(--primary)" }} />
          </a>
        </div>

        {/* Note */}
        <div className="text-center pt-4 border-t border-border/30">
          <p className="caption" style={{ color: "var(--muted)" }}>
            For now, you can use <strong style={{ color: "var(--foreground)" }}>Mock Data Mode</strong> which works without any configuration.
          </p>
        </div>
      </div>
    </div>
  );
}
