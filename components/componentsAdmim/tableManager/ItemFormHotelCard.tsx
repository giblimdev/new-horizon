/*


model HotelCard {
  id                             String                           @id @default(uuid())
  name                           String
  idCity                         String
  shortDescription               String?
  starRating                     Int
  overallRating                  Float?
  ratingAdjective                String?
  reviewCount                    Int                              @default(0)
  basePricePerNight              Float
  regularPrice                   Float?
  currency                       String                           @default("EUR")
  isPartner                      Boolean                          @default(false)
  promoMessage                   String?
  imageMessage                   String?
  cancellationPolicy             String?
  accommodationTypeId            String?
  destinationId                  String?
  hotelGroupId                   String?
  parking                        HotelParking[]
  images                         HotelImage[]
  latitude                       Float? // GPS latitude
  longitude                      Float? // GPS longitude
  HotelAmenity                   HotelAmenity[]
  details                        HotelDetails?                    @relation(fields: [detailsId], references: [id])
  detailsId                      String?
  accommodationType              AccommodationType?               @relation(fields: [accommodationTypeId], references: [id], onDelete: SetNull)
  destination                    Destination?                     @relation(fields: [destinationId], references: [id], onDelete: SetNull)
  hotelGroup                     HotelGroup?                      @relation(fields: [hotelGroupId], references: [id], onDelete: SetNull)
  HotelCardToHotelHighlight      HotelCardToHotelHighlight[]
  HotelCardToLabel               HotelCardToLabel[]
  HotelCardToAccessibilityOption HotelCardToAccessibilityOption[]
  HotelCardToHotelAmenity        HotelCardToHotelAmenity[]
}


*/
// ItemFormHotelCard.tsx
import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {HotelCard} from "@/lib/generated/prisma/client";

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
