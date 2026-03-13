import { useState } from "react";
import ProfileCard from "./components/ProfileCard.jsx";
import Counter from "./components/Counter.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieRatingsChart from "./components/MovieRatingsChart.jsx";
import { exercises } from "./data/exercises";
import { sampleMovies } from "./data/sampleMovies";
import RotatingCube from "./components/RotatingCube.jsx"

function App() {
  const [activeId, setActiveId] = useState(exercises[0].id);
  const [isMovieListDark, setIsMovieListDark] = useState(true);

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

          <div className="playground">
            <h3>Example solution for exercise 1</h3>
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
          </div>

          <div className="playground">
            <h3>Example solution for exercise 3</h3>
            <p>
              This counter increases by 3 every time you click the button. The
              increment value is passed as a <code>step</code> prop.
            </p>
            <Counter step={3} />
          </div>

          <div className="tips">
            <h3>Tips</h3>
            <ul>
              <li>Use small, focused components.</li>
              <li>Keep state as close as possible to where it is used.</li>
              <li>Experiment freely — you can always undo with git.</li>
            </ul>
          </div>
        </section>
      </main>

      <section
        className={`content content-movies ${
          isMovieListDark ? "movies-dark" : "movies-light"
        }`}
      >
        <h2>Example movie list</h2>
        <button
          type="button"
          onClick={() => setIsMovieListDark((current) => !current)}
        >
          Switch to {isMovieListDark ? "light" : "dark"} mode
        </button>
        <MovieList movies={sampleMovies} />
        <MovieRatingsChart movies={sampleMovies} />
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

