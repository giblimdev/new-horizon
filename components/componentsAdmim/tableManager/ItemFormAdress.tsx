import React from "react";
import { useForm } from "react-hook-form";

type AddressFormValues = {
  streetNumber?: string | null;
  streetName: string;
  addressLine2?: string | null;
  postalCode: string;
  cityId: string;
  neighborhoodId?: string | null;
};

type City = { id: string; name: string };
type Neighborhood = { id: string; name: string; cityId: string };

type Props = {
  initialData?: Partial<AddressFormValues>;
  cityOptions: City[];
  neighborhoodOptions: Neighborhood[];
  onSubmit: (values: AddressFormValues) => void;
  onCancel: () => void;
};

export default function ItemFormAddress({
  initialData = {},
  cityOptions,
  neighborhoodOptions,
  onSubmit,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AddressFormValues>({
    defaultValues: {
      streetNumber: initialData.streetNumber ?? "",
      streetName: initialData.streetName ?? "",
      addressLine2: initialData.addressLine2 ?? "",
      postalCode: initialData.postalCode ?? "",
      cityId: initialData.cityId ?? "",
      neighborhoodId: initialData.neighborhoodId ?? "",
    },
    mode: "onChange",
  });

  const selectedCity = watch("cityId");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire adresse"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Numéro de rue */}
        <div className="space-y-2">
          <label
            htmlFor="streetNumber"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Numéro de rue
          </label>
          <input
            id="streetNumber"
            {...register("streetNumber")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : 12"
            type="text"
          />
        </div>

        {/* Rue */}
        <div className="space-y-2">
          <label
            htmlFor="streetName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Rue <span className="text-red-500">*</span>
          </label>
          <input
            id="streetName"
            {...register("streetName", {
              required: "Le nom de la rue est requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.streetName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.streetName ? "true" : "false"}
            aria-describedby={
              errors.streetName ? "streetName-error" : undefined
            }
            placeholder="Ex : Avenue des Champs-Élysées"
            autoFocus
          />
          {errors.streetName && (
            <p id="streetName-error" className="text-sm text-red-600">
              {errors.streetName.message}
            </p>
          )}
        </div>

        {/* Complément */}
        <div className="space-y-2">
          <label
            htmlFor="addressLine2"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Complément d’adresse
          </label>
          <input
            id="addressLine2"
            {...register("addressLine2")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Bâtiment, étage, etc. (optionnel)"
            type="text"
          />
        </div>

        {/* Code postal */}
        <div className="space-y-2">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Code postal <span className="text-red-500">*</span>
          </label>
          <input
            id="postalCode"
            {...register("postalCode", {
              required: "Le code postal est requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.postalCode
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.postalCode ? "true" : "false"}
            aria-describedby={
              errors.postalCode ? "postalCode-error" : undefined
            }
            placeholder="Ex : 75008"
            type="text"
          />
          {errors.postalCode && (
            <p id="postalCode-error" className="text-sm text-red-600">
              {errors.postalCode.message}
            </p>
          )}
        </div>

        {/* Ville */}
        <div className="space-y-2">
          <label
            htmlFor="cityId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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

        {/* Quartier */}
        <div className="space-y-2">
          <label
            htmlFor="neighborhoodId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Quartier
          </label>
          <select
            id="neighborhoodId"
            {...register("neighborhoodId")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <option value="">Sélectionnez un quartier…</option>
            {neighborhoodOptions
              .filter((n) => !selectedCity || n.cityId === selectedCity)
              .map((neighborhood) => (
                <option key={neighborhood.id} value={neighborhood.id}>
                  {neighborhood.name}
                </option>
              ))}
          </select>
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
