import { useToggle } from "../../hooks/useToggle";

export default function UseToggleExample() {
  const modal = useToggle(false);
  const sidebar = useToggle(true);
  const darkMode = useToggle(false);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useToggle Hook Example</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-base-content">Modal:</h3>
          <div className="flex items-center gap-4">
            <span className="text-base-content">Status: {modal.value ? "Open" : "Closed"}</span>
            <button className="btn btn-primary" onClick={modal.toggle}>
              Toggle Modal
            </button>
            <button className="btn btn-sm" onClick={modal.setTrue}>
              Open
            </button>
            <button className="btn btn-sm" onClick={modal.setFalse}>
              Close
            </button>
          </div>
          {modal.value && (
            <div className="alert alert-success mt-2">
              <span>Modal is open!</span>
            </div>
          )}
        </div>

        <div className="divider">OR</div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-base-content">Sidebar:</h3>
          <div className="flex items-center gap-4">
            <span className="text-base-content">
              Status: {sidebar.value ? "Visible" : "Hidden"}
            </span>
            <button className="btn btn-secondary" onClick={sidebar.toggle}>
              Toggle Sidebar
            </button>
          </div>
        </div>

        <div className="divider">OR</div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-base-content">Dark Mode:</h3>
          <div className="flex items-center gap-4">
            <span className="text-base-content">Mode: {darkMode.value ? "Dark" : "Light"}</span>
            <button
              className={`btn ${darkMode.value ? "btn-primary" : "btn-secondary"}`}
              onClick={darkMode.toggle}>
              Toggle Theme
            </button>
          </div>
        </div>

        <div className="alert alert-info">
          <span>
            <strong>Reusability:</strong> The same hook can be used for different boolean states
            (modal, sidebar, theme) with independent state management.
          </span>
        </div>
      </div>
    </div>
  );
}
