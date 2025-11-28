import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoList = {
  title: string;
  todos: Todo[];
};

export default function NestedStateExample() {
  const [todoList, setTodoList] = useState<TodoList>({
    title: "My Todo List",
    todos: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Learn TypeScript", completed: true },
    ],
  });

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(...todoList.todos.map((t) => t.id), 0) + 1;
      setTodoList({
        ...todoList,
        todos: [...todoList.todos, { id: newId, text: newTodo, completed: false }],
      });
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodoList({
      ...todoList,
      todos: todoList.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  const deleteTodo = (id: number) => {
    setTodoList({
      ...todoList,
      todos: todoList.todos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Nested State Example</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-base-content mb-2">{todoList.title}</h3>
        </div>

        <div>
          <div className="flex gap-2">
            <input
              type="text"
              className="input input-bordered flex-1"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
              placeholder="Add new todo"
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add Todo
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {todoList.todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-2 p-2 bg-base-100 rounded">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="checkbox"
              />
              <span
                className={`flex-1 text-base-content ${
                  todo.completed ? "line-through opacity-50" : ""
                }`}>
                {todo.text}
              </span>
              <button className="btn btn-sm btn-error" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Total</div>
            <div className="stat-value text-base-content">{todoList.todos.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Completed</div>
            <div className="stat-value text-base-content">
              {todoList.todos.filter((t) => t.completed).length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
