import { useState, useEffect } from "react";

type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export function useFetch<T>(url: string): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // محاكاة API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // بيانات وهمية
      const mockData: Record<string, unknown> = {
        "/api/users": [
          { id: 1, name: "Ahmed", email: "ahmed@example.com" },
          { id: 2, name: "Mohamed", email: "mohamed@example.com" },
        ],
        "/api/posts": [
          { id: 1, title: "Post 1", content: "Content 1" },
          { id: 2, title: "Post 2", content: "Content 2" },
        ],
      };

      const response = mockData[url] || null;
      setData(response as T);
    } catch {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
