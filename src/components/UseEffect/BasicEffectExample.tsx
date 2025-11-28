import { useEffect, useState } from "react";

export default function BasicEffectExample() {
  const [count, setCount] = useState(0);

  // useEffect بدون dependencies - ينفذ في كل render
  useEffect(() => {
    console.log("Component rendered or updated");
    // Note: Setting state here would cause infinite loop, so we only log

    // هذا سيعيد التنفيذ في كل render (⚠️ قد يسبب infinite loop)
  });

  // useEffect مع dependencies فارغة [] - ينفذ مرة واحدة فقط
  useEffect(() => {
    console.log("Component mounted (first render only)");
    // ✅ Safe here because dependencies array is empty (runs once)
    // Note: Check console to see this message
  }, []); // ✅ Empty array = مرة واحدة فقط

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic useEffect Example</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Count</div>
            <div className="stat-value text-base-content">{count}</div>
          </div>
        </div>

        <div className="alert alert-info">
          <span>Check the console to see effect execution logs</span>
        </div>

        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="btn btn-secondary" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div className="text-sm text-base-content">
          <p>
            <strong>Note:</strong> Check the console to see when effects run.
          </p>
          <p>• First useEffect runs on every render</p>
          <p>• Second useEffect runs only once (on mount)</p>
        </div>
      </div>
    </div>
  );
}
