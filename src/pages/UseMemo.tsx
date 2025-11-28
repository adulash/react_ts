import BasicMemoExample from "../components/UseMemo/BasicMemoExample";
import MemoWithDependenciesExample from "../components/UseMemo/MemoWithDependenciesExample";
import PerformanceComparisonExample from "../components/UseMemo/PerformanceComparisonExample";

export default function UseMemo() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">useMemo</h1>

      <BasicMemoExample />
      <MemoWithDependenciesExample />
      <PerformanceComparisonExample />
    </div>
  );
}
