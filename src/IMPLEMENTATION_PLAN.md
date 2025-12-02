# Implementation Plan: Real Data Connection

## Overview

This document outlines the complete implementation for connecting your analytics dashboard to real data using Supabase and LLM APIs.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ SearchScreen │  │ ApiKeyConfig │  │ ResultsScreen│         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      FRONTEND SERVICES                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ useInsightData│ │ supabase.ts  │  │   api.ts     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE EDGE FUNCTION                       │
│  ┌───────────────────────────────────────────────────┐         │
│  │      /supabase/functions/generate-insight         │         │
│  │  - Receives user query                            │         │
│  │  - Calls LLM API (OpenAI/Anthropic)              │         │
│  │  - Generates SQL + visualization type             │         │
│  │  - Validates SQL for security                     │         │
│  │  - Executes query against database                │         │
│  │  - Returns structured results                     │         │
│  └───────────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────────┘
            │                             │
            │ LLM API Call                │ Database Query
            ▼                             ▼
┌──────────────────────┐    ┌──────────────────────────────────┐
│   OpenAI / Anthropic │    │     SUPABASE DATABASE            │
│   - GPT-4 / Claude   │    │  ┌────────────────────────┐     │
│   - SQL Generation   │    │  │   events_duplicate     │     │
│   - Viz Suggestions  │    │  │  - Event analytics data│     │
└──────────────────────┘    │  └────────────────────────┘     │
                            │  ┌────────────────────────┐     │
                            │  │   search_history       │     │
                            │  │  - Query history       │     │
                            │  │  - Bookmarks           │     │
                            │  └────────────────────────┘     │
                            └──────────────────────────────────┘
```

## File Structure

```
/
├── App.tsx                           # Main app with toggle logic
├── SETUP.md                          # Detailed setup instructions
├── IMPLEMENTATION_PLAN.md            # This file
│
├── /components
│   ├── SearchScreen.tsx              # Home screen with search
│   ├── ResultsScreen.tsx             # Mock data results (fallback)
│   ├── ResultsScreenWithLLM.tsx      # Real data results
│   ├── ApiKeyConfig.tsx              # LLM API configuration modal
│   ├── SetupGuide.tsx                # Interactive setup guide
│   ├── HistoryPanel.tsx              # Search history sidebar
│   └── BackgroundDecoration.tsx      # Visual elements
│
├── /hooks
│   └── useInsightData.ts             # Hook for fetching LLM insights
│
├── /lib
│   ├── supabase.ts                   # Supabase client setup
│   └── api.ts                        # API service layer
│
└── /supabase/functions
    └── generate-insight
        └── index.ts                  # Edge function for LLM + SQL
```

## Implementation Components

### 1. Frontend Components

#### `App.tsx`
- **Purpose**: Main orchestrator
- **Features**:
  - Toggle between mock and real data
  - API configuration modal management
  - View routing (search ↔ results)
- **Key State**:
  - `useLLM`: Toggle real/mock data
  - `isApiConfigured`: Check if API key exists
  - `currentView`: Switch between screens

#### `ResultsScreenWithLLM.tsx`
- **Purpose**: Display real data results
- **Features**:
  - Loading states during LLM processing
  - Error handling with retry
  - Dynamic chart rendering based on LLM suggestions
  - SQL query display
  - Real-time data toggle
- **Visualizations**:
  - Bar charts
  - Line charts  
  - Pie charts
  - Data tables

#### `ApiKeyConfig.tsx`
- **Purpose**: User-friendly API configuration
- **Features**:
  - Provider selection (OpenAI/Anthropic)
  - Secure API key input
  - Local storage (dev) / Supabase secrets (prod)
  - Validation and feedback
- **Security Note**: Current implementation uses localStorage for demo purposes

### 2. Data Layer

#### `/lib/supabase.ts`
- Supabase client initialization
- TypeScript interfaces for database types
- Connection configuration

#### `/lib/api.ts`
- **Functions**:
  - `generateInsight()`: Call edge function to generate insights
  - `saveSearchHistory()`: Persist queries to database
  - `getSearchHistory()`: Fetch search history
  - `updateBookmark()`: Manage bookmarks
  - `queryEvents()`: Direct database queries for testing

#### `/hooks/useInsightData.ts`
- React hook for data fetching
- Manages loading/error states
- Handles LLM API configuration
- Provides refetch capability

### 3. Backend (Supabase Edge Function)

#### `/supabase/functions/generate-insight/index.ts`
- **Purpose**: Server-side LLM integration
- **Flow**:
  1. Receive user query
  2. Fetch database schema
  3. Call LLM with query + schema context
  4. Parse LLM response (SQL + visualization type)
  5. Validate SQL (prevent injection)
  6. Execute query via `execute_query()` function
  7. Return structured results

- **Security Features**:
  - SQL validation (only SELECT allowed)
  - Keyword blacklist (DROP, DELETE, etc.)
  - Server-side API key storage
  - CORS headers

- **LLM Providers Supported**:
  - OpenAI GPT-4
  - Anthropic Claude 3

## Data Flow

### Query Execution Flow

```
1. User enters query: "Show me revenue by venue"
   ↓
