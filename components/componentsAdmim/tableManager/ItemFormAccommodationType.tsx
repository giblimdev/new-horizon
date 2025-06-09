import React from "react";
import { useForm } from "react-hook-form";

type AccommodationTypeForm = {
  name: string;
  code: string;
  category: string;
  description?: string | null;
  order?: number;
};

type Props = {
  initialData?: Partial<AccommodationTypeForm>;
  onSubmit: (data: AccommodationTypeForm) => void;
  onCancel: () => void;
};

export default function ItemFormAccommodationType({
  initialData = {},
  onSubmit,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AccommodationTypeForm>({
    defaultValues: {
      name: initialData.name ?? "",
      code: initialData.code ?? "",
      category: initialData.category ?? "",
      description: initialData.description ?? "",
      order: initialData.order ?? 100,
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire type d’hébergement"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nom <span className="text-red-500">*</span>
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
            placeholder="Ex : Hôtel, Appart’hôtel, Auberge, Villa…"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Code */}
        <div className="space-y-2">
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Code <span className="text-red-500">*</span>
          </label>
          <input
            id="code"
            {...register("code", {
              required: "Le code est requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
              pattern: {
                value: /^[A-Z_]+$/,
                message: "Utilisez des majuscules et underscores seulement",
              },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.code
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.code ? "true" : "false"}
            aria-describedby={errors.code ? "code-error" : undefined}
            placeholder="Ex : HOTEL, VILLA, HOSTEL…"
          />
          {errors.code && (
            <p id="code-error" className="text-sm text-red-600">
              {errors.code.message}
            </p>
          )}
        </div>

        {/* Catégorie */}
        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Catégorie <span className="text-red-500">*</span>
          </label>
          <input
            id="category"
            {...register("category", { required: "La catégorie est requise" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.category
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.category ? "true" : "false"}
            aria-describedby={errors.category ? "category-error" : undefined}
            placeholder="Ex : Hébergement, Résidence, Insolite…"
          />
          {errors.category && (
            <p id="category-error" className="text-sm text-red-600">
              {errors.category.message}
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
            placeholder="Décrivez ce type d’hébergement (optionnel)"
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
