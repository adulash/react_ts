import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function AsyncEffectExample() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect مع async function
  useEffect(() => {
    // لا يمكن جعل useEffect نفسه async مباشرة
    // لذلك ننشئ async function داخله
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        // محاكاة API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // بيانات وهمية
        const users: User[] = [
          { id: 1, name: "Ahmed", email: "ahmed@example.com" },
          { id: 2, name: "Mohamed", email: "mohamed@example.com" },
          { id: 3, name: "Sara", email: "sara@example.com" },
        ];

        const foundUser = users.find((u) => u.id === userId);
        if (foundUser) {
          setUser(foundUser);
        } else {
          setError("User not found");
        }
      } catch {
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup: إلغاء الطلب إذا تغير userId قبل اكتمال الطلب
    return () => {
      // يمكن إضافة cleanup logic هنا
      console.log("Cleanup: Cancelling fetch");
    };
  }, [userId]); // ✅ يعمل عند تغيير userId

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Async useEffect Example</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">User ID:</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            min="1"
            max="3"
          />
        </div>

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

        {user && !loading && (
          <div className="alert alert-success">
            <div>
              <h3 className="font-bold">User Found:</h3>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
        )}

        <div className="text-sm text-base-content">
          <p>
            <strong>Pattern:</strong>
          </p>
          <pre className="bg-base-200 p-2 rounded text-xs overflow-x-auto">
            {`useEffect(() => {
  const fetchData = async () => {
    const data = await apiCall();
    setData(data);
  };
  fetchData();
}, [dependency]);`}
          </pre>
        </div>
      </div>
    </div>
  );
}
