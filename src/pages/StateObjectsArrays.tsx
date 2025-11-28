import ObjectStateExample from "../components/StateObjectsArrays/ObjectStateExample";
import ArrayStateExample from "../components/StateObjectsArrays/ArrayStateExample";
import NestedStateExample from "../components/StateObjectsArrays/NestedStateExample";

export default function StateObjectsArrays() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">State: Objects & Arrays</h1>

      <ObjectStateExample />
      <ArrayStateExample />
      <NestedStateExample />
    </div>
  );
}
