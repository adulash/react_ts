import { useState } from "react";

export default function ClickEventsExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDoubleClick = () => {
    setMessage("Double clicked!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMessage("Right clicked!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Click Events Example</h2>
      <div className="space-y-4">
        <div>
          <p className="text-base-content mb-2">Count: {count}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            Click Me
          </button>
        </div>

        <div className="divider">OR</div>

        <div>
          <button className="btn btn-secondary" onDoubleClick={handleDoubleClick}>
            Double Click Me
          </button>
          {message && <p className="text-base-content mt-2">{message}</p>}
        </div>

        <div className="divider">OR</div>

        <div>
          <button className="btn btn-accent" onContextMenu={handleRightClick}>
            Right Click Me
          </button>
        </div>
      </div>
    </div>
  );
}
