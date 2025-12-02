# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                            USER INTERFACE                               │
│                                                                         │
│  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐ │
│  │  SearchScreen   │────▶│  User enters    │────▶│  ResultsScreen  │ │
│  │  - Search input │     │  natural lang   │     │  - Charts       │ │
│  │  - Bookmarks    │     │  query          │     │  - Tables       │ │
│  │  - History      │     └─────────────────┘     │  - Metrics      │ │
│  └─────────────────┘              │              └─────────────────┘ │
│                                    │                                   │
│                                    ▼                                   │
│                          ┌──────────────────┐                         │
│                          │  Toggle Mode:    │                         │
│                          │  Mock vs Real    │                         │
│                          └──────────────────┘                         │
│                            │              │                            │
│                    MOCK    │              │    REAL                   │
│                            ▼              ▼                            │
│                   ┌──────────────┐  ┌──────────────┐                 │
│                   │  Mock Data   │  │  LLM + DB    │                 │
│                   │  Generator   │  │  Query       │                 │
│                   └──────────────┘  └──────────────┘                 │
└─────────────────────────────────────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         BACKEND SERVICES                                │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │              Supabase Edge Function                              │ │
│  │              /supabase/functions/generate-insight                │ │
│  │                                                                  │ │
│  │  1. Receive user query                                          │ │
│  │  2. Fetch database schema (table structure)                     │ │
│  │  3. Call LLM API:                                               │ │
│  │     ┌────────────────────────────────┐                          │ │
│  │     │  System Prompt:                │                          │ │
│  │     │  - Database schema context     │                          │ │
│  │     │  - SQL generation instructions │                          │ │
│  │     │  - Security guidelines         │                          │ │
│  │     └────────────────────────────────┘                          │ │
│  │  4. Receive LLM response:                                       │ │
│  │     {                                                           │ │
│  │       "sql": "SELECT ...",                                      │ │
│  │       "visualizationType": "bar",                               │ │
│  │       "summary": "..."                                          │ │
│  │     }                                                           │ │
│  │  5. Validate SQL (security checks)                             │ │
│  │  6. Execute via execute_query() function                        │ │
│  │  7. Return results to frontend                                  │ │
│  └──────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
            │                                    │
            │ LLM API Call                       │ Database Query
            ▼                                    ▼
┌────────────────────────┐           ┌─────────────────────────────────┐
│  OpenAI or Anthropic   │           │     Supabase Database           │
│                        │           │                                 │
│  Provider: OpenAI      │           │  ┌───────────────────────────┐ │
│  Model: GPT-4          │           │  │  events_duplicate         │ │
│  Cost: ~$0.03/query    │           │  │  ─────────────────────    │ │
│                        │           │  │  Your event analytics     │ │
│  OR                    │           │  │  data goes here           │ │
│                        │           │  └───────────────────────────┘ │
│  Provider: Anthropic   │           │                                 │
│  Model: Claude 3       │           │  ┌───────────────────────────┐ │
│  Cost: ~$0.015/query   │           │  │  search_history           │ │
│                        │           │  │  ─────────────────────    │ │
└────────────────────────┘           │  │  Stores query history,    │ │
                                     │  │  bookmarks, and SQL       │ │
                                     │  └───────────────────────────┘ │
                                     │                                 │
                                     │  ┌───────────────────────────┐ │
                                     │  │  execute_query()          │ │
                                     │  │  ─────────────────────    │ │
                                     │  │  PL/pgSQL function for    │ │
                                     │  │  safe SQL execution       │ │
                                     │  └───────────────────────────┘ │
                                     └─────────────────────────────────┘
```

## Data Flow - Real Data Mode

### Step 1: User Query
```
User types: "What is the total revenue by venue?"
```

### Step 2: Frontend Processing
```typescript
// /hooks/useInsightData.ts
const { data, loading, error } = useInsightData(query);
↓
// /lib/api.ts
generateInsight({ query, llmProvider: "openai" })
↓
// Calls Supabase Edge Function
supabase.functions.invoke("generate-insight", { body: request })
```

### Step 3: Edge Function Processing
```typescript
// /supabase/functions/generate-insight/index.ts

