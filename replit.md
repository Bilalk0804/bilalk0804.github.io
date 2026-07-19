# Mohd Bilal Khan — Personal Portfolio

A personal portfolio site for Mohd Bilal Khan (MBK) — AI Engineer, Researcher, and Builder.

## Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js (serves frontend + API)
- **Styling**: Tailwind CSS v3 + Framer Motion
- **Font**: JetBrains Mono (full-site monospace — nerdy dev vibe)
- **UI**: shadcn/ui components, Radix UI primitives

## How to Run

```bash
npm install
npm run dev       # development (port 5000)
npm run build     # production build
npm run start     # serve production build
```

The dev server runs on **port 5000** and serves both the Express API and the Vite-compiled React frontend.

## Project Structure

```
client/src/
  components/         # Reusable sections (hero, projects, nav, etc.)
  pages/              # Wouter routes: home, about, projects, experience, connect
  index.css           # Global styles + Catppuccin Mocha CSS variables
public/
  projects/           # AI-generated project thumbnail images
  bilal.jpg           # Profile photo
  resume.pdf          # Resume
server/
  index.ts            # Express entry point
  routes.ts           # API routes
shared/
  schema.ts           # Drizzle ORM schema (Neon DB)
```

## Key Features

- **Arch Linux rice-inspired background**: Animated canvas with floating terminal glyphs (`nvim`, `yay`, `$`, `>`, `1337`, etc.) in Catppuccin Mocha accent colors, dot-grid overlay, and a subtle scanline sweep
- **JetBrains Mono everywhere**: Full-site monospace for the authentic dev aesthetic
- **Terminal hero widget**: Animated neofetch-style terminal window that types out on load
- **Project images**: AI-generated thumbnails for each project
- **NodeFlowAI**: Live product at https://nodeflowai.in — showcased first

## Database

Uses `@neondatabase/serverless` (Neon PostgreSQL). Set `DATABASE_URL` secret to connect. Currently the app runs without a database since all routes are frontend-only.

## User Preferences

- Keep Arch Linux / nerdy dev aesthetic throughout
- JetBrains Mono as the primary font
- Catppuccin Mocha color palette for accents (mauve, sky, green, peach, teal, lavender)
- No music player
- Projects should have images and deployment links where available
