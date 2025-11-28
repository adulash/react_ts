import { useMemo, useState } from "react";

// دالة حساب مكلفة
function calculateSum(numbers: number[]): number {
  console.log("Calculating sum...");
  return numbers.reduce((sum, num) => sum + num, 0);
}

function calculateProduct(numbers: number[]): number {
  console.log("Calculating product...");
  return numbers.reduce((product, num) => product * num, 1);
}

export default function MemoWithDependenciesExample() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [multiplier, setMultiplier] = useState(1);
  const [otherState, setOtherState] = useState(0);

  // useMemo مع dependencies - يعيد الحساب فقط عند تغيير numbers
  const sum = useMemo(() => {
    return calculateSum(numbers);
  }, [numbers]); // ✅ يعيد الحساب فقط عند تغيير numbers

  const product = useMemo(() => {
    return calculateProduct(numbers);
  }, [numbers]); // ✅ يعيد الحساب فقط عند تغيير numbers

  // حساب يعتمد على numbers و multiplier
  const multipliedSum = useMemo(() => {
    return sum * multiplier;
  }, [sum, multiplier]); // ✅ يعيد الحساب عند تغيير sum أو multiplier

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useMemo with Dependencies</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Numbers: [{numbers.join(", ")}]</span>
          </label>
          <button className="btn btn-primary" onClick={addNumber}>
            Add Number
          </button>
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base-content">Multiplier:</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={multiplier}
            onChange={(e) => setMultiplier(Number(e.target.value))}
            min="1"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base-content">
              Other State (doesn't affect calculations):
            </span>
          </label>
          <button className="btn btn-secondary" onClick={() => setOtherState(otherState + 1)}>
            Increment: {otherState}
          </button>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Sum</div>
            <div className="stat-value text-base-content">{sum}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Product</div>
            <div className="stat-value text-base-content">{product}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Sum × Multiplier</div>
            <div className="stat-value text-base-content">{multipliedSum}</div>
          </div>
        </div>

        <div className="alert alert-info">
          <span>
            <strong>Check console:</strong> Calculations only run when their dependencies change.
            Changing "Other State" doesn't trigger calculations.
          </span>
        </div>
      </div>
    </div>
  );
}
