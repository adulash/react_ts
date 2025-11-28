import { useEffect, useState, useRef } from "react";

export default function CleanupEffectExample() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cleanup function example
  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      // Cleanup function - يتم استدعاؤها قبل:
      // 1. إعادة تنفيذ الـ effect
      // 2. إلغاء المونتاج (unmount)
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          console.log("Interval cleared (cleanup)");
        }
      };
    }
  }, [isActive]); // ✅ يعمل عند تغيير isActive

  // Cleanup عند unmount
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted (cleanup)");
    };
  }, []); // ✅ مرة واحدة فقط

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Cleanup Function Example</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Timer</div>
            <div className="stat-value text-base-content">{count}</div>
            <div className="stat-desc text-base-content">seconds</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className={`btn ${isActive ? "btn-error" : "btn-success"}`}
            onClick={() => setIsActive(!isActive)}>
            {isActive ? "Stop" : "Start"}
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="alert alert-info">
          <span>
            The cleanup function runs when:
            <ul className="list-disc list-inside mt-2">
              <li>Component unmounts</li>
              <li>Before re-running the effect</li>
              <li>When dependencies change</li>
            </ul>
          </span>
        </div>

        <div className="text-sm text-base-content">
          <p>
            <strong>Check console</strong> to see cleanup messages.
          </p>
        </div>
      </div>
    </div>
  );
}
