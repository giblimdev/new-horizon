// ItemFormHotelAmenity.tsx

import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FormEvent } from "react";

type HotelAmenityForm = {
  name: string;
  order?: number;
  category?: string;
  icon?: string;
  description?: string;
};

type ItemFormHotelAmenityProps = {
  initialData?: Partial<HotelAmenityForm>;
  onSubmit: (item: HotelAmenityForm) => void;
  onCancel: () => void;
};

export default function ItemFormHotelAmenity({
  initialData = {},
  onSubmit,
  onCancel,
}: ItemFormHotelAmenityProps) {
  // État principal du formulaire
  const [form, setForm] = useState<HotelAmenityForm>({
    name: initialData.name ?? "",
    order: initialData.order ?? 100,
    category: initialData.category ?? "",
    icon: initialData.icon ?? "",
    description: initialData.description ?? "",
  });

  // État pour la textarea JSON (toujours synchronisé avec form)
  const [jsonValue, setJsonValue] = useState(() =>
    JSON.stringify(
      {
        name: initialData.name ?? "",
        order: initialData.order ?? 100,
        category: initialData.category ?? "",
        icon: initialData.icon ?? "",
        description: initialData.description ?? "",
      },
      null,
      2
    )
  );

  // Synchronise la textarea JSON quand l'état form change (mais pas si c'est la textarea qui vient de changer)
  React.useEffect(() => {
    setJsonValue(JSON.stringify(form, null, 2));
  }, [form]);

  // Gestion des champs classiques
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    setForm((prev) => {
      const newForm = {
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      };
      return newForm;
    });
  };

  // Gestion de la textarea JSON
  const handleJsonChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonValue(value);
    try {
      const parsed = JSON.parse(value);
      // On ne met à jour le form que si le JSON est valide et correspond à la structure attendue
      setForm({
        name: parsed.name ?? "",
        order: parsed.order ?? 100,
        category: parsed.category ?? "",
        icon: parsed.icon ?? "",
        description: parsed.description ?? "",
      });
    } catch {
      // Ne rien faire si le JSON n'est pas valide
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(jsonValue);
      onSubmit({
        name: parsed.name ?? "",
        order: parsed.order ?? 100,
        category: parsed.category ?? "",
        icon: parsed.icon ?? "",
        description: parsed.description ?? "",
      });
    } catch {
      alert("Le JSON n'est pas valide.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 mb-4 bg-amber-100/10">
      <div className="mb-2">
        <label className="mr-2 font-medium" htmlFor="name">
          Nom :
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
          type="text"
          required
        />
      </div>
      <div className="mb-2">
        <label className="mr-2 font-medium" htmlFor="order">
          Ordre :
        </label>
        <input
          id="order"
          name="order"
          value={form.order}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
          type="number"
        />
      </div>
      <div className="mb-2">
        <label className="mr-2 font-medium" htmlFor="category">
          Catégorie :
        </label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        >
          <option value="">Sélectionner</option>
          <option value="Location">Location</option>
          <option value="Amenity">Amenity</option>
          <option value="Service">Service</option>
          <option value="View">View</option>
          <option value="Offer">Offer</option>
          <option value="Food">Food</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="mr-2 font-medium" htmlFor="icon">
          Icône (URL/image) :
        </label>
        <input
          id="icon"
          name="icon"
          value={form.icon}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
          type="text"
        />
      </div>
      <div className="mb-2">
        <label className="mr-2 font-medium" htmlFor="description">
          Description :
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="font-medium" htmlFor="json">
          JSON généré (éditable) :
        </label>
        <textarea
          id="json"
          name="json"
          value={jsonValue}
          onChange={handleJsonChange}
          className="border px-2 py-1 rounded w-full font-mono text-xs"
          rows={8}
        />
      </div>
      <Button type="submit" className="btn btn-success mr-2">
        Enregistrer
      </Button>
      <button type="button" onClick={onCancel} className="btn btn-secondary">
        Annuler
      </button>
    </form>
  );
}

// ItemFormHotelAmenity.tsx
