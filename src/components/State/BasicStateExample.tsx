import { useState } from "react";

export default function BasicStateExample() {
  const [name, setName] = useState("React");
  const [age, setAge] = useState(18);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic State Example</h2>
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
          />
          <p className="text-base-content mt-2">Current name: {name}</p>
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
          />
          <p className="text-base-content mt-2">Current age: {age}</p>
        </div>
      </div>
    </div>
  );
}
