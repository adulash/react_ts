import { useCallback, useState, memo } from "react";

type FormData = {
  name: string;
  email: string;
  age: number;
};

// FormField Component مع React.memo
const FormField = memo(
  ({
    label,
    value,
    onChange,
    type = "text",
  }: {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: string;
  }) => {
    console.log(`FormField ${label} rendered`);

    return (
      <div>
        <label className="label">
          <span className="label-text text-base-content">{label}:</span>
        </label>
        <input
          type={type}
          className="input input-bordered w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default function FormExample() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: 18,
  });
  const [submitted, setSubmitted] = useState(false);
  const [otherState, setOtherState] = useState(0);

  // ✅ useCallback - الدالة محفوظة لكل حقل
  const handleNameChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, name: value }));
  }, []);

  const handleEmailChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, email: value }));
  }, []);

  const handleAgeChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, age: Number(value) }));
  }, []);

  // ✅ useCallback - دالة submit محفوظة
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setTimeout(() => setSubmitted(false), 3000);
    },
    [formData]
  );

  const handleReset = useCallback(() => {
    setFormData({ name: "", email: "", age: 18 });
    setSubmitted(false);
  }, []);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Real World: Form Handling</h2>
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField label="Name" value={formData.name} onChange={handleNameChange} />
          <FormField
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
          />
          <FormField label="Age" type="number" value={formData.age} onChange={handleAgeChange} />

          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary flex-1">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        <div className="divider">Other State (doesn't affect form)</div>

        <button className="btn btn-accent w-full" onClick={() => setOtherState(otherState + 1)}>
          Update Other State: {otherState}
        </button>

        {submitted && (
          <div className="alert alert-success">
            <span>Form submitted successfully!</span>
          </div>
        )}

        <div className="alert alert-info">
          <span>
            <strong>Real World Benefit:</strong> When you update "Other State", FormField components
            don't re-render because onChange handlers are memoized with useCallback. Check console
            to see render logs.
          </span>
        </div>
      </div>
    </div>
  );
}
