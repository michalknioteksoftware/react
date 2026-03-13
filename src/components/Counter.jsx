import { useState } from "react";

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((current) => current + step);
  };

  return (
    <section className="counter" aria-label="Counter">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Add ${step} to counter`}
      >
        Click me
      </button>
      <p aria-live="polite" aria-atomic="true">
        Current counter value: {count > 100 ? "100+" : count}
      </p>
    </section>
  );
}

export default Counter;

