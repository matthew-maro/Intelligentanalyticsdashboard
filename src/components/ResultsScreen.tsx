import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BackgroundDecoration } from "./BackgroundDecoration";
import { DarkModeToggle } from "./DarkModeToggle";

interface ResultsScreenProps {
  query: string;
  onBack: () => void;
}

// Mock data generators based on query
const generateMockData = (query: string) => {
  const lowerQuery = query.toLowerCase();
  
  // Detect query type for more dynamic data
  const isBottlesQuery = lowerQuery.includes('bottle');
  const isRevenueQuery = lowerQuery.includes('revenue') || lowerQuery.includes('sales');
  const isAttendanceQuery = lowerQuery.includes('attendance') || lowerQuery.includes('visitor');
  const isEngagementQuery = lowerQuery.includes('engagement') || lowerQuery.includes('interaction');
  
  // Generate seed based on query for consistency
  const seed = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = (min: number, max: number, offset: number = 0) => {
    const x = Math.sin(seed + offset) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1) + min);
  };
  
  // Event attendance data - varied patterns
  let attendanceData;
  if (seed % 3 === 0) {
    // Growing trend
    attendanceData = [
      { month: "Jan", value: random(2000, 2500, 1), previous: random(1800, 2200, 2) },
      { month: "Feb", value: random(2400, 2900, 3), previous: random(2000, 2400, 4) },
      { month: "Mar", value: random(2800, 3300, 5), previous: random(2200, 2700, 6) },
      { month: "Apr", value: random(3200, 3800, 7), previous: random(2600, 3100, 8) },
      { month: "May", value: random(3800, 4400, 9), previous: random(3000, 3600, 10) },
      { month: "Jun", value: random(4200, 4800, 11), previous: random(3400, 4000, 12) },
    ];
  } else if (seed % 3 === 1) {
    // Seasonal pattern
    attendanceData = [
      { month: "Jan", value: random(3200, 3600, 1), previous: random(3000, 3400, 2) },
      { month: "Feb", value: random(2800, 3200, 3), previous: random(2600, 3000, 4) },
      { month: "Mar", value: random(3400, 3800, 5), previous: random(3100, 3500, 6) },
      { month: "Apr", value: random(4000, 4400, 7), previous: random(3600, 4000, 8) },
      { month: "May", value: random(4400, 4900, 9), previous: random(4000, 4500, 10) },
      { month: "Jun", value: random(3800, 4200, 11), previous: random(3500, 3900, 12) },
    ];
  } else {
    // Volatile pattern
    attendanceData = [
      { month: "Jan", value: random(2800, 3200, 1), previous: random(2600, 3000, 2) },
      { month: "Feb", value: random(3600, 4100, 3), previous: random(3200, 3700, 4) },
      { month: "Mar", value: random(2400, 2900, 5), previous: random(2200, 2700, 6) },
      { month: "Apr", value: random(3800, 4300, 7), previous: random(3400, 3900, 8) },
      { month: "May", value: random(3200, 3700, 9), previous: random(2900, 3400, 10) },
      { month: "Jun", value: random(4200, 4700, 11), previous: random(3800, 4300, 12) },
    ];
  }
  
  // Revenue data - different brands/events based on query
  let revenueData;
  if (isBottlesQuery || lowerQuery.includes('don julio') || lowerQuery.includes('tequila')) {
    revenueData = [
      { event: "Don Julio", value: random(40000, 50000, 20) },
      { event: "Casamigos", value: random(35000, 42000, 21) },
      { event: "Patron", value: random(28000, 35000, 22) },
      { event: "1800", value: random(25000, 32000, 23) },
      { event: "Herradura", value: random(20000, 28000, 24) },
    ];
  } else if (lowerQuery.includes('concert') || lowerQuery.includes('music')) {
    revenueData = [
      { event: "Rock Concert", value: random(55000, 68000, 20) },
      { event: "EDM Festival", value: random(48000, 62000, 21) },
      { event: "Jazz Night", value: random(32000, 42000, 22) },
      { event: "Pop Show", value: random(42000, 55000, 23) },
      { event: "Hip Hop", value: random(38000, 50000, 24) },
    ];
  } else if (lowerQuery.includes('sports') || lowerQuery.includes('game')) {
    revenueData = [
      { event: "Basketball", value: random(62000, 75000, 20) },
      { event: "Football", value: random(70000, 85000, 21) },
      { event: "Baseball", value: random(45000, 58000, 22) },
      { event: "Soccer", value: random(52000, 65000, 23) },
      { event: "Hockey", value: random(48000, 60000, 24) },
    ];
  } else {
    revenueData = [
      { event: "Corporate Events", value: random(50000, 62000, 20) },
      { event: "Weddings", value: random(42000, 55000, 21) },
      { event: "Conferences", value: random(55000, 70000, 22) },
      { event: "Festivals", value: random(48000, 62000, 23) },
      { event: "Private Parties", value: random(35000, 48000, 24) },
    ];
  }
  
  // Distribution data - varied categories
  let distributionData;
  if (isBottlesQuery) {
    distributionData = [
      { name: "Premium Shelf", value: random(28, 38, 30), color: "var(--chart-1)" },
      { name: "Mid-Range", value: random(35, 45, 31), color: "var(--chart-2)" },
      { name: "House Brands", value: random(15, 25, 32), color: "var(--chart-3)" },
      { name: "Special Orders", value: random(5, 12, 33), color: "var(--chart-4)" },
    ];
  } else if (isAttendanceQuery) {
    distributionData = [
      { name: "18-25 Age", value: random(30, 40, 30), color: "var(--chart-1)" },
      { name: "26-35 Age", value: random(28, 38, 31), color: "var(--chart-2)" },
      { name: "36-50 Age", value: random(18, 28, 32), color: "var(--chart-3)" },
      { name: "50+ Age", value: random(8, 15, 33), color: "var(--chart-4)" },
    ];
  } else {
    distributionData = [
      { name: "VIP Section", value: random(25, 40, 30), color: "var(--chart-1)" },
      { name: "General Admission", value: random(35, 50, 31), color: "var(--chart-2)" },
      { name: "Bar Sales", value: random(10, 20, 32), color: "var(--chart-3)" },
      { name: "Table Service", value: random(5, 15, 33), color: "var(--chart-4)" },
    ];
  }
  
  // Bottles sold data (for specific queries)
  const locations = ["Chicago", "New York", "Los Angeles", "Miami", "Austin", "Seattle"];
  const selectedLocations = locations.slice(0, 4);
  const bottlesData = selectedLocations.map((location, index) => ({
    location,
    bottles: random(280, 450, 40 + index),
    avgPerEvent: random(70, 115, 50 + index),
  }));
  
  // Calculate dynamic metrics
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.value, 0);
  const totalAttendees = attendanceData.reduce((sum, item) => sum + item.value, 0);
  const avgTicket = totalRevenue / totalAttendees;
  
  return {
    attendanceData,
    revenueData,
    distributionData,
    bottlesData,
    metrics: {
      totalRevenue: `$${(totalRevenue / 1000).toFixed(0)}K`,
      totalAttendees: totalAttendees.toLocaleString(),
      averageTicket: `$${avgTicket.toFixed(2)}`,
      eventsCount: random(18, 32, 60).toString(),
    },
  };
};

