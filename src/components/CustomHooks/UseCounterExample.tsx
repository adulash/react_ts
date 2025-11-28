import { useCounter } from "../../hooks/useCounter";

export default function UseCounterExample() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(10);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useCounter Hook Example</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-base-content">Counter 1 (starts at 0):</h3>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-value text-base-content">{counter1.count}</div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="btn btn-primary" onClick={counter1.decrement}>
              -
            </button>
            <button className="btn btn-secondary" onClick={counter1.reset}>
              Reset
            </button>
            <button className="btn btn-primary" onClick={counter1.increment}>
              +
            </button>
          </div>
        </div>

        <div className="divider">OR</div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-base-content">
            Counter 2 (starts at 10):
          </h3>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-value text-base-content">{counter2.count}</div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="btn btn-primary" onClick={counter2.decrement}>
              -
            </button>
            <button className="btn btn-secondary" onClick={counter2.reset}>
              Reset
            </button>
            <button className="btn btn-primary" onClick={counter2.increment}>
              +
            </button>
          </div>
        </div>

        <div className="alert alert-info">
          <span>
            <strong>Custom Hook Benefits:</strong> Reusable logic that can be shared across multiple
            components. Both counters use the same hook but maintain independent state.
          </span>
        </div>
      </div>
    </div>
  );
}
