import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext(null);

const initialTheme = { mode: "dark" };

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { mode: state.mode === "dark" ? "light" : "dark" };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme: state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}

