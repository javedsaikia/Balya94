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

## Assets

Images are served from `public/frames/` and composed into a texture atlas at runtime.

## Security

- Dev/preview servers send `Cache-Control: no-store` headers for assets.
- No secrets are committed. GitHub Pages uses short-lived OIDC tokens.

## Version & Timestamp

- Version: `0.0.0`
- Deployed: <!-- DEPLOY_TS -->

