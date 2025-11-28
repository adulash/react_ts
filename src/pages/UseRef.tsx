import BasicRefExample from "../components/UseRef/BasicRefExample";
import RefWithoutRerenderExample from "../components/UseRef/RefWithoutRerenderExample";
import ForwardRefExample from "../components/UseRef/ForwardRefExample";

export default function UseRef() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">useRef</h1>

      <BasicRefExample />
      <RefWithoutRerenderExample />
      <ForwardRefExample />
    </div>
  );
}
