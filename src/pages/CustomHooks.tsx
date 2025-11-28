import UseCounterExample from "../components/CustomHooks/UseCounterExample";
import UseToggleExample from "../components/CustomHooks/UseToggleExample";
import UseFetchExample from "../components/CustomHooks/UseFetchExample";

export default function CustomHooks() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">Custom Hooks</h1>

      <UseCounterExample />
      <UseToggleExample />
      <UseFetchExample />
    </div>
  );
}