// 3a. Fetch database schema
const schema = await getDatabaseSchema()
// Returns: "Table: events_duplicate, Columns: id, name, venue, revenue..."

// 3b. Construct LLM prompt
const systemPrompt = `
You are a SQL expert. Here is the database schema:
${schema}

Generate a PostgreSQL query for: "${userQuery}"
Return JSON with:
- sql: The SELECT query
- visualizationType: "bar", "line", "pie", or "table"
- summary: Brief explanation
`

// 3c. Call OpenAI/Anthropic
const llmResponse = await callLLM(systemPrompt, userQuery)
// Returns: { sql: "SELECT venue, SUM(revenue)...", visualizationType: "bar", ... }

// 3d. Validate SQL (security)
validateSQL(llmResponse.sql)  // Checks for DROP, DELETE, etc.

// 3e. Execute query
const results = await executeQuery(llmResponse.sql)

// 3f. Return to frontend
return { sql, visualizationType, data: results, summary }
```

### Step 4: Frontend Rendering
```typescript
// /components/ResultsScreenWithLLM.tsx

// Receive data
const { data, loading, error } = useInsightData(query)

// Choose visualization based on LLM suggestion
if (data.visualizationType === "bar") {
  render <BarChart data={data.data} />
} else if (data.visualizationType === "line") {
  render <LineChart data={data.data} />
}
// ... etc
```

## Component Architecture

```
/App.tsx (Main orchestrator)
│
├─ State Management
│  ├─ currentView: "search" | "results"
│  ├─ currentQuery: string
│  ├─ useLLM: boolean (toggle mock/real)
│  └─ searchHistory: SearchHistoryItem[]
│
├─ Components
│  ├─ <SearchScreen />
│  │  ├─ Search input
│  │  ├─ Bookmark cards
│  │  └─ <HistoryPanel />
│  │
│  ├─ <ResultsScreen /> (Mock data)
│  │  └─ Static visualizations
│  │
│  ├─ <ResultsScreenWithLLM /> (Real data)
│  │  ├─ useInsightData() hook
│  │  ├─ Loading states
│  │  ├─ Error handling
│  │  └─ Dynamic charts
│  │
│  └─ <ApiKeyConfig />
│     └─ LLM API configuration
│
└─ Services
   ├─ /lib/supabase.ts - Database client
   ├─ /lib/api.ts - API calls
   └─ /hooks/useInsightData.ts - Data fetching hook
```

## Security Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        SECURITY LAYERS                          │
└─────────────────────────────────────────────────────────────────┘

1. FRONTEND (Client-side)
   ├─ API Key stored in localStorage (DEV ONLY)
   ├─ Basic input validation
   └─ HTTPS communication only

2. EDGE FUNCTION (Server-side)
   ├─ API keys stored as Supabase secrets (Production)
   ├─ CORS headers configured
   ├─ Request validation
   └─ SQL validation layer:
      ├─ Keyword blacklist: DROP, DELETE, INSERT, etc.
      ├─ Query type check: Only SELECT allowed
      └─ Format validation

3. DATABASE (Supabase)
   ├─ execute_query() function with SECURITY DEFINER
   ├─ Only SELECT queries permitted
   ├─ Connection pooling
   └─ Built-in Supabase security:
      ├─ Row Level Security (RLS) ready
      ├─ SSL connections
      └─ Audit logging available

4. LLM API (OpenAI/Anthropic)
   ├─ API key authentication
   ├─ Rate limiting (provider-side)
   └─ Usage monitoring
```

## Cost Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                         COST BREAKDOWN                         │
└────────────────────────────────────────────────────────────────┘

Per Query Cost:
├─ LLM API Call
│  ├─ OpenAI GPT-4: ~$0.03
│  └─ Anthropic Claude: ~$0.015
│
├─ Supabase Database Query: ~$0 (included in tier)
│
└─ Edge Function Execution: ~$0 (500K/month free)

Monthly Estimates:
├─ 100 queries:    $1.50 - $3
├─ 1,000 queries:  $15 - $30
└─ 10,000 queries: $150 - $300

