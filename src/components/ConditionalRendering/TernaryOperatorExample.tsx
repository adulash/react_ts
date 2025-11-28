import { useState } from "react";

export default function TernaryOperatorExample() {
  const [temperature, setTemperature] = useState(25);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Ternary Operator Example</h2>
      <div className="space-y-4">
        <div>
          <p className="text-base-content mb-2">Temperature: {temperature}°C</p>
          <div className="flex gap-2">
            <button className="btn btn-sm" onClick={() => setTemperature(temperature - 1)}>
              -
            </button>
            <button className="btn btn-sm" onClick={() => setTemperature(temperature + 1)}>
              +
            </button>
          </div>
        </div>
        <div className={`badge ${temperature > 20 ? "badge-error" : "badge-info"}`}>
          {temperature > 20 ? "Hot" : "Cold"}
        </div>
      </div>
    </div>
  );
}
