import React from "react";
import { useForm } from "react-hook-form";

type DestinationFormValues = {
  name: string;
  order?: number;
  description?: string | null;
  type: string;
  popularityScore?: number;
  cityId: string;
  latitude?: number | null;
  longitude?: number | null;
  radius?: number | null;
};

type Props = {
  initialData?: Partial<DestinationFormValues>;
  onSubmit: (data: DestinationFormValues) => void;
  onCancel: () => void;
  cityOptions: { id: string; name: string }[]; // Liste des villes pour le select
};

export default function ItemFormDestination({
  initialData = {},
  onSubmit,
  onCancel,
  cityOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<DestinationFormValues>({
    defaultValues: {
      name: initialData.name ?? "",
      order: initialData.order ?? 100,
      description: initialData.description ?? "",
      type: initialData.type ?? "",
      popularityScore: initialData.popularityScore ?? 0,
      cityId: initialData.cityId ?? "",
      latitude: initialData.latitude ?? undefined,
      longitude: initialData.longitude ?? undefined,
      radius: initialData.radius ?? undefined,
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire destination"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nom de la destination <span className="text-red-500">*</span>
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
            placeholder="Ex : Côte d’Azur, Paris, Alpes, Provence…"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Ville principale <span className="text-red-500">*</span>
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Type <span className="text-red-500">*</span>
          </label>
          <input
            id="type"
            {...register("type", { required: "Le type est requis" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.type
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.type ? "true" : "false"}
            aria-describedby={errors.type ? "type-error" : undefined}
            placeholder="Ex : Région, Ville, Plage, Montagne…"
          />
          {errors.type && (
            <p id="type-error" className="text-sm text-red-600">
              {errors.type.message}
            </p>
          )}
        </div>

        {/* Popularité */}
        <div className="space-y-2">
          <label
            htmlFor="popularityScore"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Score de popularité
          </label>
          <input
            id="popularityScore"
            type="number"
            {...register("popularityScore", { valueAsNumber: true, min: 0 })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="0"
          />
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

        {/* Latitude */}
        <div className="space-y-2">
          <label
            htmlFor="latitude"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Latitude
          </label>
          <input
            id="latitude"
            type="number"
            step="any"
            {...register("latitude", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 43.5528"
          />
        </div>

        {/* Longitude */}
        <div className="space-y-2">
          <label
            htmlFor="longitude"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Longitude
          </label>
          <input
            id="longitude"
            type="number"
            step="any"
            {...register("longitude", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 7.0174"
          />
        </div>

        {/* Rayon */}
        <div className="space-y-2">
          <label
            htmlFor="radius"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Rayon (km)
          </label>
          <input
            id="radius"
            type="number"
            step="any"
            {...register("radius", { valueAsNumber: true, min: 0 })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 20"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              maxLength: { value: 500, message: "Maximum 500 caractères" },
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            rows={3}
            placeholder="Décrivez cette destination (optionnel)"
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
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enregistrement...
            </span>
          ) : (
            "Enregistrer"
          )}
        </button>
      </div>
    </form>
  );
}
