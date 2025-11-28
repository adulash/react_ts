import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
// Context Type
type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Provider Component
function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

// Consumer Component 1
// Consumer Component 1
function CounterDisplay() {
  const context = useContext(CounterContext);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "dark";

  if (!context) {
    throw new Error("CounterDisplay must be used within CounterProvider");
  }

  const { count } = context;

  return (
    <div className="text-center">
      <p className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-base-content"}`}>
        {count}
      </p>
    </div>
  );
}

// Consumer Component 2
function CounterControls() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("CounterControls must be used within CounterProvider");
  }

  const { increment, decrement, reset } = context;

  return (
    <div className="flex gap-2 justify-center">
      <button className="btn btn-primary" onClick={decrement}>
        -
      </button>
      <button className="btn btn-secondary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={increment}>
        +
      </button>
    </div>
  );
}

// Main Component
export default function ContextWithStateExample() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "dark";

  return (
    <div
      className={`card shadow-xl p-6 ${theme === "dark" ? "bg-neutral-800" : "bg-base-300"} ${
        theme === "dark" ? "text-white" : "text-base-content"
      }`}>
      <h2 className="card-title text-2xl mb-4">Context with State Example</h2>
      <CounterProvider>
        <div className="space-y-4">
          <CounterDisplay />
          <CounterControls />
          <p
            className={`text-sm text-center ${
              theme === "dark" ? "text-white" : "text-base-content"
            }`}>
            Both components share the same counter state through Context
          </p>
        </div>
      </CounterProvider>
    </div>
  );
}
