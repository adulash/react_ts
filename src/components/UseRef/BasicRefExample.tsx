import { useRef } from "react";

export default function BasicRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const clickButton = () => {
    buttonRef.current?.click();
  };

  const getInputValue = () => {
    alert(`Input value: ${inputRef.current?.value || "empty"}`);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic Ref Example - DOM Access</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Input Field:</span>
          </label>
          <input
            ref={inputRef}
            type="text"
            className="input input-bordered w-full"
            placeholder="Type something..."
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={focusInput}>
            Focus Input
          </button>
          <button className="btn btn-secondary" onClick={getInputValue}>
            Get Value
          </button>
        </div>

        <div className="divider">OR</div>

        <div>
          <button
            ref={buttonRef}
            className="btn btn-accent"
            onClick={() => alert("Button clicked!")}>
            Hidden Button
          </button>
          <button className="btn btn-primary mt-2" onClick={clickButton}>
            Click Hidden Button
          </button>
        </div>
      </div>
    </div>
  );
}
