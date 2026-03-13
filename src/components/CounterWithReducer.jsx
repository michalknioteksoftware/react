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
    <section className="card">
      <h3>Counter with useReducer</h3>
      <p>Count: {state.count}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button type="button" onClick={() => dispatch({ type: "decrement" })}>
          -1
        </button>
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          +1
        </button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default CounterWithReducer;

