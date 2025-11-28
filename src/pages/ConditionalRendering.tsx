import IfElseExample from "../components/ConditionalRendering/IfElseExample";
import TernaryOperatorExample from "../components/ConditionalRendering/TernaryOperatorExample";
import LogicalAndExample from "../components/ConditionalRendering/LogicalAndExample";

export default function ConditionalRendering() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">Conditional Rendering</h1>

      <IfElseExample />
      <TernaryOperatorExample />
      <LogicalAndExample />
    </div>
  );
}
