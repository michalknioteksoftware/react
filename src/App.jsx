import { useState } from "react";
import ProfileCard from "./ProfileCard.jsx";

const exercises = [
  {
    id: 1,
    title: "JSX & Components",
    description:
      "Create a new component that renders your name and a short bio.",
  },
  {
    id: 2,
    title: "Props",
    description:
      "Turn the bio into a reusable component that receives data via props.",
  },
  {
    id: 3,
    title: "State & Events",
    description:
      "Add a button that increments a counter and display the value on screen.",
  },
  {
    id: 4,
    title: "Lists & Keys",
    description:
      "Render a list of your favourite movies from an array of objects.",
  },
  {
    id: 5,
    title: "Conditional Rendering",
    description:
      "Show a message only when a piece of state is true (e.g. “Dark mode on”).",
  },
];

function App() {
  const [activeId, setActiveId] = useState(exercises[0].id);

  const activeExercise = exercises.find((e) => e.id === activeId);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Learning Lab</h1>
        <p className="subtitle">
          Run inside Docker. Work through the exercises to learn React.
        </p>
      </header>

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

      <footer className="footer">
        <span>
          Built with React + Vite + Docker. Start with exercise 1 and move down.
        </span>
      </footer>
    </div>
  );
}

export default App;

