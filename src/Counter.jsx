import { useState } from "react";

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((current) => current + step);
  };

  return (
    <section className="counter">
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <p>
        Current counter value: {count > 100 ? "100+" : count}
      </p>
    </section>
  );
}

export default Counter;

