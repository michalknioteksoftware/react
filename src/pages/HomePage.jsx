import RotatingCube from "../components/RotatingCube.jsx";
import Card from "../components/Card.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import Counter from "../components/Counter.jsx";
import CounterWithReducer from "../components/CounterWithReducer.jsx";
import PostsFetcher from "../components/PostsFetcher.jsx";

function HomePage({
  exercises,
  activeId,
  setActiveId,
  showTips,
  toggleTips,
}) {
  const activeExercise = exercises.find((e) => e.id === activeId);

  return (
    <>
      <section className="cube-row">
        <RotatingCube label="My Logo" />
        <RotatingCube label="Second cube" />
      </section>

      <main className="layout">
        <section className="sidebar" aria-label="Exercise list">
          <h2 id="exercises-heading">Exercises</h2>
          <ul className="exercise-list" aria-labelledby="exercises-heading">
            {exercises.map((exercise) => (
              <li key={exercise.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(exercise.id)}
                  className={
                    exercise.id === activeId ? "exercise-button active" : "exercise-button"
                  }
                  aria-current={exercise.id === activeId ? "true" : undefined}
                  aria-label={`Exercise ${exercise.id}: ${exercise.title}`}
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

          <Card title="Example solution for exercise 3 (useState)">
            <p>
              This counter increases by 3 every time you click the button. The
              increment value is passed as a <code>step</code> prop.
            </p>
            <Counter step={3} />
          </Card>

          <CounterWithReducer />

          <PostsFetcher />

          <div className="tips" id="tips-content">
            <h3>
              Tips{" "}
              <button
                type="button"
                className="link-button"
                onClick={toggleTips}
                aria-expanded={showTips}
                aria-controls="tips-content"
                aria-label={showTips ? "Hide tips" : "Show tips"}
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
    </>
  );
}

export default HomePage;

