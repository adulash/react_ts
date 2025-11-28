import BasicCallbackExample from "../components/UseCallback/BasicCallbackExample";
import CallbackWithDependenciesExample from "../components/UseCallback/CallbackWithDependenciesExample";
import CallbackWithMemoExample from "../components/UseCallback/CallbackWithMemoExample";
import TodoListExample from "../components/UseCallback/RealWorldExamples/TodoListExample";
import SearchExample from "../components/UseCallback/RealWorldExamples/SearchExample";
import FormExample from "../components/UseCallback/RealWorldExamples/FormExample";

export default function UseCallback() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">useCallback</h1>

      <BasicCallbackExample />
      <CallbackWithDependenciesExample />
      <CallbackWithMemoExample />

      <div className="divider">Real World Examples</div>

      <TodoListExample />
      <SearchExample />
      <FormExample />
    </div>
  );
}
