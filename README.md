# Shnappy

Monorepo for the Shnappy marketing site and authenticated application.

## Layout

```
apps/
  website/   Astro static site (marketing, blog, help)
  app/       Vite + React SPA (authenticated studio)
packages/
  ui/        Shared React components
  styles/    Shared SCSS tokens, mixins, icon font
```

## Commands

```bash
npm install
npm run dev:website   # marketing site
npm run dev:app       # SPA
npm run build         # build everything
```

## Legacy

The previous PHP/HTML sources live in `_shnappy-website/` and `_shnappy-application/` for reference during the migration. They will be removed once parity is reached.
