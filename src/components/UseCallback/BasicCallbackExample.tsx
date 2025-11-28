import { useCallback, useState } from "react";

export default function BasicCallbackExample() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const [callbackCount, setCallbackCount] = useState(0);
  const [normalFunctionCount, setNormalFunctionCount] = useState(0);

  // ❌ بدون useCallback - يتم إنشاء دالة جديدة في كل render
  const handleClickWithoutCallback = () => {
    setNormalFunctionCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  // ✅ مع useCallback - يتم حفظ الدالة بين الـ renders
  const handleClickWithCallback = useCallback(() => {
    setCallbackCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }, []); // ✅ Empty array = الدالة ثابتة ولا تعاد إنشاؤها

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic useCallback Example</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Count</div>
            <div className="stat-value text-base-content">{count}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Other Value</div>
            <div className="stat-value text-base-content">{otherValue}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <button className="btn btn-primary w-full" onClick={handleClickWithoutCallback}>
              Without useCallback (recreated every render)
            </button>
            <p className="text-sm text-base-content mt-1">
              Function recreated: {normalFunctionCount} times
            </p>
          </div>

          <div>
            <button className="btn btn-secondary w-full" onClick={handleClickWithCallback}>
              With useCallback (memoized)
            </button>
            <p className="text-sm text-base-content mt-1">
              Function recreated: {callbackCount} times (stable with useCallback)
            </p>
          </div>
        </div>

        <button className="btn btn-accent w-full" onClick={() => setOtherValue(otherValue + 1)}>
          Update Other Value (triggers re-render)
        </button>

        <div className="alert alert-info">
          <span>
            <strong>Note:</strong> Without useCallback, a new function is created on every render.
            With useCallback, the function is memoized and only recreated when dependencies change.
          </span>
        </div>
      </div>
    </div>
  );
}
