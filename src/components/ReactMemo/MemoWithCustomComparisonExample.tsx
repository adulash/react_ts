import { useState, memo } from "react";

type Config = {
  theme: "light" | "dark";
  fontSize: number;
};

// SettingsDisplay مع React.memo و custom comparison
const SettingsDisplay = memo(
  ({ config }: { config: Config }) => {
    console.log("SettingsDisplay rendered");
    return (
      <div className="bg-base-200 p-4 rounded">
        <p className="text-base-content">Theme: {config.theme}</p>
        <p className="text-base-content">Font Size: {config.fontSize}px</p>
      </div>
    );
  },
  // Custom comparison function
  // Returns true if props are equal (skip re-render)
  // Returns false if props are different (re-render)
  (prevProps, nextProps) => {
    // Custom logic: only re-render if theme changes
    // Ignore fontSize changes
    return prevProps.config.theme === nextProps.config.theme;
  }
);

SettingsDisplay.displayName = "SettingsDisplay";

export default function MemoWithCustomComparisonExample() {
  const [config, setConfig] = useState<Config>({
    theme: "light",
    fontSize: 16,
  });
  const [otherState, setOtherState] = useState(0);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">React.memo with Custom Comparison</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Theme</div>
            <div className="stat-value text-base-content">{config.theme}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Font Size</div>
            <div className="stat-value text-base-content">{config.fontSize}px</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Other State</div>
            <div className="stat-value text-base-content">{otherState}</div>
          </div>
        </div>

        <SettingsDisplay config={config} />

        <div className="flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() =>
              setConfig({ ...config, theme: config.theme === "light" ? "dark" : "light" })
            }>
            Toggle Theme
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setConfig({ ...config, fontSize: config.fontSize + 1 })}>
            Increase Font Size
          </button>
        </div>

        <button className="btn btn-accent w-full" onClick={() => setOtherState(otherState + 1)}>
          Update Other State
        </button>

        <div className="alert alert-info">
          <span>
            <strong>Custom Comparison:</strong> SettingsDisplay only re-renders when theme changes,
            not when fontSize changes. Check console to see render logs.
          </span>
        </div>

        <div className="text-sm text-base-content">
          <p>
            <strong>Custom Comparison Function:</strong>
          </p>
          <pre className="bg-base-200 p-2 rounded text-xs overflow-x-auto mt-2">
            {`(prevProps, nextProps) => {
  // Only re-render if theme changes
  return prevProps.config.theme === nextProps.config.theme;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
