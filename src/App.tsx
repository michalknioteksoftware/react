import { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useToggle from "./hooks/useToggle";
import { useTheme } from "./ThemeContext.jsx";
import ThemeToggleButton from "./components/ThemeToggleButton.jsx";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import { exercises } from "./data/exercises";
import { sampleMovies } from "./data/sampleMovies";

function App() {
  const [activeId, setActiveId] = useState(exercises[0].id);
  const [isMovieListDark, toggleMovieListDark] = useToggle(true);
  const [showTips, toggleTips] = useToggle(true);
  const [movies, setMovies] = useState(sampleMovies);
  const [movieSearch, setMovieSearch] = useState("");
  const { theme } = useTheme() as { theme: { mode: "dark" | "light" } };

  const handleAddMovie = useCallback((movie: (typeof sampleMovies)[number]) => {
    setMovies((current) => [...current, movie]);
  }, []);

  const handleRemoveMovie = useCallback((movieToRemove: (typeof sampleMovies)[number]) => {
    setMovies((current) => current.filter((movie) => movie !== movieToRemove));
  }, []);

  return (
    <Router>
      <div className={`app app-${theme.mode}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header className="app-header">
          <h1>React Learning Lab</h1>
          <p className="subtitle">
            Run inside Docker. Work through the exercises to learn React. Current theme:{" "}
            <strong>{theme.mode}</strong>
          </p>
          <ThemeToggleButton />
          <nav
            aria-label="Main navigation"
            style={{
              marginTop: "0.75rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </header>

        <div id="main-content" tabIndex={-1}>
          <Routes>
          <Route
            path="/"
            element={
              <HomePage
                exercises={exercises}
                activeId={activeId}
                setActiveId={setActiveId}
                showTips={showTips}
                toggleTips={toggleTips}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <MoviesPage
                movies={movies}
                movieSearch={movieSearch}
                setMovieSearch={setMovieSearch}
                isMovieListDark={isMovieListDark}
                toggleMovieListDark={toggleMovieListDark}
                handleAddMovie={handleAddMovie}
                handleRemoveMovie={handleRemoveMovie}
              />
            }
          />
          </Routes>
        </div>

        <footer className="footer">
          <span>
            Built with React + Vite + Docker. Start with exercise 1 and move down.
          </span>
        </footer>
      </div>
    </Router>
  );
}

export default App;

