import { useState, memo } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

// UserCard Component مع React.memo
const UserCard = memo(({ user }: { user: User }) => {
  console.log(`UserCard ${user.id} rendered`);

  return (
    <div className="bg-base-200 p-4 rounded">
      <h3 className="font-bold text-base-content">{user.name}</h3>
      <p className="text-sm text-base-content">{user.email}</p>
    </div>
  );
});

UserCard.displayName = "UserCard";

export default function MemoWithPropsExample() {
  const [users] = useState<User[]>([
    { id: 1, name: "Ahmed", email: "ahmed@example.com" },
    { id: 2, name: "Mohamed", email: "mohamed@example.com" },
    { id: 3, name: "Sara", email: "sara@example.com" },
  ]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [otherState, setOtherState] = useState(0);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">React.memo with Props</h2>
      <div className="space-y-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Selected User</div>
            <div className="stat-value text-base-content">{selectedUserId || "None"}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Other State</div>
            <div className="stat-value text-base-content">{otherState}</div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-base-content">Users List:</h3>
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-2">
              <UserCard user={user} />
              <button
                className={`btn btn-sm ${selectedUserId === user.id ? "btn-primary" : "btn-ghost"}`}
                onClick={() => setSelectedUserId(user.id)}>
                Select
              </button>
            </div>
          ))}
        </div>

        <button className="btn btn-accent w-full" onClick={() => setOtherState(otherState + 1)}>
          Update Other State (doesn't affect users)
        </button>

        <div className="alert alert-info">
          <span>
            <strong>Check console:</strong> When you click "Update Other State", UserCard components
            don't re-render because their props (user objects) haven't changed. React.memo prevents
            unnecessary re-renders.
          </span>
        </div>
      </div>
    </div>
  );
}
