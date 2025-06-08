// /app/admin/infoTourisme/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import TableManager from "@/components/componentsAdmim/tableManager/TableManager";

// Liste des tables et champs
const tables = [
  {
    name: "Country",
    fields: [
      "id",
      "name",
      "order",
      "code",
      "language",
      "currency",
      "createdAt",
      "updatedAt",
      "cities",
    ],
  },
  {
    name: "City",
    fields: [
      "id",
      "name",
      "order",
      "countryId",
      "createdAt",
      "updatedAt",
      "country",
      "neighborhoods",
      "landmarks",
      "addresses",
      "destinations",
      "DestinationToCity",
    ],
  },
  {
    name: "Neighborhood",
    fields: [
      "id",
      "name",
      "order",
      "cityId",
      "createdAt",
      "updatedAt",
      "city",
      "addresses",
    ],
  },
  {
    name: "Landmark",
    fields: [
      "id",
      "name",
      "order",
      "description",
      "type",
      "cityId",
      "latitude",
      "longitude",
      "createdAt",
      "updatedAt",
      "city",
    ],
  },
  {
    name: "Destination",
    fields: [
      "id",
      "name",
      "order",
      "description",
      "type",
      "popularityScore",
      "cityId",
      "latitude",
      "longitude",
      "radius",
      "createdAt",
      "updatedAt",
      "HotelCard",
      "City",
      "DestinationToCity",
    ],
  },
];

type TableData = {
  [key: string]: any[];
};

export default function TableAccordion() {
  const [editingTable, setEditingTable] = useState<null | (typeof tables)[0]>(
    null
  );
  const [data, setData] = useState<TableData>({});
  const [loading, setLoading] = useState(false);

  // Charger dynamiquement les données de la table sélectionnée
  useEffect(() => {
    if (editingTable) {
      setLoading(true);
      fetch(`/api/admin/${editingTable.name}`)
        .then((res) => res.json())
        .then((items) =>
          setData((prev) => ({
            ...prev,
            [editingTable.name]: items,
          }))
        )
        .finally(() => setLoading(false));
    }
  }, [editingTable]);

  // Handlers CRUD
  const handleAdd = async (item: any) => {
    if (!editingTable) return;
    const res = await fetch(`/api/admin/${editingTable.name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const newItem = await res.json();
      setData((prev) => ({
        ...prev,
        [editingTable.name]: [...(prev[editingTable.name] || []), newItem],
      }));
    }
  };

  const handleEdit = async (item: any) => {
    if (!editingTable) return;
    const res = await fetch(`/api/admin/${editingTable.name}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (res.ok) {
      setData((prev) => ({
        ...prev,
        [editingTable.name]: prev[editingTable.name].map((i: any) =>
          i.id === item.id ? item : i
        ),
      }));
    }
  };

  const handleDelete = async (item: any) => {
    if (!editingTable) return;
    const res = await fetch(`/api/admin/${editingTable.name}/${item.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setData((prev) => ({
        ...prev,
        [editingTable.name]: prev[editingTable.name].filter(
          (i: any) => i.id !== item.id
        ),
      }));
    }
  };

  const handleMoveUp = (item: any, idx: number) => {
    if (!editingTable) return;
    if (idx === 0) return;
    setData((prev) => {
      const newItems = [...prev[editingTable.name]];
      [newItems[idx - 1], newItems[idx]] = [newItems[idx], newItems[idx - 1]];
      return { ...prev, [editingTable.name]: newItems };
    });
  };

  const handleMoveDown = (item: any, idx: number) => {
    if (!editingTable) return;
    setData((prev) => {
      const newItems = [...prev[editingTable.name]];
      if (idx === newItems.length - 1) return prev;
      [newItems[idx], newItems[idx + 1]] = [newItems[idx + 1], newItems[idx]];
      return { ...prev, [editingTable.name]: newItems };
    });
  };

  return (
    <div className="w-screen min-h-screen p-0 m-0 bg-gray-100">
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Gestion des tables Prisma
        </h1>
        {!editingTable ? (
          <Accordion type="single" collapsible className="w-full">
            {tables.map((table) => (
              <AccordionItem key={table.name} value={table.name}>
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">{table.name}</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable(table)}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    {table.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div>
            <button
              onClick={() => setEditingTable(null)}
              className="mb-4 px-3 py-1 rounded bg-gray-300 text-black hover:bg-gray-400 text-sm"
            >
              Retour
            </button>
            {loading ? (
              <div className="text-center">Chargement...</div>
            ) : (
              <TableManager
                tableName={editingTable.name}
                items={data[editingTable.name] || []}
                fields={editingTable.fields}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
