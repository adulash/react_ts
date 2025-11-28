import { useCallback, useState, memo } from "react";

// Child Component بدون React.memo - يعيد الـ render في كل مرة
function ChildWithoutMemo({ onClick, count }: { onClick: () => void; count: number }) {
  console.log("ChildWithoutMemo rendered");
  return (
    <div className="bg-base-200 p-4 rounded">
      <p className="text-base-content">Count: {count}</p>
      <button className="btn btn-sm btn-primary" onClick={onClick}>
        Increment from Child
      </button>
      <p className="text-xs text-base-content mt-2">(Renders every time parent renders)</p>
    </div>
  );
}

// Child Component مع React.memo - يعيد الـ render فقط عند تغيير props
const ChildWithMemo = memo(({ onClick, count }: { onClick: () => void; count: number }) => {
  console.log("ChildWithMemo rendered");
  return (
    <div className="bg-base-200 p-4 rounded">
      <p className="text-base-content">Count: {count}</p>
      <button className="btn btn-sm btn-secondary" onClick={onClick}>
        Increment from Child
      </button>
      <p className="text-xs text-base-content mt-2">(Only renders when props change)</p>
    </div>
  );
});

ChildWithMemo.displayName = "ChildWithMemo";

export default function CallbackWithMemoExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // ❌ بدون useCallback - دالة جديدة في كل render
  // ChildWithMemo سيعيد الـ render حتى لو لم تتغير count2
  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  // ✅ مع useCallback - الدالة محفوظة
  // ChildWithMemo لن يعيد الـ render إلا عند تغيير count2
  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useCallback with React.memo</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Count 1</div>
            <div className="stat-value text-base-content">{count1}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Count 2</div>
            <div className="stat-value text-base-content">{count2}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Other State</div>
            <div className="stat-value text-base-content">{otherState}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-base-content">
              Without useCallback + React.memo:
            </h3>
            <ChildWithoutMemo onClick={handleIncrement1} count={count1} />
          </div>

          <div className="divider">VS</div>

          <div>
            <h3 className="font-semibold mb-2 text-base-content">With useCallback + React.memo:</h3>
            <ChildWithMemo onClick={handleIncrement2} count={count2} />
          </div>
        </div>

        <button className="btn btn-accent w-full" onClick={() => setOtherState(otherState + 1)}>
          Update Other State (triggers parent re-render)
        </button>

        <div className="alert alert-warning">
          <span>
            <strong>Without useCallback:</strong> Even with React.memo, the child re-renders because
            a new function is created on every parent render.
          </span>
        </div>

        <div className="alert alert-success">
          <span>
            <strong>With useCallback:</strong> The function is memoized, so React.memo can properly
            compare props and prevent unnecessary re-renders.
          </span>
        </div>

        <div className="text-sm text-base-content">
          <p>
            <strong>Check console</strong> to see render logs:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Click "Update Other State" - ChildWithoutMemo re-renders</li>
            <li>Click "Update Other State" - ChildWithMemo doesn't re-render (with useCallback)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
