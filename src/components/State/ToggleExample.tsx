import { useState } from "react";

export default function ToggleExample() {
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Toggle Example</h2>
      <div className="space-y-6">
        {/* Toggle Switch */}
        <div>
          <div className="flex items-center gap-4">
            <span className="text-base-content">Switch:</span>
            <button className={`btn ${isOn ? "btn-success" : "btn-error"}`} onClick={toggleSwitch}>
              {isOn ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        <div className="divider">OR</div>

        {/* Toggle Visibility */}
        <div>
          <button className="btn btn-primary mb-4" onClick={toggleVisibility}>
            {isVisible ? "Hide" : "Show"} Content
          </button>
          {isVisible && (
            <div className="alert alert-info">
              <span>This content is visible!</span>
            </div>
          )}
        </div>

        <div className="divider">OR</div>

        {/* Toggle Theme */}
        <div>
          <button className="btn btn-secondary" onClick={toggleTheme}>
            Toggle Theme: {theme}
          </button>
          <div className={`mt-4 p-4 rounded ${theme === "dark" ? "bg-base-200" : "bg-base-100"}`}>
            <p className="text-base-content">
              Current theme: <strong>{theme}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
