import { useState } from "react";

export default function InputEventsExample() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    console.log("Input focused!");
  };

  const handleBlur = () => {
    setDisplayValue(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setDisplayValue(inputValue);
    }
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Input Events Example</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Type something:</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            placeholder="Type and press Enter"
          />
        </div>

        {displayValue && (
          <div className="alert alert-success">
            <span>You entered: {displayValue}</span>
          </div>
        )}

        <p className="text-sm text-base-content">Current value: {inputValue || "(empty)"}</p>
      </div>
    </div>
  );
}
