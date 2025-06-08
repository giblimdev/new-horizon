// AccommodationTypeForm.tsx
import React, { useState } from "react";

type ItemFormProps = {
  fields: string[];
  initialData?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
  onCancel: () => void;
};

export default function ItemForm({
  fields,
  initialData = {},
  onSubmit,
  onCancel,
}: ItemFormProps) {
  const [form, setForm] = useState(initialData);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {fields.map((field) => (
        <div key={field} className="mb-2">
          <label className="mr-2">{field}:</label>
          <input
            name={field}
            value={form[field] || ""}
            onChange={handleChange}
            className="border px-2 py-1"
          />
        </div>
      ))}
      <button type="submit" className="btn btn-success mr-2">
        Save
      </button>
      <button type="button" onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    </form>
  );
}
