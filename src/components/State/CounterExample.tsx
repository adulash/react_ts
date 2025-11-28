import { useState } from "react";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const incrementByFive = () => {
    setCount(count + 5);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Counter Example</h2>
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-base-content mb-4">{count}</p>
        </div>

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

        <div className="flex justify-center">
          <button className="btn btn-accent" onClick={incrementByFive}>
            +5
          </button>
        </div>
      </div>
    </div>
  );
}
