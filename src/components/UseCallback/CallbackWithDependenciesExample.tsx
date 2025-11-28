import { useCallback, useState } from "react";

export default function CallbackWithDependenciesExample() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [greeting, setGreeting] = useState("");

  // useCallback مع dependencies - يعيد إنشاء الدالة عند تغيير name
  const handleNameChange = useCallback((newName: string) => {
    setName(newName);
    if (newName) {
      setGreeting(`Hello, ${newName}!`);
    }
  }, []); // ✅ Empty array = الدالة لا تتغير أبداً

  // useCallback يعتمد على name - يعيد إنشاء الدالة عند تغيير name
  const handleGreet = useCallback(() => {
    if (name) {
      alert(`Hello, ${name}! You are ${age} years old.`);
    }
  }, [name, age]); // ✅ يعيد إنشاء الدالة عند تغيير name أو age

  // useCallback بدون dependencies - الدالة ثابتة
  const handleReset = useCallback(() => {
    setName("");
    setAge(18);
    setGreeting("");
  }, []); // ✅ Empty array = الدالة ثابتة

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useCallback with Dependencies</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Name:</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
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

        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={handleGreet}>
            Greet
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="text-sm text-base-content">
          <p>
            <strong>Dependencies:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code>handleNameChange</code> - No dependencies (stable)
            </li>
            <li>
              <code>handleGreet</code> - Depends on [name, age]
            </li>
            <li>
              <code>handleReset</code> - No dependencies (stable)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
