import { useReducer } from "react";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <section className="card" aria-label="Counter with useReducer">
      <h3>Counter with useReducer</h3>
      <p aria-live="polite" aria-atomic="true">Count: {state.count}</p>
      <div style={{ display: "flex", gap: "0.5rem" }} role="group" aria-label="Counter controls">
        <button type="button" onClick={() => dispatch({ type: "decrement" })} aria-label="Decrement by 1">
          -1
        </button>
        <button type="button" onClick={() => dispatch({ type: "increment" })} aria-label="Increment by 1">
          +1
        </button>
        <button type="button" onClick={() => dispatch({ type: "reset" })} aria-label="Reset counter">
          Reset
        </button>
      </div>
    </section>
  );
}

export default CounterWithReducer;

