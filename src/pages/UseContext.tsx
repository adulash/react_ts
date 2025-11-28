import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import BasicContextExample from "../components/UseContext/BasicContextExample";
import MultipleContextsExample from "../components/UseContext/UseContext/MultipleContextsExample";
import ContextWithStateExample from "../components/UseContext/ContextWithStateExample";

// Theme Toggle Button Component
function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <div className="flex items-center gap-4 mb-6">
      <button
        className={`btn ${theme === "dark" ? "btn-primary" : "btn-secondary"}`}
        onClick={toggleTheme}>
        Toggle Theme: {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <span className={theme === "dark" ? "text-white" : "text-base-content"}>
        Current theme: <strong>{theme}</strong>
      </span>
    </div>
  );
}

// Inner component that can access theme
function UseContextContent() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("UseContextContent must be used within ThemeProvider");
  }

  const { theme } = context;

  return (
    <div
      className={`space-y-6 min-h-screen p-6 ${
        theme === "dark" ? "bg-neutral-900" : "bg-base-100"
      }`}>
      <div>
        <h1
          className={`text-3xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-base-content"
          }`}>
          useContext
        </h1>
        <ThemeToggle />
      </div>

      <BasicContextExample />
      <MultipleContextsExample />
      <ContextWithStateExample />
    </div>
  );
}

// Main Component
export default function UseContext() {
  return (
    <ThemeProvider>
      <UseContextContent />
    </ThemeProvider>
  );
}
