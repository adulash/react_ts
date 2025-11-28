import { useCallback, useState, memo } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// TodoItem Component مع React.memo
const TodoItem = memo(
  ({
    todo,
    onToggle,
    onDelete,
  }: {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
  }) => {
    console.log(`TodoItem ${todo.id} rendered`);

    return (
      <div className="flex items-center gap-2 p-2 bg-base-200 rounded">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="checkbox"
        />
        <span className={`flex-1 ${todo.completed ? "line-through opacity-50" : ""}`}>
          {todo.text}
        </span>
        <button className="btn btn-sm btn-error" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    );
  }
);

TodoItem.displayName = "TodoItem";

export default function TodoListExample() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // ✅ useCallback - الدالة محفوظة، TodoItem لن يعيد render إلا عند تغيير todos
  const handleToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }, []); // Empty array لأننا نستخدم functional update

  // ✅ useCallback - الدالة محفوظة
  const handleDelete = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []); // Empty array لأننا نستخدم functional update

  // ✅ useCallback - الدالة محفوظة
  const handleAdd = useCallback(() => {
    if (newTodo.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  }, [newTodo]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Real World: Todo List</h2>
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            className="input input-bordered flex-1"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add new todo..."
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setFilter("all")}>
            All
          </button>
          <button
            className={`btn btn-sm ${filter === "active" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setFilter("active")}>
            Active
          </button>
          <button
            className={`btn btn-sm ${filter === "completed" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setFilter("completed")}>
            Completed
          </button>
        </div>

        <div className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
          ))}
        </div>

        <div className="alert alert-info">
          <span>
            <strong>Real World Benefit:</strong> When you change the filter, TodoItem components
            don't re-render unnecessarily because onToggle and onDelete are memoized with
            useCallback. Check console to see render logs.
          </span>
        </div>
      </div>
    </div>
  );
}
