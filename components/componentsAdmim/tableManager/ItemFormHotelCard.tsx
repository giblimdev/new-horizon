import React from "react";
import { useForm } from "react-hook-form";

type HotelCardFormValues = {
  name: string;
  idCity: string;
  shortDescription?: string | null;
  starRating: number;
  overallRating?: number | null;
  ratingAdjective?: string | null;
  reviewCount?: number;
  basePricePerNight: number;
  regularPrice?: number | null;
  currency?: string;
  isPartner?: boolean;
  promoMessage?: string | null;
  imageMessage?: string | null;
  cancellationPolicy?: string | null;
  accommodationTypeId?: string | null;
  destinationId?: string | null;
  hotelGroupId?: string | null;
  latitude?: number | null;
  longitude?: number | null;
};

type SelectOption = { id: string; name: string };

type Props = {
  initialData?: Partial<HotelCardFormValues>;
  onSubmit: (data: HotelCardFormValues) => void;
  onCancel: () => void;
  cityOptions: SelectOption[];
  accommodationTypeOptions: SelectOption[];
  destinationOptions: SelectOption[];
  hotelGroupOptions: SelectOption[];
};

export default function ItemFormHotelCard({
  initialData = {},
  onSubmit,
  onCancel,
  cityOptions,
  accommodationTypeOptions,
  destinationOptions,
  hotelGroupOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<HotelCardFormValues>({
    defaultValues: {
      name: initialData.name ?? "",
      idCity: initialData.idCity ?? "",
      shortDescription: initialData.shortDescription ?? "",
      starRating: initialData.starRating ?? 3,
      overallRating: initialData.overallRating ?? undefined,
      ratingAdjective: initialData.ratingAdjective ?? "",
      reviewCount: initialData.reviewCount ?? 0,
      basePricePerNight: initialData.basePricePerNight ?? 100,
      regularPrice: initialData.regularPrice ?? undefined,
      currency: initialData.currency ?? "EUR",
      isPartner: initialData.isPartner ?? false,
      promoMessage: initialData.promoMessage ?? "",
      imageMessage: initialData.imageMessage ?? "",
      cancellationPolicy: initialData.cancellationPolicy ?? "",
      accommodationTypeId: initialData.accommodationTypeId ?? "",
      destinationId: initialData.destinationId ?? "",
      hotelGroupId: initialData.hotelGroupId ?? "",
      latitude: initialData.latitude ?? undefined,
      longitude: initialData.longitude ?? undefined,
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire fiche hôtel"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nom de l'hôtel <span className="text-red-500">*</span>
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
            autoFocus
            placeholder="Ex : Hôtel du Parc"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
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
            htmlFor="idCity"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Ville <span className="text-red-500">*</span>
          </label>
          <select
            id="idCity"
            {...register("idCity", { required: "La ville est requise" })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.idCity
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.idCity ? "true" : "false"}
            aria-describedby={errors.idCity ? "idCity-error" : undefined}
          >
            <option value="">Sélectionnez une ville…</option>
            {cityOptions.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.idCity && (
            <p id="idCity-error" className="text-sm text-red-600">
              {errors.idCity.message}
            </p>
          )}
        </div>

        {/* Type d'hébergement */}
        <div className="space-y-2">
          <label
            htmlFor="accommodationTypeId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Type d’hébergement
          </label>
          <select
            id="accommodationTypeId"
            {...register("accommodationTypeId")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <option value="">Sélectionnez un type…</option>
            {accommodationTypeOptions.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Destination */}
        <div className="space-y-2">
          <label
            htmlFor="destinationId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Destination
          </label>
          <select
            id="destinationId"
            {...register("destinationId")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <option value="">Sélectionnez une destination…</option>
            {destinationOptions.map((dest) => (
              <option key={dest.id} value={dest.id}>
                {dest.name}
              </option>
            ))}
          </select>
        </div>

        {/* Groupe hôtelier */}
        <div className="space-y-2">
          <label
            htmlFor="hotelGroupId"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Groupe hôtelier
          </label>
          <select
            id="hotelGroupId"
            {...register("hotelGroupId")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <option value="">Sélectionnez un groupe…</option>
            {hotelGroupOptions.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>

        {/* Description courte */}
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description courte
          </label>
          <textarea
            id="shortDescription"
            {...register("shortDescription", { maxLength: 500 })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            rows={2}
            placeholder="Résumé en une phrase (optionnel)"
          />
        </div>

        {/* Nombre d'étoiles */}
        <div className="space-y-2">
          <label
            htmlFor="starRating"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nombre d’étoiles <span className="text-red-500">*</span>
          </label>
          <input
            id="starRating"
            type="number"
            min={1}
            max={5}
            {...register("starRating", {
              required: "Le nombre d’étoiles est requis",
              valueAsNumber: true,
              min: { value: 1, message: "Minimum 1" },
              max: { value: 5, message: "Maximum 5" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.starRating
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            placeholder="3"
            aria-invalid={errors.starRating ? "true" : "false"}
            aria-describedby={
              errors.starRating ? "starRating-error" : undefined
            }
          />
          {errors.starRating && (
            <p id="starRating-error" className="text-sm text-red-600">
              {errors.starRating.message}
            </p>
          )}
        </div>

        {/* Note globale */}
        <div className="space-y-2">
          <label
            htmlFor="overallRating"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Note globale
          </label>
          <input
            id="overallRating"
            type="number"
            min={0}
            max={10}
            step={0.1}
            {...register("overallRating", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="8.7"
          />
        </div>

        {/* Adjectif de note */}
        <div className="space-y-2">
          <label
            htmlFor="ratingAdjective"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Adjectif de note
          </label>
          <input
            id="ratingAdjective"
            {...register("ratingAdjective")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : Excellent, Très bien…"
          />
        </div>

        {/* Nombre d’avis */}
        <div className="space-y-2">
          <label
            htmlFor="reviewCount"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nombre d’avis
          </label>
          <input
            id="reviewCount"
            type="number"
            min={0}
            {...register("reviewCount", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="0"
          />
        </div>

        {/* Prix de base */}
        <div className="space-y-2">
          <label
            htmlFor="basePricePerNight"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Prix de base / nuit <span className="text-red-500">*</span>
          </label>
          <input
            id="basePricePerNight"
            type="number"
            min={0}
            step={1}
            {...register("basePricePerNight", {
              required: "Le prix de base est requis",
              valueAsNumber: true,
              min: { value: 0, message: "Minimum 0" },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.basePricePerNight
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            placeholder="100"
            aria-invalid={errors.basePricePerNight ? "true" : "false"}
            aria-describedby={
              errors.basePricePerNight ? "basePricePerNight-error" : undefined
            }
          />
          {errors.basePricePerNight && (
            <p id="basePricePerNight-error" className="text-sm text-red-600">
              {errors.basePricePerNight.message}
            </p>
          )}
        </div>

        {/* Prix régulier */}
        <div className="space-y-2">
          <label
            htmlFor="regularPrice"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Prix régulier
          </label>
          <input
            id="regularPrice"
            type="number"
            min={0}
            step={1}
            {...register("regularPrice", { valueAsNumber: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="120"
          />
        </div>

        {/* Devise */}
        <div className="space-y-2">
          <label
            htmlFor="currency"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Devise
          </label>
          <input
            id="currency"
            {...register("currency")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="EUR"
          />
        </div>

        {/* Partenaire */}
        <div className="flex items-center space-x-3">
          <input
            id="isPartner"
            type="checkbox"
            {...register("isPartner")}
            className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            defaultChecked={initialData.isPartner ?? false}
          />
          <label
            htmlFor="isPartner"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Hôtel partenaire
          </label>
        </div>

        {/* Message promo */}
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="promoMessage"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message promo
          </label>
          <input
            id="promoMessage"
            {...register("promoMessage")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : -10% jusqu’au 30/06"
          />
        </div>

        {/* Message image */}
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="imageMessage"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message image
          </label>
          <input
            id="imageMessage"
            {...register("imageMessage")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Texte sur l’image (optionnel)"
          />
        </div>

        {/* Politique d’annulation */}
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="cancellationPolicy"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Politique d’annulation
          </label>
          <textarea
            id="cancellationPolicy"
            {...register("cancellationPolicy")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            rows={2}
            placeholder="Politique d’annulation (optionnel)"
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
            placeholder="Ex : 48.8584"
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
            placeholder="Ex : 2.2945"
          />
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
