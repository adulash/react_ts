import { useState, memo } from "react";

// Child Component بدون React.memo - يعيد render في كل مرة
function ChildWithoutMemo({ count }: { count: number }) {
  console.log("ChildWithoutMemo rendered");
  return (
    <div className="bg-base-200 p-4 rounded">
      <p className="text-base-content">Count: {count}</p>
      <p className="text-xs text-base-content opacity-70">(Renders every time parent renders)</p>
    </div>
  );
}

// Child Component مع React.memo - يعيد render فقط عند تغيير props
const ChildWithMemo = memo(({ count }: { count: number }) => {
  console.log("ChildWithMemo rendered");
  return (
    <div className="bg-base-200 p-4 rounded">
      <p className="text-base-content">Count: {count}</p>
      <p className="text-xs text-base-content opacity-70">(Only renders when count prop changes)</p>
    </div>
  );
});

ChildWithMemo.displayName = "ChildWithMemo";

export default function BasicMemoExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic React.memo Example</h2>
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
            <h3 className="font-semibold mb-2 text-base-content">Without React.memo:</h3>
            <ChildWithoutMemo count={count1} />
            <button className="btn btn-primary btn-sm mt-2" onClick={() => setCount1(count1 + 1)}>
              Increment Count 1
            </button>
          </div>

          <div className="divider">VS</div>

          <div>
            <h3 className="font-semibold mb-2 text-base-content">With React.memo:</h3>
            <ChildWithMemo count={count2} />
            <button className="btn btn-secondary btn-sm mt-2" onClick={() => setCount2(count2 + 1)}>
              Increment Count 2
            </button>
          </div>
        </div>

        <button className="btn btn-accent w-full" onClick={() => setOtherState(otherState + 1)}>
          Update Other State (triggers parent re-render)
        </button>

        <div className="alert alert-warning">
          <span>
            <strong>Without React.memo:</strong> Child component re-renders even when its props
            (count) haven't changed, just because parent re-rendered.
          </span>
        </div>

        <div className="alert alert-success">
          <span>
            <strong>With React.memo:</strong> Child component only re-renders when its props
            actually change. Check console to see the difference.
          </span>
        </div>
      </div>
    </div>
  );
}
