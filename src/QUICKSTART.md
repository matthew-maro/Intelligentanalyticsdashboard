# Quick Start Guide

## Running the App (No Setup Required)

The app works out of the box in **Mock Data Mode**:

```bash
npm install
npm run dev
```

That's it! The app will run with demo data and no configuration needed.

---

## Connecting to Supabase (For Real Data)

### Step 1: Get Your Supabase Credentials

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Open your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### Step 2: Create Environment File

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJxxxxxxxxxxxxx
   ```

### Step 3: Restart the Dev Server

```bash
npm run dev
```

That's it! Your app is now connected to Supabase.

---

## Enabling Real Data Mode

Once Supabase is connected, follow the full setup guide in `README_REAL_DATA.md` to:

1. Set up database tables
2. Deploy edge functions
3. Configure LLM API (OpenAI or Anthropic)

---

## Troubleshooting

### Error: "Cannot read properties of undefined (reading 'VITE_SUPABASE_URL')"

**Solution**: Create a `.env` file with your Supabase credentials (see Step 2 above)

### The app works but shows "Mock Data Mode"

**Solution**: This is normal! Mock mode works without any setup. To use real data:
1. Make sure `.env` is configured
2. Restart the dev server
3. Follow `README_REAL_DATA.md` for full real data setup

### I don't have Supabase credentials

**Solution**: 
- **Option 1**: Use Mock Data Mode (no setup needed)
- **Option 2**: Create a free Supabase account at [supabase.com](https://supabase.com)

---

## File Structure

```
.env                    ← Your environment variables (create this)
.env.example           ← Template for .env
README_REAL_DATA.md    ← Full real data setup guide
SETUP.md               ← Detailed Supabase + LLM setup
IMPLEMENTATION_PLAN.md ← Technical architecture docs
```

---

## What's Next?

1. **Using Mock Data**: Just start using the app! Everything works.
2. **Want Real Data**: Follow `README_REAL_DATA.md` for complete setup.
3. **Having Issues**: Check `SETUP.md` troubleshooting section.

---

**Need help?** All documentation files are in the project root.
