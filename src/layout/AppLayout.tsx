import { Outlet, NavLink } from "react-router-dom";

const lessons = [
  { path: "props", name: "Props" },
  { path: "conditional-rendering", name: "Conditional Rendering" },
  { path: "event-handling", name: "Event Handling" },
  { path: "state", name: "State" },
  { path: "state-objects-arrays", name: "State: Objects & Arrays" },
  { path: "useContext", name: "useContext" },
  { path: "useRef", name: "useRef" },
  { path: "useEffect", name: "useEffect" },
  { path: "custom-hooks", name: "Custom Hooks" },
  { path: "useMemo", name: "useMemo" },
  { path: "useCallback", name: "useCallback" },
  { path: "react-memo", name: "React.memo" },
];

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 border-r border-base-300 p-4">
        <h2 className="text-xl font-bold mb-4 text-base-content">React Lessons</h2>
        <ul className="menu menu-vertical w-full">
          {lessons.map((lesson) => (
            <li key={lesson.path}>
              <NavLink
                to={lesson.path}
                className={({ isActive }) =>
                  isActive ? "active bg-base-300 text-base-content" : "text-base-content"
                }>
                {lesson.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-base-200">
        <Outlet />
      </main>
    </div>
  );
}
