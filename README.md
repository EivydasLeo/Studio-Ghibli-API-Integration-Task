# Studio Ghibli API Integration Task

Small React + TypeScript app that integrates the public Studio Ghibli API.

https://studio-ghibli-api-integration-task.vercel.app/


## Features

-   **Films list**: fetches and displays films.
-   **People per film**: click a film’s “Show people” to fetch people and filter them by film.
-   **Loading states**: skeleton UI while films/people are loading.
-   **Error states**: accessible alerts for failures.
-   **Empty state**: “No people found for this film.” when the selected film has no matching people.
-   **Accessibility**:
    -   Film toggle button exposes `aria-expanded` and `aria-controls`.
    -   People section announces updates (`aria-live`) and exposes busy state (`aria-busy`).

## Tech Stack

-   React + TypeScript
-   Vite
-   React Router
-   Redux Toolkit + RTK Query
-   Vitest + React Testing Library

## API

Base URL: `https://ghibliapi.vercel.app/`

Endpoints used:

-   `GET /films`
-   `GET /people`

## Getting Started

Prerequisites:

-   Node.js (recommended: 18+)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

-   `npm run dev` – start Vite dev server
-   `npm run build` – typecheck + build
-   `npm run lint` – run ESLint
-   `npm run test` – run Vitest in watch mode
-   `npm run test:run` – run Vitest once (CI-style)

## Testing

Tests focus on “high-value” logic:

-   Films page behavior (loading/error/empty states)
-   Layout navigation rendering
-   Helper logic (`personAppearsInFilm`)

Run tests:

```bash
npm run test:run
```
