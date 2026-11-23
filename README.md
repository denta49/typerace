# Typerace

Real-time multiplayer typing race. Players join a live lobby and type the same sentence each round, and everyone's progress updates live. Results are saved to an all-time leaderboard.

**Live demo:** https://typerace.iskratech.com

## Features

- Live lobby with presence and real-time progress of other players (Supabase Realtime channels, throttled progress updates)
- Typing engine that computes words per minute (WPM) and accuracy live, with a round timer and a deterministic sentence per round
- All-time leaderboard and live results tables (TanStack Table), with sorting kept in the URL
- Nickname dialog with form validation (React Hook Form and Zod)
- Client state in Zustand stores and server state in TanStack Query hooks

## Tech stack

Next.js, React, TypeScript, Supabase (Postgres and Realtime), TanStack Query, TanStack Table, Zustand, React Hook Form, Zod, Tailwind CSS, shadcn/ui

Quality tooling: ESLint (zero warnings allowed), Prettier, TypeScript type checking, Husky pre-commit and pre-push hooks

## Running locally

```bash
npm install
# .env.local: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```
