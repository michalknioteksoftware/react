import { useTheme } from "../ThemeContext.jsx";

function ThemeToggleButton() {
  const { theme, dispatch } = useTheme();

  const isDark = theme.mode === "dark";
  return (
    <button
      type="button"
      className="link-button"
      onClick={() => dispatch({ type: "toggle" })}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      Switch to {isDark ? "light" : "dark"} theme
    </button>
  );
}

export default ThemeToggleButton;

