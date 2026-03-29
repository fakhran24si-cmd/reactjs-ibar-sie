# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
reactjs-ibar-sie
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ pertemuan-2.html
├─ public
│  ├─ img
│  │  └─ messi.jpg
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ profile.jpg
│  │  └─ react.svg
│  ├─ components
│  │  ├─ BiodataItem.jsx
│  │  ├─ mainn.jsx
│  │  └─ Profile.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ pertemuan-2
│     ├─ Container.jsx
│     ├─ custom.css
│     ├─ HelloWorld.jsx
│     ├─ main.jsx
│     └─ QuoteText.jsx
└─ vite.config.js

```