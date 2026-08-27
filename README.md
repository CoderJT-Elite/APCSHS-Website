# Grand Blanc Computer Science Honor Society (GBCSHS) Website

Official website for the Grand Blanc High School Chapter of the Computer Science Honor Society (GBCSHS), an affiliate of the Computer Science Teachers Association (CSTA).

## Quickstart

This repository is an ordinary Vite + React + TypeScript + Tailwind CSS application. No special environment variables or external accounts are required.

```bash
# Install dependencies
npm install

# Run local development server (defaults to localhost:5173)
npm run dev

# Typecheck
npm run typecheck

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Environment Variables (Optional)

- `PORT` (optional, default: `5173`): Local dev server port.
- `BASE_PATH` (optional, default: `/` for local dev, `/APCSHS-Website/` for GitHub Pages deployment): Base subpath for static asset hosting and router.

## Project Structure

```
├── public/                 # Static assets (constitution.pdf, favicon, og-image, robots.txt)
├── src/
│   ├── components/         # Navigation, Footer, BrandMark, UI primitives
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Routes (Home, About, Membership, Academics, Service, Leadership, NotFound)
│   ├── App.tsx             # Wouter routing & Theme provider setup
│   ├── index.css           # Tailwind v4 theme tokens (Light & Dark modes)
│   └── main.tsx            # Application entry point
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Pinned dependencies and scripts
```

## Deployment

The website automatically deploys to GitHub Pages on every push to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

## Historical Provenance Notes

<!--
Legacy Replit Agent Generated Asset Provenance:
- NACEDA_hfCZm8wksX9g_T: hero-bg.png ("Late night coding session") - Replaced with SVG art direction in 2026-08-27 rebuild.
- -sL_5449KXuhggxXzdS7t: abstract-tech.png ("Tech abstract crest") - Replaced with SVG art direction in 2026-08-27 rebuild.
-->

## License

MIT
