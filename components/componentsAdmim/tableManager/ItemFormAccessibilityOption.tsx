import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FormEvent } from "react";
//import { AccessibilityOption } from "@/lib/generated/prisma/client";

type AccessibilityOptionForm = {
  name: string;
  order: number | null;
  code: string;
  description: string | null;
  category: string;
  icon: string | null;
};

type ItemFormAccessibilityOptionProps = {
  initialData?: Partial<AccessibilityOptionForm>;
  onSubmit: (item: AccessibilityOptionForm) => void;
  onCancel: () => void;
};

const CATEGORIES = ["Location", "Amenity", "Service", "View", "Offer", "Food"];

export default function ItemFormAccessibilityOption({
  initialData = {},
  onSubmit,
  onCancel,
}: ItemFormAccessibilityOptionProps) {
  const [form, setForm] = useState<AccessibilityOptionForm>({
    name: initialData.name ?? "",
    order: initialData.order ?? null,
    code: initialData.code ?? "",
    description: initialData.description ?? null,
    category: initialData.category ?? "Amenity",
    icon: initialData.icon ?? null,
  });

  const [jsonValue, setJsonValue] = useState(() =>
    JSON.stringify(form, null, 2)
  );

  React.useEffect(() => {
    setJsonValue(JSON.stringify(form, null, 2));
  }, [form]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? value === ""
            ? null
            : Number(value)
          : value === ""
          ? null
          : value,
    }));
  };

  const handleJsonChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonValue(value);
    try {
      const parsed = JSON.parse(value);
      setForm({
        name: parsed.name ?? "",
        order: parsed.order ?? null,
        code: parsed.code ?? "",
        description: parsed.description ?? null,
        category: parsed.category ?? "Amenity",
        icon: parsed.icon ?? null,
      });
    } catch {
      // JSON invalide : ne rien faire
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(jsonValue);
      onSubmit({
        name: parsed.name ?? "",
        order: parsed.order ?? null,
        code: parsed.code ?? "",
        description: parsed.description ?? null,
        category: parsed.category ?? "Amenity",
        icon: parsed.icon ?? null,
      });
    } catch {
      alert("Le JSON n'est pas valide.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-200"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            className="block text-sm font-medium text-slate-700 mb-1"
            htmlFor="name"
          >
            Nom *
          </label>
          <input
            id="name"
            name="name"
            value={form.name ?? ""}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-slate-700 mb-1"
            htmlFor="code"
          >
            Code (unique) *
          </label>
          <input
            id="code"
            name="code"
            value={form.code ?? ""}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-slate-700 mb-1"
            htmlFor="order"
          >
            Ordre
          </label>
          <input
            id="order"
            name="order"
            value={form.order ?? ""}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            min="1"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-slate-700 mb-1"
            htmlFor="category"
          >
            Catégorie *
          </label>
          <select
            id="category"
            name="category"
            value={form.category ?? "Amenity"}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            className="block text-sm font-medium text-slate-700 mb-1"
            htmlFor="icon"
          >
            Icône (URL)
          </label>
          <input
            id="icon"
            name="icon"
            value={form.icon ?? ""}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
        </div>
      </div>

      <div>
        <label
          className="block text-sm font-medium text-slate-700 mb-1"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description ?? ""}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="mt-4">
        <label
          className="block text-sm font-medium text-slate-700 mb-1"
          htmlFor="json"
        >
          JSON généré (éditable)
        </label>
        <textarea
          id="json"
          name="json"
          value={jsonValue}
          onChange={handleJsonChange}
          className="w-full border border-slate-300 rounded-md px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={8}
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="hover:bg-slate-100"
        >
          Annuler
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Enregistrer
        </Button>
      </div>
    </form>
  );
}
