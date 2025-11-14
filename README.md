# Vortex Gallery

Interactive WebGL gallery built with Vite, TypeScript, Three.js and GLSL shaders.

## Development

- Install: `npm install`
- Run dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Test: `npm test`

## Deployment

This repo is configured to deploy to GitHub Pages using an Actions workflow:

- Branch: `main`
- Workflow: `.github/workflows/pages.yml`
- Build output: `dist/`
- Vite base: `/Balya94/`

On push to `main`, GitHub Actions builds and publishes to Pages securely via OIDC.

### Netlify

- Add the repository to Netlify and set:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Environment: `VITE_BASE=/`
- A `netlify.toml` is included to ensure consistent settings.

### Vercel

- Import the repository in Vercel and set:
  - Install command: `npm ci`
  - Build command: `npm run build`
  - Output directory: `dist`
  - Environment: `VITE_BASE=/`
- A `vercel.json` is included to define build/output.

## Assets

Images are served from `public/frames/` and composed into a texture atlas at runtime.

## Security

- Dev/preview servers send `Cache-Control: no-store` headers for assets.
- No secrets are committed. GitHub Pages uses short-lived OIDC tokens.

## Troubleshooting

- If assets 404 on Netlify/Vercel, ensure `VITE_BASE=/` in environment.
- If assets 404 on GitHub Pages, ensure `VITE_BASE=/Balya94/` or customize to repo name.
- Verify build logs for missing modules or misconfigured output directory.

## Version & Timestamp

- Version: `0.0.1` (tag `v0.0.1`)
- Deployed: 2025-11-14
