# Aleksey Shikin — Portfolio

Personal engineering portfolio for a .NET backend developer. The interface follows a restrained dark design system and presents every project through one typed, data-driven case-study template.

Live site: [fozu-portfolio.netlify.app](https://fozu-portfolio.netlify.app)

## Stack

- React 18 and TypeScript
- Vite
- React Router
- Framer Motion
- Netlify

## Project structure

```text
src/
├── app/       application bootstrap and routes
├── features/  contact and projects domain features
├── pages/     route-level screens
├── shared/    data, reusable UI and global styles
└── widgets/   site layout
```

Project metadata lives in `src/features/projects/model/projects.ts`. Legacy project URLs redirect to `/projects/:slug`, so existing external links remain valid.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Netlify reads `netlify.toml`, builds the app into `dist`, and serves client-side routes through the SPA fallback.



