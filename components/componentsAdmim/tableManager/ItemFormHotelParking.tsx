import React from "react";
import { useForm } from "react-hook-form";

type HotelParkingFormValues = {
  isAvailable?: boolean;
  spaces?: number | null;
  order?: number;
  notes?: string | null;
};

type Props = {
  initialData?: Partial<HotelParkingFormValues>;
  onSubmit: (data: HotelParkingFormValues) => void;
  onCancel: () => void;
};

export default function ItemFormHotelParking({
  initialData = {},
  onSubmit,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<HotelParkingFormValues>({
    defaultValues: {
      isAvailable: initialData.isAvailable ?? true,
      spaces: initialData.spaces ?? undefined,
      order: initialData.order ?? 100,
      notes: initialData.notes ?? "",
    },
    mode: "onChange",
  });

  const isAvailable = watch("isAvailable", true);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire parking hôtel"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Disponibilité */}
        <div className="flex items-center space-x-3 md:col-span-2">
          <input
            id="isAvailable"
            type="checkbox"
            {...register("isAvailable")}
            className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            defaultChecked={initialData.isAvailable ?? true}
          />
          <label
            htmlFor="isAvailable"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Parking disponible
          </label>
        </div>

        {/* Nombre de places */}
        <div className="space-y-2">
          <label
            htmlFor="spaces"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nombre de places
          </label>
          <input
            id="spaces"
            type="number"
            min={0}
            {...register("spaces", {
              valueAsNumber: true,
              min: { value: 0, message: "Minimum 0" },
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 12"
            disabled={!isAvailable}
            aria-invalid={errors.spaces ? "true" : "false"}
            aria-describedby={errors.spaces ? "spaces-error" : undefined}
          />
          {errors.spaces && (
            <p id="spaces-error" className="text-sm text-red-600" role="alert">
              {errors.spaces.message}
            </p>
          )}
        </div>

        {/* Ordre */}
        <div className="space-y-2">
          <label
            htmlFor="order"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Ordre d’affichage
          </label>
          <input
            id="order"
            type="number"
            {...register("order", { valueAsNumber: true, min: 1 })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="100"
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Notes / Informations complémentaires
          </label>
          <textarea
            id="notes"
            {...register("notes", {
              maxLength: { value: 500, message: "Maximum 500 caractères" },
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            rows={3}
            placeholder="Ex : Parking souterrain, accès PMR, réservation obligatoire…"
            aria-invalid={errors.notes ? "true" : "false"}
            aria-describedby={errors.notes ? "notes-error" : undefined}
          />
          {errors.notes && (
            <p id="notes-error" className="text-sm text-red-600" role="alert">
              {errors.notes.message}
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
