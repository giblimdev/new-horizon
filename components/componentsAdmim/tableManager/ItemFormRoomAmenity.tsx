import React from "react";
import { useForm } from "react-hook-form";

type RoomAmenityFormValues = {
  name: string;
  order?: number;
  category: string;
  icon?: string | null;
  description?: string | null;
};

type Props = {
  initialData?: Partial<RoomAmenityFormValues>;
  onSubmit: (data: RoomAmenityFormValues) => void;
  onCancel: () => void;
};

export default function ItemFormRoomAmenity({
  initialData = {},
  onSubmit,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<RoomAmenityFormValues>({
    defaultValues: {
      name: initialData.name ?? "",
      order: initialData.order ?? 100,
      category: initialData.category ?? "",
      icon: initialData.icon ?? "",
      description: initialData.description ?? "",
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire équipement de chambre"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nom de l’équipement <span className="text-red-500">*</span>
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
            placeholder="Ex : Climatisation, Télévision, Mini-bar…"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600">
              {errors.name.message}
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
          <select
            id="category"
            {...register("category", { required: "La catégorie est requise" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.category
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.category ? "true" : "false"}
            aria-describedby={errors.category ? "category-error" : undefined}
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="Location">Localisation</option>
            <option value="Amenity">Équipement</option>
            <option value="Service">Service</option>
            <option value="View">Vue</option>
            <option value="Offer">Offre</option>
            <option value="Food">Restauration</option>
          </select>
          {errors.category && (
            <p id="category-error" className="text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Icône */}
        <div className="space-y-2">
          <label
            htmlFor="icon"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Icône (URL)
          </label>
          <input
            id="icon"
            {...register("icon", {
              pattern: {
                value: /^(https?:\/\/).+$/i,
                message: "Doit commencer par http:// ou https://",
              },
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="https://example.com/icon.png"
            type="url"
            aria-invalid={errors.icon ? "true" : "false"}
            aria-describedby={errors.icon ? "icon-error" : undefined}
          />
          {errors.icon && (
            <p id="icon-error" className="text-sm text-red-600">
              {errors.icon.message}
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
            placeholder="Décrivez cet équipement de chambre (optionnel)"
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
