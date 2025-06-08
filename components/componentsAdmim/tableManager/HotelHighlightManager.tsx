import React, { useState, useEffect } from "react";
import TableManager from "@/components/componentsAdmim/tableManager/TableManager";
import ItemForm from "@/components/componentsAdmim/tableManager/ItemForm";

// Exemple de structure des champs AccommodationType
const fields: (keyof AccommodationType)[] = [
  "name",
  "order",
  "code",
  "description",
  "category",
];

type AccommodationType = {
  id: string;
  name: string;
  order: number;
  code: string;
  description: string;
  category: string;
};

type EditingState = {
  item: Partial<AccommodationType>;
  mode: "add" | "edit";
} | null;

export default function AccommodationTypeManager() {
  const [items, setItems] = useState<AccommodationType[]>([]);
  const [editing, setEditing] = useState<EditingState>(null);

  // Charger les données (à remplacer par un appel API réel)
  useEffect(() => {
    // fetchAccommodationTypes().then(setItems);
    setItems([
      {
        id: "1",
        name: "Hôtel",
        order: 1,
        code: "HOTEL",
        description: "Hôtel classique",
        category: "Standard",
      },
      {
        id: "2",
        name: "Auberge",
        order: 2,
        code: "AUBERGE",
        description: "Auberge traditionnelle",
        category: "Budget",
      },
    ]);
  }, []);

  const handleAdd = () => setEditing({ item: {}, mode: "add" });
  const handleEdit = (item: any) => setEditing({ item, mode: "edit" });
  const handleDelete = (item: { id: string }) => {
    if (window.confirm("Supprimer ce type ?")) {
      setItems(items.filter((i) => i.id !== item.id));
      // deleteAccommodationType(item.id) // à brancher sur ton backend
    }
  };
  const handleSave = (form: {
    id: any;
    name?: string;
    order?: number;
    code?: string;
    description?: string;
    category?: string;
  }) => {
    if (!editing) return;
    if (editing.mode === "add") {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          name: form.name ?? "",
          order: form.order ?? 0,
          code: form.code ?? "",
          description: form.description ?? "",
          category: form.category ?? "",
        },
      ]);
      // createAccommodationType(form) // à brancher sur ton backend
    } else {
      setItems(
        items.map((i) =>
          i.id === form.id
            ? {
                id: form.id,
                name: form.name ?? "",
                order: form.order ?? 0,
                code: form.code ?? "",
                description: form.description ?? "",
                category: form.category ?? "",
              }
            : i
        )
      );
      // updateAccommodationType(form) // à brancher sur ton backend
    }
    setEditing(null);
  };
  const handleCancel = () => setEditing(null);
  const handleMoveUp = (item: any, idx: number) => {
    if (idx === 0) return;
    const newItems = [...items];
    [newItems[idx - 1], newItems[idx]] = [newItems[idx], newItems[idx - 1]];
    setItems(newItems);
  };
  const handleMoveDown = (item: any, idx: number) => {
    if (idx === items.length - 1) return;
    const newItems = [...items];
    [newItems[idx], newItems[idx + 1]] = [newItems[idx + 1], newItems[idx]];
    setItems(newItems);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        Gestion des types d’hébergement
      </h2>
      {editing ? (
        <ItemForm
          fields={fields}
          initialData={editing.mode === "edit" ? editing.item : {}}
          onSubmit={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <TableManager
            items={items}
            fields={fields}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown} tableName={""}        />
      )}
    </div>
  );
}
