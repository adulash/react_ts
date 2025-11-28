import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function UseFetchExample() {
  const [endpoint, setEndpoint] = useState("/api/users");
  const { data, loading, error, refetch } = useFetch<User[] | Post[]>(endpoint);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">useFetch Hook Example</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Select Endpoint:</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}>
            <option value="/api/users">Users</option>
            <option value="/api/posts">Posts</option>
          </select>
        </div>

        <button className="btn btn-primary w-full" onClick={refetch}>
          Refetch Data
        </button>

        {loading && (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}

        {data && !loading && (
          <div className="space-y-2">
            <h3 className="font-semibold text-base-content">Data:</h3>
            <div className="bg-base-200 p-4 rounded">
              <pre className="text-sm text-base-content">{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        )}

        <div className="alert alert-info">
          <span>
            <strong>Custom Hook Pattern:</strong> Encapsulates data fetching logic (loading, error,
            data) that can be reused across multiple components.
          </span>
        </div>
      </div>
    </div>
  );
}
