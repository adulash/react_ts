import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Consumer Component
function ThemedButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemedButton must be used within ThemeProvider");
  }

  const { theme } = context;

  return (
    <button className={`btn ${theme === "dark" ? "btn-primary" : "btn-secondary"}`}>
      Current Theme: {theme}
    </button>
  );
}

// Component that uses theme
function ThemedContent() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemedContent must be used within ThemeProvider");
  }

  const { theme } = context;

  return (
    <div className={`p-4 rounded ${theme === "dark" ? "bg-neutral-700" : "bg-base-100"}`}>
      <p className={theme === "dark" ? "text-white" : "text-base-content"}>
        This content changes based on the page theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}

// Main Component
export default function BasicContextExample() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("BasicContextExample must be used within ThemeProvider");
  }

  const { theme } = context;

  return (
    <div
      className={`card shadow-xl p-6 ${theme === "dark" ? "bg-neutral-800" : "bg-base-300"} ${
        theme === "dark" ? "text-white" : "text-base-content"
      }`}>
      <h2 className="card-title text-2xl mb-4">Basic Context Example</h2>
      <div className="space-y-4">
        <ThemedButton />
        <ThemedContent />
        <p className={theme === "dark" ? "text-white" : "text-base-content"}>
          This component uses the theme from the page-level Context.
        </p>
      </div>
    </div>
  );
}
