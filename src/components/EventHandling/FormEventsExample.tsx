import { useState } from "react";
import type { FormEvent } from "react";

export default function FormEventsExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", { name, email });

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 3000);
  };

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Form Events Example</h2>
      <div className="space-y-4">
        {submitted ? (
          <div className="alert alert-success">
            <span>
              Form submitted successfully! Name: {name}, Email: {email}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-base-content">Name:</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Email:</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
