/*
model HotelGroup {
  id              String   @id @default(uuid())
  name            String // group ou professionnel gérer par un particulier
  order           Int?     @default(100)
  description     String?
  website         String?
  logoUrl         String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  HotelCard HotelCard[]

  @@map("hotel_groups")
}


*/
// ItemFormHotelGroup.tsx
import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {HotelGroup} from "@/lib/generated/prisma/client";

type ItemFormProps<T extends Record<string, any>> = {
  fields: (keyof T)[];
  initialData?: Partial<T>;
  onSubmit: (item: T) => void;
  onCancel: () => void;
};

export default function ItemForm<T extends Record<string, any>>({
  fields,
  initialData = {},
  onSubmit,
  onCancel,
}: ItemFormProps<T>) {
  // Etat local permissif pour supporter tous les types de champs
  const [form, setForm] = useState<Partial<Record<keyof T, any>>>(() => {
    const initial: Partial<Record<keyof T, any>> = {};
    fields.forEach((field) => {
      initial[field] = initialData[field] ?? undefined;
    });
    return initial;
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = {} as T;
    fields.forEach((field) => {
      result[field] = form[field];
    });
    onSubmit(result);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 mb-4 bg-amber-100/10">
      {fields.map((field) => (
        <div key={String(field)} className="mb-2">
          <label className="mr-2 font-medium" htmlFor={String(field)}>
            {String(field)}:
          </label>
          <input
            id={String(field)}
            name={String(field)}
            value={form[field] ?? ""}
            onChange={handleChange}
            className="border px-2 py-1 rounded"
            type="text"
            autoComplete="off"
          />
        </div>
      ))}
      <Button type="submit" className="btn btn-success mr-2">
        Save
      </Button>
      <button type="button" onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    </form>
  );
}
