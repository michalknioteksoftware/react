# React Learning Lab (Docker + Vite)

A small React project designed to help you **learn React step by step**, running completely inside **Docker**.

### 1. Requirements

- **Docker** and **docker-compose** installed
- No need to install Node or npm locally

### 2. Start the project (Docker)

In the project directory:

```bash
docker-compose up --build
```

Then open your browser at:

- `http://localhost:5173`

Changes in the `src/` folder will hot-reload automatically in the browser.

To stop the app:

```bash
docker-compose down
```

### 3. Project structure

- `index.html` – HTML shell used by Vite
- `src/main.jsx` – React entry file that renders the app into the DOM
- `src/App.jsx` – Main component with a list of **learning exercises**
- `src/styles.css` – Styling (dark, modern UI)
- `Dockerfile` – Container image definition
- `docker-compose.yml` – Easy way to run the dev server in Docker

### 4. Learning path inside this project

Open `src/App.jsx` – you will see a list of exercises:

1. **JSX & Components**  
   - Create a new component (e.g. `ProfileCard`) that returns some JSX with your name and a short bio.
   - Import and render it inside `App`.

2. **Props**  
   - Turn your profile card into a reusable component.
   - Pass `name`, `bio`, and maybe `avatarUrl` as **props**.

3. **State & Events**  
   - Add a button that increments a counter.
   - Use `useState` to store the count.
   - Display the current value and update it on click.

4. **Lists & Keys**  
   - Create an array of your favourite movies (objects with `id`, `title`, `year`).
   - Render them with `Array.map`.
   - Use a stable `key` (for example, the `id`).

5. **Conditional Rendering**  
   - Add state like `isDarkMode` or `showDetails`.
   - Conditionally render extra info or change some text when the state is `true`.

### 5. Suggested workflow

1. Run `docker-compose up --build`.
2. Open `src/App.jsx` and follow exercise 1.
3. When it works, move to the next exercise.
4. Commit your progress in small steps (optional but recommended if you know git).

### 6. Optional: run without Docker (directly with Node)

If you do have Node 18+ and npm installed locally:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

### 7. Running tests

The project uses **Vitest** and **React Testing Library**. Component tests live in `src/test/components/`.

**Single run (CI-friendly):**

```bash
npm run test:run
```

**Watch mode (re-runs on file changes):**

```bash
npm run test
```

With Docker, run tests inside the container:

```bash
docker-compose run --rm react-app npm run test:run
```

### 8. Next.js version (server-side rendering)

A Next.js 14 (App Router) version of this app lives in **`next-app/`**. It uses **server-side data fetching** for the Home and Movies pages.

From the `next-app` folder:

```bash
cd next-app
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). See `next-app/README.md` for details.

---

You now have a sandbox to learn React. Edit files in `src/`, refresh your browser, break things, and learn by fixing them.

