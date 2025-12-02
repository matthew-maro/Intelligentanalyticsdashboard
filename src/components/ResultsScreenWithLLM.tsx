import { useState } from "react";
import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar, RefreshCw, AlertCircle, Database } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BackgroundDecoration } from "./BackgroundDecoration";
import { DarkModeToggle } from "./DarkModeToggle";
import { useInsightData } from "../hooks/useInsightData";

interface ResultsScreenWithLLMProps {
  query: string;
  onBack: () => void;
}

export function ResultsScreenWithLLM({ query, onBack }: ResultsScreenWithLLMProps) {
  const [useRealData, setUseRealData] = useState(true);
  const { data, loading, error, refetch } = useInsightData(query, useRealData);

  // Process data for visualization
  const processedData = data?.data || [];
  const visualizationType = data?.visualizationType || "table";

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

            <div className="flex items-center gap-2">
              {/* Toggle Real/Mock Data */}
              <button
                onClick={() => setUseRealData(!useRealData)}
                className="px-3 py-2 rounded-lg border border-border bg-card/60 hover:bg-card transition-colors flex items-center gap-2"
                style={{ fontSize: "var(--text-sm)" }}
              >
                <Database className="w-4 h-4" style={{ color: "var(--primary)" }} />
                <span style={{ color: "var(--foreground)" }}>
                  {useRealData ? "Real Data" : "Mock Data"}
                </span>
              </button>

              {/* Refresh Button */}
              <button
                onClick={refetch}
                disabled={loading}
                className="px-3 py-2 rounded-lg border border-border bg-card/60 hover:bg-card transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} style={{ color: "var(--primary)" }} />
              </button>
            </div>
          </div>
          
          <div className="bg-card/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-border/30 p-4 sm:p-6 shadow-[var(--elevation-sm)]">
            <p className="caption mb-2" style={{ color: "var(--foreground)", opacity: 0.6 }}>
              Analysis Results for:
            </p>
            <h2 className="break-words" style={{ color: "var(--foreground)" }}>{query}</h2>
            
            {data?.summary && (
              <p className="mt-3 pt-3 border-t border-border/30" style={{ 
                fontSize: "var(--text-sm)",
                color: "var(--muted)"
              }}>
                {data.summary}
              </p>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-8 flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <div className="text-center space-y-2">
                <p style={{ 
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--foreground)"
                }}>
                  Generating Insights...
                </p>
                <p className="caption" style={{ color: "var(--muted)" }}>
                  Analyzing your query with AI and querying the database
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 flex gap-4">
              <AlertCircle className="w-6 h-6 flex-shrink-0" style={{ color: "var(--destructive)" }} />
              <div className="space-y-2">
                <p style={{ 
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--destructive)"
                }}>
                  Error Generating Insights
                </p>
                <p className="caption" style={{ color: "var(--foreground)" }}>
                  {error}
                </p>
                <button
                  onClick={refetch}
                  className="mt-3 px-4 py-2 bg-destructive/20 hover:bg-destructive/30 rounded-lg transition-colors"
                  style={{ 
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--destructive)"
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data Visualization */}
        {!loading && !error && data && processedData.length > 0 && (
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* SQL Query Display */}
            <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <p style={{ 
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--foreground)"
                }}>
                  Generated SQL Query
                </p>
                <span className="px-2 py-1 bg-chart-1/20 rounded caption" style={{ color: "var(--chart-1)" }}>
                  {visualizationType.toUpperCase()}
                </span>
              </div>
              <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
                <code className="caption" style={{ color: "var(--muted)" }}>
                  {data.sql}
                </code>
              </pre>
            </div>

            {/* Visualization based on type */}
            {visualizationType === "bar" && (
              <ChartCard title="Bar Chart" description="Data visualization">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={processedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                    <XAxis 
                      dataKey={Object.keys(processedData[0] || {})[0]} 
                      stroke="var(--foreground)" 
                      opacity={0.6} 
                      tick={{ fontSize: 12 }} 
                      angle={-45} 
                      textAnchor="end" 
                      height={80} 
                    />
                    <YAxis stroke="var(--foreground)" opacity={0.6} tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    {Object.keys(processedData[0] || {}).slice(1).map((key, index) => (
                      <Bar 
                        key={key} 
                        dataKey={key} 
                        fill={`var(--chart-${(index % 5) + 1})`} 
                        radius={[8, 8, 0, 0]} 
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            )}

            {visualizationType === "line" && (
              <ChartCard title="Line Chart" description="Trend visualization">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={processedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                    <XAxis 
                      dataKey={Object.keys(processedData[0] || {})[0]} 
                      stroke="var(--foreground)" 
                      opacity={0.6} 
                      tick={{ fontSize: 12 }} 
                    />
                    <YAxis stroke="var(--foreground)" opacity={0.6} tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    {Object.keys(processedData[0] || {}).slice(1).map((key, index) => (
                      <Line 
                        key={key} 
                        type="monotone" 
                        dataKey={key} 
                        stroke={`var(--chart-${(index % 5) + 1})`} 
                        strokeWidth={2} 
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
            )}

            {visualizationType === "pie" && (
              <ChartCard title="Pie Chart" description="Distribution visualization">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={processedData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={120}
                      dataKey={Object.keys(processedData[0] || {})[1]}
                      nameKey={Object.keys(processedData[0] || {})[0]}
                    >
                      {processedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`var(--chart-${(index % 5) + 1})`} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>
            )}

            {/* Always show data table */}
            <ChartCard title="Data Table" description="Raw query results">
              <div className="overflow-x-auto -mx-4 sm:-mx-6">
                <div className="inline-block min-w-full align-middle px-4 sm:px-6">
                  <table className="min-w-full w-full">
                    <thead>
                      <tr className="border-b border-border/30">
                        {Object.keys(processedData[0] || {}).map((key) => (
                          <th 
                            key={key} 
                            className="text-left py-3 px-2 sm:px-3 lg:px-4"
                            style={{ 
                              fontSize: "var(--text-sm)",
                              color: "var(--foreground)",
                              opacity: 0.7
                            }}
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {processedData.map((row, rowIndex) => (
                        <tr 
                          key={rowIndex} 
                          className="border-b border-border/20 hover:bg-secondary/50 transition-colors"
                        >
                          {Object.values(row).map((value, colIndex) => (
                            <td 
                              key={colIndex} 
                              className="py-3 sm:py-4 px-2 sm:px-3 lg:px-4"
                              style={{ 
                                fontSize: "var(--text-sm)",
                                color: "var(--foreground)"
                              }}
                            >
                              {String(value)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ChartCard>
          </div>
        )}

        {/* No Data State */}
        {!loading && !error && (!data || processedData.length === 0) && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-card/40 backdrop-blur-md rounded-xl border border-border/30 p-8 text-center">
              <Database className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--muted)" }} />
              <p style={{ 
                fontSize: "var(--text-lg)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)"
              }}>
                No data available
              </p>
              <p className="caption mt-2" style={{ color: "var(--muted)" }}>
                Try a different query or check your database connection
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ChartCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <div className="bg-card/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-border/30 p-4 sm:p-6 shadow-[var(--elevation-sm)]">
      <div className="mb-4 sm:mb-6">
        <h3 style={{ color: "var(--foreground)" }}>{title}</h3>
        <p className="caption mt-1" style={{ color: "var(--foreground)", opacity: 0.6 }}>
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
