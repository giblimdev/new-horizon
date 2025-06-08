// components/FilterSideBarRewards.tsx

"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label as ShadcnLabel } from "@/components/ui/label";

// Filtres factices pour les programmes de fidélité / rewards
const REWARDS_FILTERS = [
  { label: "Programme de fidélité accepté", value: "loyalty" },
  { label: "Nuit gratuite possible", value: "free_night" },
  { label: "Points cumulables", value: "points" },
  { label: "Réductions membres", value: "member_discount" },
  { label: "Cashback disponible", value: "cashback" },
];

export default function FilterSideBarRewards() {
  const [checked, setChecked] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <fieldset className="mb-6 border-2 border-blue-500 rounded-lg p-4 bg-white">
      <legend className="px-2 text-blue-700 font-semibold text-sm">
        Rewards
      </legend>
      <div className="text-gray-600 flex flex-col gap-2 mt-0">
        {REWARDS_FILTERS.map((filter) => (
          <ShadcnLabel
            key={filter.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Checkbox
              checked={checked.includes(filter.value)}
              onCheckedChange={() => handleChange(filter.value)}
              id={filter.value}
            />
            <span className="text-sm">{filter.label}</span>
          </ShadcnLabel>
        ))}
      </div>
    </fieldset>
  );
}
