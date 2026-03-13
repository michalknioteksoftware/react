import { useState } from "react";
import useToggle from "./hooks/useToggle";
import ProfileCard from "./components/ProfileCard.jsx";
import Counter from "./components/Counter.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieRatingsChart from "./components/MovieRatingsChart.jsx";
import AddMovieForm from "./components/AddMovieForm.jsx";
import MovieSearchInput from "./components/MovieSearchInput.jsx";
import PostsFetcher from "./components/PostsFetcher.jsx";
import Card from "./components/Card.jsx";
import { exercises } from "./data/exercises";
import { sampleMovies } from "./data/sampleMovies";
import RotatingCube from "./components/RotatingCube.jsx"

function App() {
  const [activeId, setActiveId] = useState(exercises[0].id);
  const [isMovieListDark, toggleMovieListDark] = useToggle(true);
  const [showTips, toggleTips] = useToggle(true);
  const [movies, setMovies] = useState(sampleMovies);
  const [movieSearch, setMovieSearch] = useState("");

  const handleAddMovie = (movie) => {
    setMovies((current) => [...current, movie]);
  };

  const handleRemoveMovie = (movieToRemove) => {
    setMovies((current) => current.filter((movie) => movie !== movieToRemove));
  };

  const activeExercise = exercises.find((e) => e.id === activeId);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Learning Lab</h1>
        <p className="subtitle">
          Run inside Docker. Work through the exercises to learn React.
        </p>
      </header>

      <section className="cube-row">
        <RotatingCube label="My Logo" />
        <RotatingCube label="Second cube" />
      </section>

      <main className="layout">
        <section className="sidebar">
          <h2>Exercises</h2>
          <ul className="exercise-list">
            {exercises.map((exercise) => (
              <li key={exercise.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(exercise.id)}
                  className={
                    exercise.id === activeId ? "exercise-button active" : "exercise-button"
                  }
                >
                  <span className="exercise-number">
                    {exercise.id.toString().padStart(2, "0")}
                  </span>
                  <span>{exercise.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="content">
          <h2>{activeExercise.title}</h2>
          <p className="description">{activeExercise.description}</p>

          <div className="playground">
            <h3>Your playground</h3>
            <p>
              Edit the file <code>src/App.jsx</code> (or create new components in{" "}
              <code>src/</code>) and see the changes live in your browser.
            </p>
            <p>
              Try to implement the exercise description using React concepts: JSX,
              props, state, events, and conditional rendering.
            </p>
          </div>

          <Card title="Example solution for exercise 1">
            <p>
              Below is a simple component that prints a name and a short bio. You
              can edit <code>src/App.jsx</code> or pass different props to{" "}
              <code>ProfileCard</code> to customize it with your own data.
            </p>
            <ProfileCard
              name="John Doe"
              bio="I am learning React step by step, starting from components and JSX."
            />
            <ProfileCard
              name="Misio Patysio"
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta justo et lorem cursus."
            />
          </Card>

          <Card title="Example solution for exercise 3">
            <p>
              This counter increases by 3 every time you click the button. The
              increment value is passed as a <code>step</code> prop.
            </p>
            <Counter step={3} />
          </Card>

          <AddMovieForm onAddMovie={handleAddMovie} />

          <PostsFetcher />

          <div className="tips">
            <h3>
              Tips{" "}
              <button
                type="button"
                className="link-button"
                onClick={toggleTips}
              >
                {showTips ? "hide" : "show"}
              </button>
            </h3>
            {showTips && (
              <ul>
                <li>Use small, focused components.</li>
                <li>Keep state as close as possible to where it is used.</li>
                <li>Experiment freely — you can always undo with git.</li>
              </ul>
            )}
          </div>
        </section>
      </main>

      <section
        className={`content content-movies ${
          isMovieListDark ? "movies-dark" : "movies-light"
        }`}
      >
        <h2>Example movie list</h2>
        <MovieSearchInput
          value={movieSearch}
          onChange={setMovieSearch}
        />
        <button
          type="button"
          onClick={toggleMovieListDark}
        >
          Switch to {isMovieListDark ? "light" : "dark"} mode
        </button>
        <MovieList
          movies={movies.filter((movie) =>
            movie.title.toLowerCase().includes(movieSearch.toLowerCase())
          )}
          onRemove={handleRemoveMovie}
        />
        <MovieRatingsChart
          movies={movies.filter((movie) =>
            movie.title.toLowerCase().includes(movieSearch.toLowerCase())
          )}
        />
      </section>

      <footer className="footer">
        <span>
          Built with React + Vite + Docker. Start with exercise 1 and move down.
        </span>
      </footer>
    </div>
  );
}

export default App;

