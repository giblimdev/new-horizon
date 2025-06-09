import React from "react";
import { useForm } from "react-hook-form";

type CityFormValues = {
  name: string;
  order?: number;
  countryId: string;
};

type Props = {
  initialData?: Partial<CityFormValues>;
  onSubmit: (data: CityFormValues) => void;
  onCancel: () => void;
  countryOptions: { id: string; name: string }[];
};

export default function ItemFormCity({
  initialData = {},
  onSubmit,
  onCancel,
  countryOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CityFormValues>({
    defaultValues: {
      name: initialData.name ?? "",
      order: initialData.order ?? 100,
      countryId: initialData.countryId ?? "",
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire ville"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom de la ville */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Nom de la ville <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Le nom de la ville est requis",
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
            placeholder="Ex : Paris, Berlin, New York…"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Sélecteur de pays */}
        <div className="space-y-2">
          <label
            htmlFor="countryId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Pays <span className="text-red-500">*</span>
          </label>
          <select
            id="countryId"
            {...register("countryId", { required: "Le pays est requis" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.countryId
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.countryId ? "true" : "false"}
            aria-describedby={errors.countryId ? "countryId-error" : undefined}
          >
            <option value="">Sélectionnez un pays…</option>
            {countryOptions.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countryId && (
            <p id="countryId-error" className="text-sm text-red-600">
              {errors.countryId.message}
            </p>
          )}
        </div>

        {/* Ordre d’affichage */}
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
            {...register("order", {
              valueAsNumber: true,
              min: { value: 1, message: "L'ordre doit être ≥ 1" },
            })}
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
