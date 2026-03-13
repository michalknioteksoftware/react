import { useTheme } from "../ThemeContext.jsx";

function ThemeToggleButton() {
  const { theme, dispatch } = useTheme();

  return (
    <button
      type="button"
      className="link-button"
      onClick={() => dispatch({ type: "toggle" })}
    >
      Switch to {theme.mode === "dark" ? "light" : "dark"} theme
    </button>
  );
}

export default ThemeToggleButton;

