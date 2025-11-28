import BasicStateExample from "../components/State/BasicStateExample";
import CounterExample from "../components/State/CounterExample";
import ToggleExample from "../components/State/ToggleExample";

export default function State() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">State</h1>

      <BasicStateExample />
      <CounterExample />
      <ToggleExample />
    </div>
  );
}
