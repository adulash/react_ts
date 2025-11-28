import { useMemo, useState } from "react";

// دالة حساب مكلفة
function expensiveOperation(n: number): number {
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  return result;
}

export default function PerformanceComparisonExample() {
  const [number, setNumber] = useState(5);
  const [otherState, setOtherState] = useState(0);

  // ❌ بدون useMemo - يتم الحساب في كل render
  const resultWithoutMemo = expensiveOperation(number);

  // ✅ مع useMemo - يتم الحساب فقط عند تغيير number
  const resultWithMemo = useMemo(() => {
    console.log("Expensive calculation with useMemo");
    return expensiveOperation(number);
  }, [number]);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Performance Comparison</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Number (affects calculation):</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            min="1"
            max="10"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base-content">
              Other State (doesn't affect calculation):
            </span>
          </label>
          <button className="btn btn-secondary" onClick={() => setOtherState(otherState + 1)}>
            Increment: {otherState}
          </button>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Without useMemo</div>
            <div className="stat-value text-base-content">{resultWithoutMemo}</div>
            <div className="stat-desc text-base-content">Calculates on every render</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">With useMemo</div>
            <div className="stat-value text-base-content">{resultWithMemo}</div>
            <div className="stat-desc text-base-content">Only when number changes</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Performance</div>
            <div className="stat-desc text-base-content">Check console for logs</div>
          </div>
        </div>

        <div className="alert alert-warning">
          <span>
            <strong>Performance Issue:</strong> Without useMemo, the expensive calculation runs on
            every render (even when only otherState changes). This causes unnecessary performance
            overhead.
          </span>
        </div>

        <div className="alert alert-success">
          <span>
            <strong>With useMemo:</strong> The calculation only runs when the number changes, not
            when otherState changes. This improves performance significantly.
          </span>
        </div>

        <div className="text-sm text-base-content">
          <p>
            <strong>Try this:</strong> Click "Increment" button multiple times and notice:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Without useMemo: Calculation runs every time (slow)</li>
            <li>With useMemo: Calculation only runs when number changes (fast)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
