import { useRef, useState } from "react";

export default function RefWithoutRerenderExample() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef<number | null>(null);
  const [previousCount, setPreviousCount] = useState<number | null>(null);

  const increment = () => {
    previousCountRef.current = count;
    setPreviousCount(count);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Ref Without Re-render Example</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Current Count</div>
            <div className="stat-value text-base-content">{count}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Previous Count</div>
            <div className="stat-value text-base-content">{previousCount ?? "N/A"}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Note</div>
            <div className="stat-desc text-base-content">useRef doesn't trigger re-renders</div>
          </div>
        </div>

        <div className="alert alert-info">
          <span>
            Notice: Render count increases without causing re-render. This is because useRef doesn't
            trigger re-renders.
          </span>
        </div>

        <button className="btn btn-primary w-full" onClick={increment}>
          Increment Count
        </button>
      </div>
    </div>
  );
}
