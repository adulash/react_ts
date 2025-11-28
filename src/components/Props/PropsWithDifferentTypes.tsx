import UserCard from "./UserCard";

export default function PropsWithDifferentTypes() {
  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Props with Different Data Types</h2>
      <div>
        <UserCard
          username="admin1"
          email="admin@example.com"
          role="admin"
          hobbies={["coding", "reading"]}
          isAdmin={true}
        />
        <UserCard username="user1" role="user" />
      </div>
    </div>
  );
}
