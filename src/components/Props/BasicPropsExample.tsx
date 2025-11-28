import Greeting from "./Greeting";

export default function BasicPropsExample() {
  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Basic Props Example</h2>
      <div className="space-y-2 text-base-content">
        <Greeting name="Mohamed" age={25} />
        <Greeting name="Ahmed" age={30} />
      </div>
    </div>
  );
}
