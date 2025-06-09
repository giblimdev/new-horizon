import React from "react";
import { useForm } from "react-hook-form";

type CountryFormValues = {
  name: string;
  code: string;
  language?: string | null;
  currency?: string | null;
  order?: number;
};

type Props = {
  initialData?: Partial<CountryFormValues>;
  onSubmit: (data: CountryFormValues) => void;
  onCancel: () => void;
};

export default function ItemFormCountry({
  initialData = {},
  onSubmit,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CountryFormValues>({
    defaultValues: {
      name: initialData.name ?? "",
      code: initialData.code ?? "",
      language: initialData.language ?? "",
      currency: initialData.currency ?? "",
      order: initialData.order ?? 100,
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6"
      aria-label="Formulaire pays"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Nom du pays <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Le nom du pays est requis",
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
            placeholder="Ex : France, Germany, United States…"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Code <span className="text-red-500">*</span>
          </label>
          <input
            id="code"
            {...register("code", {
              required: "Le code est requis",
              pattern: {
                value: /^[A-Z]{2,3}$/,
                message: "Code ISO alpha-2 ou alpha-3 (ex : FR, DE, USA)",
              },
            })}
            className={`block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 ${
              errors.code
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-purple-500"
            }`}
            aria-invalid={errors.code ? "true" : "false"}
            aria-describedby={errors.code ? "code-error" : undefined}
            placeholder="Ex : FR, DE, US"
          />
          {errors.code && (
            <p id="code-error" className="text-sm text-red-600">
              {errors.code.message}
            </p>
          )}
        </div>

        {/* Langue(s) */}
        <div className="space-y-2">
          <label
            htmlFor="language"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Langue(s)
          </label>
          <input
            id="language"
            {...register("language")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : fr, en, de (séparées par virgule)"
          />
        </div>

        {/* Devise(s) */}
        <div className="space-y-2">
          <label
            htmlFor="currency"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Devise(s)
          </label>
          <input
            id="currency"
            {...register("currency")}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="Ex : EUR, USD, CHF"
          />
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
            {...register("order", { valueAsNumber: true, min: 1 })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            placeholder="100"
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
