import { useEffect, useState } from "react";

export default function EffectWithDependenciesExample() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);

  // Computed value instead of state - أفضل ممارسة
  const greeting = name ? `Hello, ${name}!` : "";

  // useEffect يعمل فقط عندما يتغير name
  useEffect(() => {
    if (name) {
      console.log("Name changed:", name);
    }
  }, [name]); // ✅ يعمل فقط عند تغيير name

  // useEffect يعمل عندما يتغير name أو age
  useEffect(() => {
    if (name && age) {
      console.log(`User info updated: ${name}, ${age} years old`);
    }
  }, [name, age]); // ✅ يعمل عند تغيير name أو age

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useEffect with Dependencies</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Name:</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base-content">Age:</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            min="1"
            max="120"
          />
        </div>

        {greeting && (
          <div className="alert alert-success">
            <span>{greeting}</span>
          </div>
        )}

        <div className="text-sm text-base-content">
          <p>
            <strong>Dependencies Array:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code>[name]</code> - runs when name changes
            </li>
            <li>
              <code>[name, age]</code> - runs when name or age changes
            </li>
            <li>
              <code>[]</code> - runs once (mount only)
            </li>
            <li>No array - runs on every render</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
