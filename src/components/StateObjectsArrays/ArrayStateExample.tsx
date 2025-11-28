import { useState } from "react";

export default function ArrayStateExample() {
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Array State Example</h2>
      <div className="space-y-4">
        <div>
          <div className="flex gap-2">
            <input
              type="text"
              className="input input-bordered flex-1"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addItem()}
              placeholder="Add new item"
            />
            <button className="btn btn-primary" onClick={addItem}>
              Add
            </button>
          </div>
        </div>

        <div>
          <ul className="list-disc list-inside space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-base-content flex items-center justify-between">
                <span>{item}</span>
                <button className="btn btn-sm btn-error" onClick={() => removeItem(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {items.length === 0 && <p className="text-base-content text-center py-4">No items yet</p>}
        </div>

        <div className="flex justify-center">
          <button className="btn btn-warning" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
