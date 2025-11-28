type UserCardProps = {
  username: string;
  email?: string;
  role: string;
  hobbies?: string[];
  isAdmin?: boolean;
};

export default function UserCard({ username, email, role, hobbies, isAdmin }: UserCardProps) {
  const firstLetter = username.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg mb-4">
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-12 flex items-center justify-center">
          <span className="text-xl">{firstLetter}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-base-content">{username}</h3>
        <p className="text-sm text-base-content">Email: {email || "no email provided"}</p>
        <p className="text-sm text-base-content">Role: {role}</p>
        {hobbies && hobbies.length > 0 && (
          <p className="text-sm text-base-content">Hobbies: {hobbies.join(", ")}</p>
        )}
      </div>
      {isAdmin && <div className="badge badge-error text-base-content">Admin</div>}
    </div>
  );
}
