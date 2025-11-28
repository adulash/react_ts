import { forwardRef, useRef, useImperativeHandle } from "react";

// Child Component with forwardRef
type CustomInputHandle = {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
};

const CustomInput = forwardRef<CustomInputHandle, { placeholder?: string }>(
  ({ placeholder = "Type here..." }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
      getValue: () => {
        return inputRef.current?.value || "";
      },
    }));

    return (
      <input
        ref={inputRef}
        type="text"
        className="input input-bordered w-full"
        placeholder={placeholder}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

// Parent Component
export default function ForwardRefExample() {
  const customInputRef = useRef<CustomInputHandle>(null);

  const handleFocus = () => {
    customInputRef.current?.focus();
  };

  const handleClear = () => {
    customInputRef.current?.clear();
  };

  const handleGetValue = () => {
    const value = customInputRef.current?.getValue();
    alert(`Input value: ${value || "empty"}`);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">ForwardRef Example</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Custom Input:</span>
          </label>
          <CustomInput ref={customInputRef} placeholder="This input uses forwardRef" />
        </div>

        <div className="flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={handleFocus}>
            Focus Input
          </button>
          <button className="btn btn-secondary" onClick={handleClear}>
            Clear Input
          </button>
          <button className="btn btn-accent" onClick={handleGetValue}>
            Get Value
          </button>
        </div>

        <div className="alert alert-info">
          <span>
            This example shows how to use forwardRef to expose custom methods from a child component
            to its parent.
          </span>
        </div>
      </div>
    </div>
  );
}
