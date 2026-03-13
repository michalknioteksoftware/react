"use client";

import { useState } from "react";

export default function HomeContent({ exercises }) {
  const [activeId, setActiveId] = useState(exercises[0]?.id ?? 1);
  const active = exercises.find((e) => e.id === activeId) ?? exercises[0];

  return (
    <>
      <ul className="exercise-list">
        {exercises.map((ex) => (
          <li key={ex.id}>
            <button
              type="button"
              onClick={() => setActiveId(ex.id)}
              className={ex.id === activeId ? "exercise-button active" : "exercise-button"}
            >
              <span className="exercise-number">
                {String(ex.id).padStart(2, "0")}
              </span>
              <span>{ex.title}</span>
            </button>
          </li>
        ))}
      </ul>
      {active && (
        <div className="content" style={{ marginTop: "1rem", padding: "1rem" }}>
          <h3 style={{ margin: "0 0 0.5rem" }}>{active.title}</h3>
          <p className="description" style={{ margin: 0 }}>{active.description}</p>
        </div>
      )}
    </>
  );
}
