# Next.js version – React Learning Lab

This folder is a **Next.js 14** (App Router) version of the React Learning Lab, with **server-side data fetching** and two main pages.

## What’s inside

- **App Router** with `app/layout.jsx`, `app/page.jsx` (Home), and `app/movies/page.jsx` (Movies).
- **Server-side data**: `lib/data.js` exports `getExercises()` and `getMovies()`, which are async and run on the server. They’re used by the Home and Movies pages.
- **Home** (`/`): Fetches exercises on the server and renders the list in a client component for interactivity.
- **Movies** (`/movies`): Fetches the initial movie list on the server; add/remove and search are handled in client state.

## Run locally

From this folder (`next-app`):

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – development server
- `npm run build` – production build
- `npm run start` – run production build
