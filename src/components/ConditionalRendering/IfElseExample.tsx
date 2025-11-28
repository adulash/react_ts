import { useState } from "react";

export default function IfElseExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">If/Else Example</h2>
      <div className="space-y-4">
        {isLoggedIn ? (
          <div>
            <p className="text-base-content mb-2">Welcome back!</p>
            <button className="btn btn-primary" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p className="text-base-content mb-2">Please log in</p>
            <button className="btn btn-primary" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
