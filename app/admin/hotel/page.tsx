// /app/admin/hotel/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import TableManager from "@/components/componentsAdmim/tableManager/TableManager";

// Définition des tables et champs (Label inclus)
const tables = [
  {
    name: "Label",
    fields: [
      "id",
      "name",
      "order",
      "code",
      "description",
      "category",
      "icon",
      "color",
      "priority",
      "createdAt",
      "updatedAt",
      "HotelDetails",
      "hotelDetailsId",
      "HotelCardToLabel",
    ],
  },
  {
    name: "HotelGroup",
    fields: [
      "id",
      "name",
      "order",
      "code",
      "description",
      "website",
      "logoUrl",
      "foundedYear",
      "headquarters",
      "totalProperties",
      "totalRooms",
      "marketCap",
      "annualRevenue",
      "createdAt",
      "updatedAt",
      "HotelCard",
    ],
  },
  {
    name: "HotelHighlight",
    fields: [
      "id",
      "title",
      "order",
      "description",
      "category",
      "icon",
      "priority",
      "isPromoted",
      "hotelId",
      "createdAt",
      "updatedAt",
      "HotelCardToHotelHighlight",
    ],
  },
  {
    name: "HotelCard",
    fields: [
      "id",
      "name",
      "idCity",
      "shortDescription",
      "starRating",
      "overallRating",
      "ratingAdjective",
      "reviewCount",
      "basePricePerNight",
      "regularPrice",
      "currency",
      "isPartner",
      "promoMessage",
      "imageMessage",
      "cancellationPolicy",
      "accommodationTypeId",
      "destinationId",
      "hotelGroupId",
      "latitude",
      "longitude",
      "detailsId",
      "parking",
      "images",
      "HotelAmenity",
      "details",
      "accommodationType",
      "destination",
      "hotelGroup",
      "HotelCardToHotelHighlight",
      "HotelCardToLabel",
      "HotelCardToAccessibilityOption",
      "HotelCardToHotelAmenity",
    ],
  },
  {
    name: "HotelDetails",
    fields: [
      "id",
      "idHotelCard",
      "description",
      "addressId",
      "createdAt",
      "updatedAt",
      "address",
      "RoomAmenity",
      "Label",
      "HotelCard",
      "HotelDetailsToRoomAmenity",
    ],
  },
  // Ajoute ici d’autres tables principales ou de jointure si besoin
];

type TableData = {
  [key: string]: any[];
};

export default function TableAccordionPage() {
  const [editingTable, setEditingTable] = useState<null | (typeof tables)[0]>(
    null
  );
  const [data, setData] = useState<TableData>({});
  const [loading, setLoading] = useState(false);

  // Charge les données de la table sélectionnée depuis l'API
  useEffect(() => {
    if (editingTable) {
      setLoading(true);
      fetch(`/api/admin/${editingTable.name}`)
        .then((res) => res.json())
        .then((result) => {
          // Prend result.data si l'API renvoie { success, data }
          const items = Array.isArray(result.data)
            ? result.data
            : Array.isArray(result)
            ? result
            : [];
          setData((prev) => ({
            ...prev,
            [editingTable.name]: items,
          }));
        })
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
      const result = await res.json();
      const newItem = result.data || result;
      setData((prev) => ({
        ...prev,
        [editingTable.name]: [
          ...(Array.isArray(prev[editingTable.name])
            ? prev[editingTable.name]
            : []),
          newItem,
        ],
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
      const result = await res.json();
      const updatedItem = result.data || item;
      setData((prev) => ({
        ...prev,
        [editingTable.name]: (Array.isArray(prev[editingTable.name])
          ? prev[editingTable.name]
          : []
        ).map((i: any) => (i.id === updatedItem.id ? updatedItem : i)),
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
        [editingTable.name]: (Array.isArray(prev[editingTable.name])
          ? prev[editingTable.name]
          : []
        ).filter((i: any) => i.id !== item.id),
      }));
    }
  };

  const handleMoveUp = (item: any, idx: number) => {
    if (!editingTable) return;
    if (idx === 0) return;
    setData((prev) => {
      const arr = Array.isArray(prev[editingTable.name])
        ? [...prev[editingTable.name]]
        : [];
      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
      return { ...prev, [editingTable.name]: arr };
    });
  };

  const handleMoveDown = (item: any, idx: number) => {
    if (!editingTable) return;
    setData((prev) => {
      const arr = Array.isArray(prev[editingTable.name])
        ? [...prev[editingTable.name]]
        : [];
      if (idx === arr.length - 1) return prev;
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      return { ...prev, [editingTable.name]: arr };
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
                items={
                  Array.isArray(data[editingTable.name])
                    ? data[editingTable.name]
                    : []
                }
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