Optimization Strategies:
├─ Cache frequent queries (reduces LLM calls)
├─ Use Claude instead of GPT-4 (50% cheaper)
├─ Batch similar queries
└─ Implement query result caching in Supabase
```

## Deployment Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT TOPOLOGY                         │
└────────────────────────────────────────────────────────────────┘

DEVELOPMENT
├─ Frontend: Local (npm run dev)
├─ Database: Supabase Cloud
├─ Edge Functions: Local OR deployed
└─ API Keys: localStorage (NOT SECURE)

STAGING
├─ Frontend: Vercel/Netlify
├─ Database: Supabase Cloud (staging project)
├─ Edge Functions: Supabase Cloud
└─ API Keys: Supabase Secrets

PRODUCTION
├─ Frontend: Vercel/Netlify with CDN
├─ Database: Supabase Cloud (production project)
├─ Edge Functions: Supabase Cloud (multiple regions)
├─ API Keys: Supabase Secrets (never in frontend)
├─ Authentication: Supabase Auth
├─ Monitoring: Supabase Dashboard + Custom alerts
└─ Caching: Redis/Supabase + CDN
```

## Technology Stack

```
┌────────────────────────────────────────────────────────────────┐
│                      TECH STACK                                │
└────────────────────────────────────────────────────────────────┘

FRONTEND
├─ React 18
├─ TypeScript
├─ Tailwind CSS 4.0
├─ Recharts (visualizations)
├─ Lucide React (icons)
└─ Custom hooks (useInsightData)

BACKEND
├─ Supabase
│  ├─ PostgreSQL Database
│  ├─ Edge Functions (Deno)
│  └─ Realtime (optional)

AI/LLM
├─ OpenAI GPT-4
│  └─ Text → SQL conversion
└─ Anthropic Claude 3
   └─ Alternative LLM provider

DEPLOYMENT
├─ Vercel (recommended for frontend)
├─ Supabase Cloud (database + functions)
└─ GitHub (version control + CI/CD)

DEVELOPMENT
├─ Vite (build tool)
├─ Supabase CLI
└─ ESLint + Prettier
```

## Scalability Considerations

```
┌────────────────────────────────────────────────────────────────┐
│                    SCALING STRATEGY                            │
└────────────────────────────────────────────────────────────────┘

VERTICAL SCALING (Current setup)
├─ Supabase Free: 500MB DB, 2GB transfer
├─ Supabase Pro: 8GB DB, 50GB transfer
└─ Supabase Team: 100GB DB, 250GB transfer

HORIZONTAL SCALING (Future)
├─ Multi-region edge functions
├─ Read replicas for database
├─ CDN for static assets
└─ Load balancing for API calls

OPTIMIZATION
├─ Query result caching (Redis)
├─ Materialized views for common queries
├─ Connection pooling (PgBouncer)
├─ Rate limiting per user
└─ Batch processing for bulk queries

MONITORING
├─ Supabase Dashboard (built-in)
├─ Custom metrics:
│  ├─ Query response time
│  ├─ LLM API latency
│  ├─ Error rates
│  └─ Cost per query
└─ Alerts for:
   ├─ API failures
   ├─ High costs
   └─ Slow queries
```

## Future Architecture Enhancements

```
┌────────────────────────────────────────────────────────────────┐
│                  FUTURE IMPROVEMENTS                           │
└────────────────────────────────────────────────────────────────┘

PHASE 1: Enhanced Intelligence
├─ Query caching layer
├─ Learning from past queries
├─ Query suggestions/autocomplete
└─ Better error messages

PHASE 2: Multi-User
├─ Supabase Auth integration
├─ User-specific query history
├─ Shared dashboards
└─ Team collaboration

PHASE 3: Advanced Analytics
├─ Scheduled/automated queries
├─ Email reports
├─ PDF/CSV export
├─ Custom report templates
└─ Dashboard embedding

PHASE 4: Enterprise
├─ SSO authentication
├─ Role-based access control (RBAC)
├─ Audit logging
├─ Data governance
├─ Custom LLM fine-tuning
└─ Multi-database support
```

---

This architecture is designed to be:
- ✅ **Scalable**: From prototype to production
- ✅ **Secure**: Multiple security layers
- ✅ **Cost-effective**: Pay-per-use model
- ✅ **Maintainable**: Clean separation of concerns
- ✅ **Extensible**: Easy to add features
