import React from "react";
import { useForm } from "react-hook-form";

type HotelHighlightFormValues = {
  title: string;
  order?: number;
  description?: string | null;
  category: string;
  icon?: string | null;
  priority?: number;
  isPromoted?: boolean;
  hotelId: string;
};

type Props = {
  initialData?: Partial<HotelHighlightFormValues>;
  onSubmit: (data: HotelHighlightFormValues) => void;
  onCancel: () => void;
  hotelOptions: { id: string; name: string }[]; // Liste des hôtels pour le select
};

export default function ItemFormHotelHighlight({
  initialData = {},
  onSubmit,
  onCancel,
  hotelOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<HotelHighlightFormValues>({
    defaultValues: {
      title: initialData.title ?? "",
      order: initialData.order ?? 100,
      description: initialData.description ?? "",
      category: initialData.category ?? "",
      icon: initialData.icon ?? "",
      priority: initialData.priority ?? 0,
      isPromoted: initialData.isPromoted ?? false,
      hotelId: initialData.hotelId ?? "",
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire highlight hôtel"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Titre */}
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Titre <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            {...register("title", {
              required: "Le titre est requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.title ? "true" : "false"}
            aria-describedby={errors.title ? "title-error" : undefined}
            autoFocus
            placeholder="Ex : Vue mer, Spa, Petit-déjeuner inclus…"
          />
          {errors.title && (
            <p id="title-error" className="text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Hôtel */}
        <div className="space-y-2">
          <label
            htmlFor="hotelId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Hôtel <span className="text-red-500">*</span>
          </label>
          <select
            id="hotelId"
            {...register("hotelId", { required: "L'hôtel est requis" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.hotelId
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.hotelId ? "true" : "false"}
            aria-describedby={errors.hotelId ? "hotelId-error" : undefined}
          >
            <option value="">Sélectionnez un hôtel…</option>
            {hotelOptions.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
          {errors.hotelId && (
            <p id="hotelId-error" className="text-sm text-red-600">
              {errors.hotelId.message}
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

        {/* Priorité */}
        <div className="space-y-2">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Priorité
          </label>
          <input
            id="priority"
            type="number"
            {...register("priority", { valueAsNumber: true, min: 0, max: 10 })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="0 (faible) à 10 (fort)"
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

        {/* Promu */}
        <div className="space-y-2 flex items-center">
          <input
            id="isPromoted"
            type="checkbox"
            {...register("isPromoted")}
            className="mr-2"
          />
          <label
            htmlFor="isPromoted"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Mettre en avant ce highlight
          </label>
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
            placeholder="Décrivez ce highlight (optionnel)"
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
