import BasicPropsExample from "../components/Props/BasicPropsExample";
import PropsWithDifferentTypes from "../components/Props/PropsWithDifferentTypes";
import PropsForwardingExample from "../components/Props/PropsForwardingExample";

export default function Props() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">Props</h1>

      <BasicPropsExample />
      <PropsWithDifferentTypes />
      <PropsForwardingExample />
    </div>
  );
}
