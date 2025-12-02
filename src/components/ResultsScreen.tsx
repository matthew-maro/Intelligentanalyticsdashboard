import { useState, useEffect } from "react";
import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar, RefreshCw, AlertCircle, Code } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BackgroundDecoration } from "./BackgroundDecoration";
import { DarkModeToggle } from "./DarkModeToggle";
import { queryDatabase, QueryResponse } from "../lib/api";

interface ResultsScreenProps {
  query: string;
  onBack: () => void;
}

export function ResultsScreen({ query, onBack }: ResultsScreenProps) {
  const [result, setResult] = useState<QueryResponse["result"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSQL, setShowSQL] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Querying with:", query);
      const response = await queryDatabase(query);
      
      if (!response.success || !response.result) {
        throw new Error(response.error || "Failed to query database");
      }

      console.log("Query result:", response.result);
      setResult(response.result);
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setError(err.message || "Failed to load data from database");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const renderVisualization = () => {
    if (!result || !result.data || result.data.length === 0) {
      return (
        <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-8 text-center">
          <p style={{ color: "var(--muted)", fontSize: "var(--text-base)" }}>
            No data found for this query
          </p>
        </div>
      );
    }

    const { visualizationType, data, chartConfig } = result;

    // Render based on visualization type
    switch (visualizationType) {
      case "bar":
        return renderBarChart(data, chartConfig);
      case "line":
        return renderLineChart(data, chartConfig);
      case "pie":
        return renderPieChart(data, chartConfig);
      case "table":
        return renderTable(data);
      default:
        return renderTable(data);
    }
  };

  const renderBarChart = (data: any[], config: any) => {
    const keys = Object.keys(data[0] || {});
    const xKey = config.xAxis || keys[0];
    const yKey = config.yAxis || keys[1];

    return (
      <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-4 sm:p-6">
        {config.title && (
          <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
            {config.title}
          </h3>
        )}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis 
              dataKey={xKey} 
              stroke="var(--foreground)" 
              style={{ fontSize: "var(--text-xs)" }}
            />
            <YAxis 
              stroke="var(--foreground)" 
              style={{ fontSize: "var(--text-xs)" }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                fontSize: "var(--text-sm)"
              }}
            />
            <Bar dataKey={yKey} fill="var(--chart-1)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const renderLineChart = (data: any[], config: any) => {
    const keys = Object.keys(data[0] || {});
    const xKey = config.xAxis || keys[0];
    const yKey = config.yAxis || keys[1];

    return (
      <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-4 sm:p-6">
        {config.title && (
          <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
            {config.title}
          </h3>
        )}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis 
              dataKey={xKey} 
              stroke="var(--foreground)" 
              style={{ fontSize: "var(--text-xs)" }}
            />
            <YAxis 
              stroke="var(--foreground)" 
              style={{ fontSize: "var(--text-xs)" }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                fontSize: "var(--text-sm)"
              }}
            />
            <Line type="monotone" dataKey={yKey} stroke="var(--chart-1)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const renderPieChart = (data: any[], config: any) => {
    const colors = [
      "var(--chart-1)",
      "var(--chart-2)",
      "var(--chart-3)",
      "var(--chart-4)",
      "var(--chart-5)",
    ];

    return (
      <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-4 sm:p-6">
        {config.title && (
          <h3 className="mb-4" style={{ color: "var(--foreground)" }}>
            {config.title}
          </h3>
        )}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey={config.yAxis || "value"}
              nameKey={config.xAxis || "name"}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                fontSize: "var(--text-sm)"
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const renderTable = (data: any[]) => {
    if (data.length === 0) return null;

    const columns = Object.keys(data[0]);

    return (
      <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "var(--sidebar)" }}>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left"
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  style={{ borderBottom: "1px solid var(--border)" }}
                  className="hover:bg-sidebar/30 transition-colors"
                >
                  {columns.map((col) => (
                    <td
                      key={col}
                      className="px-4 py-3"
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--foreground)",
                      }}
                    >
                      {row[col] !== null && row[col] !== undefined
                        ? String(row[col])
                        : "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-y-auto">
      <BackgroundDecoration />
      <DarkModeToggle />
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity touch-manipulation"
              style={{ color: "var(--foreground)" }}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span style={{ fontSize: "var(--text-sm)" }}>Back to Search</span>
            </button>

            <div className="flex gap-2">
              {result?.sql && (
                <button
                  onClick={() => setShowSQL(!showSQL)}
                  className="px-3 py-2 rounded-lg border border-border bg-card/60 hover:bg-card transition-colors"
                  title="View SQL"
                >
                  <Code className="w-4 h-4" style={{ color: "var(--primary)" }} />
                </button>
              )}
              <button
                onClick={fetchData}
                disabled={loading}
                className="px-3 py-2 rounded-lg border border-border bg-card/60 hover:bg-card transition-colors disabled:opacity-50"
                title="Refresh data"
              >
                <RefreshCw 
                  className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} 
                  style={{ color: "var(--primary)" }} 
                />
              </button>
            </div>
          </div>
          
          <div className="bg-card/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-border/30 p-4 sm:p-6 shadow-[var(--elevation-sm)]">
            <p className="caption mb-2" style={{ color: "var(--foreground)", opacity: 0.6 }}>
              Analysis Results for:
            </p>
            <h2 className="break-words" style={{ color: "var(--foreground)" }}>{query}</h2>
          </div>

          {/* SQL Display */}
          {showSQL && result?.sql && (
            <div className="mt-4 bg-muted/20 rounded-lg border border-border/30 p-4 overflow-x-auto">
              <p className="caption mb-2" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                Generated SQL:
              </p>
              <code
                className="block"
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--foreground)",
                  fontFamily: "monospace",
                }}
              >
                {result.sql}
              </code>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-8 flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p style={{ 
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)"
              }}>
                Analyzing query with AI...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 flex gap-4">
              <AlertCircle className="w-6 h-6 flex-shrink-0" style={{ color: "var(--destructive)" }} />
              <div>
                <h3 style={{ 
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--destructive)",
                  marginBottom: "8px"
                }}>
                  Error Loading Data
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--foreground)" }}>
                  {error}
                </p>
                <button
                  onClick={fetchData}
                  className="mt-4 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "var(--destructive)",
                    color: "var(--destructive-foreground)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {!loading && !error && result && (
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Metrics */}
            {result.metrics && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {result.metrics.totalRevenue && (
                  <MetricCard
                    icon={DollarSign}
                    label="Total Revenue"
                    value={result.metrics.totalRevenue}
                  />
                )}
                {result.metrics.totalAttendees && (
                  <MetricCard
                    icon={Users}
                    label="Total Attendees"
                    value={result.metrics.totalAttendees}
                  />
                )}
                {result.metrics.averageTicket && (
                  <MetricCard
                    icon={TrendingUp}
                    label="Avg Ticket"
                    value={result.metrics.averageTicket}
                  />
                )}
                {result.metrics.eventsCount && (
                  <MetricCard
                    icon={Calendar}
                    label="Events"
                    value={result.metrics.eventsCount}
                  />
                )}
              </div>
            )}

            {/* Visualization */}
            {renderVisualization()}
          </div>
        )}
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-4 shadow-[var(--elevation-sm)]">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: "var(--secondary)" }}
        >
          <Icon className="w-4 h-4" style={{ color: "var(--secondary-foreground)" }} />
        </div>
        <p className="caption" style={{ color: "var(--foreground)", opacity: 0.7 }}>
          {label}
        </p>
      </div>
      <p style={{
        fontSize: "var(--text-2xl)",
        fontWeight: "var(--font-weight-bold)",
        color: "var(--foreground)"
      }}>
        {value}
      </p>
    </div>
  );
}
