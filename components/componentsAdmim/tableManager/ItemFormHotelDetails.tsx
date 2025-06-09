// ItemFormHotelDetail.tsx

import React from "react";
import { useForm } from "react-hook-form";

type HotelDetailFormValues = {
  idHotelCard: string;
  description?: string | null;
};

type Props = {
  initialData?: Partial<HotelDetailFormValues>;
  onSubmit: (data: HotelDetailFormValues) => void;
  onCancel: () => void;
  hotelCardOptions: { id: string; name: string }[];
};

export default function ItemFormHotelDetail({
  initialData = {},
  onSubmit,
  onCancel,
  hotelCardOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<HotelDetailFormValues>({
    defaultValues: {
      idHotelCard: initialData.idHotelCard ?? "",
      description: initialData.description ?? "",
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire détail hôtel"
    >
      <div className="grid grid-cols-1 gap-6">
        {/* Sélecteur de fiche hôtel */}
        <div className="space-y-2">
          <label
            htmlFor="idHotelCard"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Fiche hôtel <span className="text-red-500">*</span>
          </label>
          <select
            id="idHotelCard"
            {...register("idHotelCard", {
              required: "La fiche hôtel est requise",
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.idHotelCard
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.idHotelCard ? "true" : "false"}
            aria-describedby={
              errors.idHotelCard ? "idHotelCard-error" : undefined
            }
          >
            <option value="">Sélectionnez une fiche hôtel…</option>
            {hotelCardOptions.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
          {errors.idHotelCard && (
            <p id="idHotelCard-error" className="text-sm text-red-600">
              {errors.idHotelCard.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              maxLength: { value: 1000, message: "Maximum 1000 caractères" },
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            rows={4}
            placeholder="Décrivez les détails de l'hôtel (optionnel)"
            aria-invalid={errors.description ? "true" : "false"}
            aria-describedby={
              errors.description ? "description-error" : undefined
            }
          />
          {errors.description && (
            <p id="description-error" className="text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${
            isSubmitting || !isValid
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isSubmitting ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>
    </form>
  );
}
