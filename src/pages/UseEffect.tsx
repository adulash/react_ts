import BasicEffectExample from "../components/UseEffect/BasicEffectExample";
import EffectWithDependenciesExample from "../components/UseEffect/EffectWithDependenciesExample";
import CleanupEffectExample from "../components/UseEffect/CleanupEffectExample";
import AsyncEffectExample from "../components/UseEffect/AsyncEffectExample";

export default function UseEffect() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">useEffect</h1>

      <BasicEffectExample />
      <EffectWithDependenciesExample />
      <CleanupEffectExample />
      <AsyncEffectExample />
    </div>
  );
}
