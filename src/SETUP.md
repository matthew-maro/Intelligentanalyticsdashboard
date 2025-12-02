# Setup Guide: Connecting to Real Data

This guide explains how to connect your analytics dashboard to real data using Supabase and an LLM API (OpenAI or Anthropic).

## Architecture Overview

```
User Query → LLM (OpenAI/Anthropic) → SQL Generation → Supabase Database → Results → Visualization
```

### Components

1. **Frontend (React)**: User interface for queries and visualizations
2. **Supabase Database**: Stores your event data in `events_duplicate` table
3. **Supabase Edge Function**: Server-side function that securely calls LLM APIs
4. **LLM API**: Generates SQL queries from natural language (OpenAI GPT-4 or Anthropic Claude)

## Prerequisites

- ✅ Supabase project connected (you've already done this!)
- ⚙️ LLM API key (OpenAI or Anthropic)
- 📊 Event data in `events_duplicate` table

---

## Step 1: Set Up Database Schema

### Required Tables

#### 1. `events_duplicate` (Your existing table)
Your event analytics data should be here. Common columns might include:
- `id` - Unique event identifier
- `name` - Event name
- `date` - Event date
- `venue` - Venue name
- `location` - City/region
- `revenue` - Total revenue
- `attendance` - Number of attendees
- `tickets_sold` - Ticket count
- *...any other event-specific data*

#### 2. `search_history` (New table for storing queries)

Create this table in Supabase SQL Editor:

```sql
CREATE TABLE search_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  query TEXT NOT NULL,
  sql_generated TEXT,
  visualization_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  bookmarked BOOLEAN DEFAULT FALSE,
  bookmark_title TEXT,
  bookmark_visible BOOLEAN DEFAULT FALSE
);

-- Index for faster queries
CREATE INDEX idx_search_history_created_at ON search_history(created_at DESC);
CREATE INDEX idx_search_history_bookmarked ON search_history(bookmarked);
```

---

## Step 2: Deploy Supabase Edge Function

### Deploy the `generate-insight` function

1. Install Supabase CLI (if not already installed):
```bash
npm install -g supabase
```

2. Login to Supabase:
```bash
supabase login
```

3. Link your project:
```bash
supabase link --project-ref YOUR_PROJECT_REF
```

4. Deploy the edge function:
```bash
supabase functions deploy generate-insight
```

5. Set your LLM API key as a secret:

For OpenAI:
```bash
supabase secrets set OPENAI_API_KEY=your_openai_api_key_here
```

For Anthropic:
```bash
supabase secrets set ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

---

## Step 3: Create Database Function for Query Execution

The edge function needs a way to execute generated SQL safely. Create this in Supabase SQL Editor:

```sql
CREATE OR REPLACE FUNCTION execute_query(query_text TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSONB;
BEGIN
  -- Security: Only allow SELECT queries
  IF NOT (UPPER(TRIM(query_text)) LIKE 'SELECT %') THEN
    RAISE EXCEPTION 'Only SELECT queries are allowed';
  END IF;
  
  -- Execute the query and return results as JSON
  EXECUTE format('SELECT jsonb_agg(row_to_json(t)) FROM (%s) t', query_text) INTO result;
  
  RETURN COALESCE(result, '[]'::jsonb);
END;
$$;
```

---

## Step 4: Get an LLM API Key

### Option A: OpenAI (Recommended for general use)

1. Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)
5. **Important**: Add billing information to avoid rate limits

**Pricing**: ~$0.03 per 1K tokens (GPT-4)

### Option B: Anthropic Claude (Alternative)

1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Sign in or create an account
3. Navigate to "API Keys" section
4. Create a new API key
5. Copy the key

**Pricing**: ~$0.015 per 1K tokens (Claude 3 Sonnet)

---

## Step 5: Configure the Application

### In the Dashboard UI:

1. Click the **Settings icon** (⚙️) in the top-left when viewing results
2. Choose your LLM provider (OpenAI or Anthropic)
3. Paste your API key
4. Click "Save Configuration"

### Alternative: Environment Variables (Production)

For production deployments, set these in your `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Then update the edge function secrets (Step 2.5 above).

---

## Step 6: Test the Integration

### Test with a simple query:

1. Go to the search screen
2. Enter: **"Show me total revenue by event"**
3. Press Enter
4. Click the "Real Data" toggle in the results screen
5. You should see:
   - ✅ Generated SQL query
   - ✅ Data from your `events_duplicate` table
   - ✅ Appropriate visualization (bar chart, table, etc.)

### Example Queries to Try:

- "What is the average attendance per event?"
- "Show me revenue by location"
- "Which events had the highest ticket sales?"
- "Compare revenue between venues"
- "Show monthly attendance trends"

---

## Troubleshooting

### Error: "API key not configured"
- **Solution**: Configure your LLM API key using the Settings button (⚙️)

### Error: "Query execution failed"
- **Solution**: Check that the `execute_query` function is created in Supabase (Step 3)
- Verify your table name is `events_duplicate` or update the schema context

### Error: "Failed to generate insight"
- **Solution**: 
  - Check Supabase Edge Function logs: `supabase functions logs generate-insight`
  - Verify your LLM API key is valid and has billing enabled
  - Check that secrets are properly set in Supabase

### No data showing in visualizations
- **Solution**: 
  - Verify your `events_duplicate` table has data
  - Check the generated SQL query for syntax errors
  - Try a simpler query like "Show all events"

### Edge function not deploying
- **Solution**:
  - Ensure Supabase CLI is logged in: `supabase login`
  - Verify project is linked: `supabase projects list`
  - Check for TypeScript errors in `/supabase/functions/generate-insight/index.ts`

---

## Security Considerations

### ⚠️ Important: This is a Development Setup

The current implementation stores API keys in `localStorage` for **demonstration purposes only**.

### For Production:

1. **Never store API keys in the frontend**
   - Use Supabase Edge Function secrets exclusively
   - Remove localStorage API key storage

2. **Implement authentication**
   - Add Supabase Auth to restrict access
   - Use Row Level Security (RLS) policies

3. **Rate limiting**
   - Add rate limits to edge functions
   - Monitor LLM API usage

4. **SQL validation**
   - The edge function validates SQL, but add additional checks
   - Consider using prepared statements
   - Whitelist allowed tables

5. **PII and sensitive data**
   - Figma Make is not designed for PII or highly sensitive data
   - Implement additional encryption if needed
   - Consider data anonymization

---

## Cost Estimation

### LLM API Costs (per 1000 queries):

**OpenAI GPT-4**:
- ~$30-50 per 1000 queries
- Faster responses
- Better at complex SQL

**Anthropic Claude**:
- ~$15-25 per 1000 queries  
- Cost-effective
- Good for most queries

### Supabase Costs:
- Free tier: 500MB database, 2GB bandwidth
- Pro tier ($25/mo): 8GB database, 50GB bandwidth
- Edge functions: Free up to 500K requests/month

---

## Next Steps

Once everything is working:

1. **Add more event data** to `events_duplicate`
2. **Create custom visualizations** for specific KPIs
3. **Set up scheduled queries** for automated reports
4. **Implement caching** to reduce LLM API calls
5. **Add authentication** for multi-user support

---

## Support

### Useful Resources:
- [Supabase Documentation](https://supabase.com/docs)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Anthropic API Reference](https://docs.anthropic.com/claude/reference)

### Getting Help:
- Check Supabase Edge Function logs for errors
- Review generated SQL queries for issues
- Test queries directly in Supabase SQL Editor
- Verify database table structure matches expectations
