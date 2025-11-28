import { useMemo, useState } from "react";

// دالة حساب مكلفة (محاكاة)
function expensiveCalculation(n: number): number {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  return result;
}

export default function BasicMemoExample() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  // بدون useMemo - يتم الحساب في كل render
  // const result = expensiveCalculation(5); // ❌ بطيء

  // مع useMemo - يتم الحساب مرة واحدة فقط
  const result = useMemo(() => {
    return expensiveCalculation(5);
  }, []); // ✅ Empty array = مرة واحدة فقط

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic useMemo Example</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Expensive Result</div>
            <div className="stat-value text-base-content">{result}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Count</div>
            <div className="stat-value text-base-content">{count}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Other Value</div>
            <div className="stat-value text-base-content">{otherValue}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Increment Count
          </button>
          <button className="btn btn-secondary" onClick={() => setOtherValue(otherValue + 1)}>
            Increment Other
          </button>
        </div>

        <div className="alert alert-info">
          <span>
            <strong>Note:</strong> Check the console. The expensive calculation runs only once (on
            mount) because of useMemo, even when count or otherValue changes.
          </span>
        </div>
      </div>
    </div>
  );
}
