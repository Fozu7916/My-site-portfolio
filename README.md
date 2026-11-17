# Aleksey Shikin — Portfolio

Personal engineering portfolio for a .NET backend developer. The interface follows a restrained dark design system and presents every project through one typed, data-driven case-study template.

Live site: [https://fozu-dev.site/](https://fozu-dev.site/)

## Stack

- React 18 and TypeScript
- Vite
- React Router
- Framer Motion
- GitHub Pages

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

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml`. GitHub Pages has no SPA fallback, so `npm run build` also copies `dist/index.html` to `dist/404.html` (the `postbuild` script). Pages serves that file for any unknown path, which lets React Router handle deep links such as `/projects` after a refresh.



