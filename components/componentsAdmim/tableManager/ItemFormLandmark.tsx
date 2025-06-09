// ItemFormLandmark.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type LandmarkFormValues = {
  name: string;
  order?: number;
  description?: string | null;
  type: string;
  cityId: string;
  latitude?: number | null;
  longitude?: number | null;
};

type CityOption = {
  id: string;
  name: string;
};

type Props = {
  initialData?: Partial<LandmarkFormValues>;
  onSubmit: SubmitHandler<LandmarkFormValues>;
  onCancel: () => void;
  cityOptions: CityOption[];
};

export default function ItemFormLandmark({
  initialData = {},
  onSubmit,
  onCancel,
  cityOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LandmarkFormValues>({
    defaultValues: {
      name: initialData.name ?? "",
      order: initialData.order ?? 100,
      description: initialData.description ?? "",
      type: initialData.type ?? "",
      cityId: initialData.cityId ?? "",
      latitude: initialData.latitude ?? undefined,
      longitude: initialData.longitude ?? undefined,
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire point d'intérêt"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Nom du point d'intérêt <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Le nom est requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoFocus
            placeholder="Ex : Tour Eiffel, Musée du Louvre…"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Ville */}
        <div className="space-y-2">
          <label
            htmlFor="cityId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Ville <span className="text-red-500">*</span>
          </label>
          <select
            id="cityId"
            {...register("cityId", { required: "La ville est requise" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.cityId
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.cityId ? "true" : "false"}
            aria-describedby={errors.cityId ? "cityId-error" : undefined}
          >
            <option value="">Sélectionnez une ville…</option>
            {cityOptions.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.cityId && (
            <p id="cityId-error" className="text-sm text-red-600">
              {errors.cityId.message}
            </p>
          )}
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Type <span className="text-red-500">*</span>
          </label>
          <input
            id="type"
            {...register("type", {
              required: "Le type est requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.type
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.type ? "true" : "false"}
            aria-describedby={errors.type ? "type-error" : undefined}
            placeholder="Ex : Monument, Musée, Parc…"
          />
          {errors.type && (
            <p id="type-error" className="text-sm text-red-600">
              {errors.type.message}
            </p>
          )}
        </div>

        {/* Ordre */}
        <div className="space-y-2">
          <label
            htmlFor="order"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Ordre d’affichage
          </label>
          <input
            id="order"
            type="number"
            min={1}
            {...register("order", { valueAsNumber: true, min: 1 })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
              errors.order
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300"
            }`}
            placeholder="100"
          />
          {errors.order && (
            <p className="text-sm text-red-600">{errors.order.message}</p>
          )}
        </div>

        {/* Latitude */}
        <div className="space-y-2">
          <label
            htmlFor="latitude"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Latitude
          </label>
          <input
            id="latitude"
            type="number"
            step="any"
            {...register("latitude", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 48.8584"
          />
        </div>

        {/* Longitude */}
        <div className="space-y-2">
          <label
            htmlFor="longitude"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Longitude
          </label>
          <input
            id="longitude"
            type="number"
            step="any"
            {...register("longitude", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 2.2945"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 space-y-2">
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
            rows={3}
            placeholder="Décrivez ce point d'intérêt (optionnel)"
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