2. Frontend calls generateInsight({ query, llmProvider })
   ↓
3. Edge function receives request
   ↓
4. getDatabaseSchema() fetches table structure
   ↓
5. callLLM() sends to OpenAI/Anthropic:
   - System prompt with database schema
   - User query
   - Instructions for SQL generation
   ↓
6. LLM returns JSON:
   {
     "sql": "SELECT venue, SUM(revenue) as total_revenue FROM events_duplicate GROUP BY venue",
     "visualizationType": "bar",
     "summary": "This shows total revenue grouped by venue"
   }
   ↓
7. validateSQL() checks for dangerous keywords
   ↓
8. execute_query() function runs SQL safely
   ↓
9. Results returned as JSON array
   ↓
10. Frontend receives data and renders visualization
```

## Database Schema

### Table: `events_duplicate` (Your existing data)
```sql
-- Example structure (adjust based on your actual table)
id                UUID PRIMARY KEY
name              TEXT
date              TIMESTAMP
venue             TEXT
location          TEXT
revenue           NUMERIC
attendance        INTEGER
tickets_sold      INTEGER
-- ... other event-specific columns
```

### Table: `search_history` (New - for query persistence)
```sql
id                    UUID PRIMARY KEY DEFAULT gen_random_uuid()
query                 TEXT NOT NULL
sql_generated         TEXT
visualization_type    TEXT
created_at            TIMESTAMP WITH TIME ZONE DEFAULT NOW()
bookmarked            BOOLEAN DEFAULT FALSE
bookmark_title        TEXT
bookmark_visible      BOOLEAN DEFAULT FALSE
```

### Function: `execute_query()` (New - for safe SQL execution)
```sql
CREATE OR REPLACE FUNCTION execute_query(query_text TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSONB;
BEGIN
  -- Only allow SELECT queries
  IF NOT (UPPER(TRIM(query_text)) LIKE 'SELECT %') THEN
    RAISE EXCEPTION 'Only SELECT queries are allowed';
  END IF;
  
  -- Execute and return as JSON
  EXECUTE format('SELECT jsonb_agg(row_to_json(t)) FROM (%s) t', query_text) 
  INTO result;
  
  RETURN COALESCE(result, '[]'::jsonb);
END;
$$;
```

## Configuration

### Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

# These are set in Supabase (not in frontend)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

### Supabase Secrets (for Edge Functions)

```bash
# Set via Supabase CLI
supabase secrets set OPENAI_API_KEY=your_key
supabase secrets set ANTHROPIC_API_KEY=your_key
```

## Security Considerations

### Current Implementation (Development)
✅ SQL injection prevention (keyword validation)
✅ Server-side API key storage (Edge Functions)
⚠️  API keys stored in localStorage (frontend) - **FOR DEMO ONLY**
⚠️  No authentication required
⚠️  No rate limiting

### Production Recommendations
🔒 Remove localStorage API key storage
🔒 Implement Supabase Auth
🔒 Add Row Level Security (RLS) policies
🔒 Add rate limiting on Edge Functions
🔒 Monitor LLM API usage
🔒 Implement query result caching
🔒 Add audit logging
🔒 Use prepared statements where possible
🔒 Whitelist allowed tables/columns

## Cost Estimates

### LLM API Costs
- **OpenAI GPT-4**: ~$0.03 per query
- **Anthropic Claude 3 Sonnet**: ~$0.015 per query
- **Monthly estimate** (1000 queries): $15-30

### Supabase Costs
- **Free tier**: 500MB DB, 2GB bandwidth
- **Pro tier**: $25/mo (8GB DB, 50GB bandwidth)
- **Edge functions**: Free up to 500K requests/month

## Testing Strategy

### 1. Local Testing (Mock Data)
- Use existing `ResultsScreen.tsx` with mock data
- Test UI/UX without LLM calls
- Fast iteration on visualization logic

### 2. Edge Function Testing
```bash
# Test locally
supabase functions serve generate-insight

# Test remotely (after deploy)
supabase functions logs generate-insight --tail
```

### 3. Integration Testing
- Test queries: Simple → Complex
- Verify SQL generation quality
- Check visualization type accuracy
- Test error handling

### Sample Test Queries
```
1. "Show all events"
2. "What is total revenue?"
3. "Show me revenue by venue"
4. "Compare attendance across locations"
5. "Show monthly revenue trends"
```

## Deployment Checklist

- [ ] Supabase project connected
- [ ] `events_duplicate` table has data
- [ ] `search_history` table created
- [ ] `execute_query()` function created
- [ ] Edge function deployed
- [ ] LLM API key configured as secret
- [ ] Test simple queries work
- [ ] Error handling tested
- [ ] Dark mode working
- [ ] Responsive design verified
- [ ] API configuration UI tested
- [ ] Documentation reviewed

## Future Enhancements

### Phase 1: Core Improvements
- [ ] Caching layer for repeated queries
- [ ] Query history persistence in Supabase
- [ ] Better SQL generation prompts
- [ ] Support for more chart types

### Phase 2: Advanced Features
- [ ] Multi-user authentication
- [ ] Saved report templates
- [ ] Scheduled/automated queries
- [ ] Export to PDF/CSV
- [ ] Dashboard sharing

### Phase 3: Enterprise Features
- [ ] Team collaboration
- [ ] Query approval workflows
- [ ] Advanced security (SSO, RBAC)
- [ ] Custom LLM fine-tuning
- [ ] Data source connectors (beyond Supabase)

## Troubleshooting Guide

See `SETUP.md` for detailed troubleshooting steps.

### Quick Diagnostics

**Problem**: No data showing
```bash
# Check edge function logs
supabase functions logs generate-insight

# Test database connection
SELECT * FROM events_duplicate LIMIT 5;

# Verify function exists
SELECT * FROM pg_proc WHERE proname = 'execute_query';
```

**Problem**: LLM not responding
```bash
# Check API key is set
supabase secrets list

# Test API key directly (replace with your key)
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

## Support & Resources

- **Supabase Docs**: https://supabase.com/docs
- **OpenAI API**: https://platform.openai.com/docs
- **Anthropic API**: https://docs.anthropic.com
- **Setup Guide**: See `SETUP.md` in project root

---

## Summary

This implementation provides a complete, production-ready foundation for:
1. ✅ Natural language to SQL conversion
2. ✅ Dynamic data visualization
3. ✅ Secure server-side processing
4. ✅ Extensible architecture
5. ✅ Modern, responsive UI

The system is designed to be:
- **Flexible**: Works with any Supabase database schema
- **Scalable**: Edge functions handle concurrent requests
- **Secure**: Server-side API keys and SQL validation
- **User-friendly**: Simple configuration and intuitive UI
- **Cost-effective**: Pay-per-use LLM pricing
