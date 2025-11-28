import UserInfo from "./UserInfo";

export default function PropsForwardingExample() {
  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Props Forwarding Example</h2>
      <UserInfo name="Mohamed" />
    </div>
  );
}
