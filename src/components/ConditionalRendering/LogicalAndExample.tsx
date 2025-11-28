import { useState } from "react";

export default function LogicalAndExample() {
  const [showMessage, setShowMessage] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Logical AND (&&) Example</h2>
      <div className="space-y-4">
        <div>
          <button className="btn btn-primary mb-4" onClick={() => setShowMessage(!showMessage)}>
            {showMessage ? "Hide" : "Show"} Message
          </button>
          {showMessage && (
            <div className="alert alert-info">
              <span>This message is only shown when showMessage is true!</span>
            </div>
          )}
        </div>

        <div className="divider">OR</div>

        <div>
          <p className="text-base-content mb-2">Notifications: {notifications}</p>
          <div className="flex gap-2 mb-2">
            <button
              className="btn btn-sm"
              onClick={() => setNotifications(Math.max(0, notifications - 1))}>
              -
            </button>
            <button className="btn btn-sm" onClick={() => setNotifications(notifications + 1)}>
              +
            </button>
          </div>
          {notifications > 0 && (
            <div className="badge badge-error">
              {notifications} new notification{notifications > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
