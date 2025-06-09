// TableManagerHotelAmenity.tsx

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type TableManagerProps = {
  tableName: string;
  items: Array<{ id: string | number; [key: string]: any }>;
  fields: string[];
  onAdd: (item: any) => void;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
  onMoveUp: (item: any, idx: number) => void;
  onMoveDown: (item: any, idx: number) => void;
};

export default function TableManager({
  tableName,
  items,
  fields,
  onAdd,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
}: TableManagerProps) {
  const [formState, setFormState] = useState<{
    mode: "add" | "edit" | null;
    item: any;
  }>({ mode: null, item: null });

  return (
    <div className=" p-5">
      <h2 className="text-xl font-bold mb-4 text-center">{tableName}</h2>
      <Button
        onClick={() => setFormState({ mode: "add", item: {} })}
        className="mb-4 btn btn-primary"
      >
        Add a {tableName}
      </Button>
      {formState.mode && (
        <ItemForm
          fields={fields.filter((f) => f !== "id")}
          initialData={formState.mode === "edit" ? formState.item : {}}
          onSubmit={(item) => {
            if (formState.mode === "add") onAdd(item);
            else if (formState.mode === "edit")
              onEdit({ ...formState.item, ...item });
            setFormState({ mode: null, item: null });
          }}
          onCancel={() => setFormState({ mode: null, item: null })}
        />
      )}
      {!items || items.length === 0 ? (
        <div className="text-gray-500 italic mb-4 text-center">
          No {tableName} found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table className="w-max min-w-full">
            <TableHeader>
              <TableRow>
                {fields.map((field) => (
                  <TableHead key={field}>{field}</TableHead>
                ))}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, idx) => (
                <TableRow key={item.id}>
                  {fields.map((field) => (
                    <TableCell key={field}>{item[field]}</TableCell>
                  ))}
                  <TableCell>
                    <button
                      onClick={() => onMoveUp(item, idx)}
                      disabled={idx === 0}
                      className="mx-1"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => onMoveDown(item, idx)}
                      disabled={idx === items.length - 1}
                      className="mx-1"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => setFormState({ mode: "edit", item })}
                      className="mx-1"
                    >
                      Edit
                    </button>
                    <button onClick={() => onDelete(item)} className="mx-1">
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