export function ResultsScreen({ query, onBack }: ResultsScreenProps) {
  const data = generateMockData(query);

  return (
    <div className="relative min-h-screen w-full overflow-y-auto">
      <BackgroundDecoration />
      <DarkModeToggle />
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-4 sm:mb-6 touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back to Search</span>
          </button>
          
          <div className="bg-card/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-border/30 p-4 sm:p-6 shadow-[var(--elevation-sm)]">
            <p className="text-foreground/60 caption mb-2">Analysis Results for:</p>
            <h2 className="text-foreground break-words">{query}</h2>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <MetricCard
              icon={<DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Total Revenue"
              value={data.metrics.totalRevenue}
              trend="+12.5%"
            />
            <MetricCard
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Total Attendees"
              value={data.metrics.totalAttendees}
              trend="+8.3%"
            />
            <MetricCard
              icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Avg. Ticket Price"
              value={data.metrics.averageTicket}
              trend="+5.2%"
            />
            <MetricCard
              icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Events This Quarter"
              value={data.metrics.eventsCount}
              trend="+3"
            />
          </div>
        </div>

        {/* Charts Grid */}
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Attendance Trend */}
          <ChartCard title="Attendance Trend" description="Monthly comparison vs previous period">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                <XAxis dataKey="month" stroke="var(--foreground)" opacity={0.6} tick={{ fontSize: 12 }} />
                <YAxis stroke="var(--foreground)" opacity={0.6} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line type="monotone" dataKey="value" stroke="var(--chart-1)" strokeWidth={2} name="Current Period" />
                <Line type="monotone" dataKey="previous" stroke="var(--chart-2)" strokeWidth={2} strokeDasharray="5 5" name="Previous Period" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Revenue by Event */}
            <ChartCard title="Revenue by Event Type" description="Top performing events">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                  <XAxis dataKey="event" stroke="var(--foreground)" opacity={0.6} tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="var(--foreground)" opacity={0.6} tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Sales Distribution */}
            <ChartCard title="Sales Distribution" description="Breakdown by category">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="var(--chart-1)"
                    dataKey="value"
                    style={{ fontSize: '11px' }}
                  >
                    {data.distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
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
          </div>

          {/* Data Table */}
          <ChartCard title="Bottles Sold by Location" description="Average per event breakdown">
            <div className="overflow-x-auto -mx-4 sm:-mx-6">
              <div className="inline-block min-w-full align-middle px-4 sm:px-6">
                <table className="min-w-full w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-2 sm:px-3 lg:px-4 text-foreground/70 text-xs sm:text-sm">Location</th>
                      <th className="text-right py-3 px-2 sm:px-3 lg:px-4 text-foreground/70 text-xs sm:text-sm">Total Bottles</th>
                      <th className="text-right py-3 px-2 sm:px-3 lg:px-4 text-foreground/70 text-xs sm:text-sm">Avg. per Event</th>
                      <th className="text-right py-3 px-2 sm:px-3 lg:px-4 text-foreground/70 text-xs sm:text-sm">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.bottlesData.map((row, index) => (
                      <tr key={index} className="border-b border-border/20 hover:bg-secondary/50 transition-colors">
                        <td className="py-3 sm:py-4 px-2 sm:px-3 lg:px-4 text-foreground text-xs sm:text-sm">{row.location}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-3 lg:px-4 text-right text-foreground text-xs sm:text-sm">{row.bottles}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-3 lg:px-4 text-right text-foreground text-xs sm:text-sm">{row.avgPerEvent}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-3 lg:px-4 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-chart-3/20 text-chart-3 caption text-xs whitespace-nowrap">
                            <TrendingUp className="w-3 h-3 flex-shrink-0" />
                            +{(Math.random() * 10 + 5).toFixed(1)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}

function MetricCard({ icon, label, value, trend }: MetricCardProps) {
  return (
    <div className="bg-card/40 backdrop-blur-md rounded-lg sm:rounded-xl border border-border/30 p-4 sm:p-5 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="caption text-chart-3">{trend}</span>
      </div>
      <p className="text-foreground/60 caption mb-1">{label}</p>
      <p className="text-foreground break-all">{value}</p>
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
        <h3 className="text-foreground mb-1">{title}</h3>
        <p className="text-foreground/60 caption">{description}</p>
      </div>
      {children}
    </div>
  );
}