import { useState } from "react";

type User = {
  name: string;
  age: number;
  email: string;
};

export default function ObjectStateExample() {
  const [user, setUser] = useState<User>({
    name: "Ahmed",
    age: 25,
    email: "ahmed@example.com",
  });

  const updateName = () => {
    setUser({ ...user, name: "Mohamed" });
  };

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const updateEmail = (newEmail: string) => {
    setUser({ ...user, email: newEmail });
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Object State Example</h2>
      <div className="space-y-4">
        <div className="bg-base-100 p-4 rounded">
          <p className="text-base-content">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-base-content">
            <strong>Age:</strong> {user.age}
          </p>
          <p className="text-base-content">
            <strong>Email:</strong> {user.email}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={updateName}>
            Update Name
          </button>
          <button className="btn btn-secondary" onClick={updateAge}>
            Increment Age
          </button>
          <button className="btn btn-accent" onClick={() => updateEmail("newemail@example.com")}>
            Update Email
          </button>
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base-content">Change Email:</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={user.email}
            onChange={(e) => updateEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
