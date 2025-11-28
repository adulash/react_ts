import ClickEventsExample from "../components/EventHandling/ClickEventsExample";
import InputEventsExample from "../components/EventHandling/InputEventsExample";
import FormEventsExample from "../components/EventHandling/FormEventsExample";

export default function EventHandling() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-base-content">Event Handling</h1>

      <ClickEventsExample />
      <InputEventsExample />
      <FormEventsExample />
    </div>
  );
}
