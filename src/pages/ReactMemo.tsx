import BasicMemoExample from "../components/ReactMemo/BasicMemoExample";
import MemoComparisonExample from "../components/ReactMemo/MemoComparisonExample";
import MemoWithCustomComparisonExample from "../components/ReactMemo/MemoWithCustomComparisonExample";
import MemoWithPropsExample from "../components/ReactMemo/MemoWithPropsExample";

export default function ReactMemo() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">React.memo</h1>

      <BasicMemoExample />
      <MemoWithPropsExample />
      <MemoComparisonExample />
      <MemoWithCustomComparisonExample />
    </div>
  );
}
