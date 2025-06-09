import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface LabelFormValues {
  name: string;
  code: string;
  category: string;
  description?: string;
  icon?: string;
  color?: string;
  priority?: number;
}

const CATEGORIES = ["Général", "Tarif", "Statut", "Autre"];

export default function ItemFormLabel({
  initialData = {},
  onSubmit,
  onCancel,
}: {
  initialData?: Partial<LabelFormValues>;
  onSubmit: (data: LabelFormValues) => void;
  onCancel: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LabelFormValues>({
    defaultValues: {
      name: initialData.name || "",
      code: initialData.code || "",
      category: initialData.category || "",
      description: initialData.description || "",
      icon: initialData.icon || "",
      color: initialData.color || "",
      priority: initialData.priority ?? 0,
    },
  });

  const colorValue = watch("color");

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div>
        <label className="block font-medium mb-1" htmlFor="name">
          Nom <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-3 py-2 border rounded ${
            errors.name ? "border-red-400" : "border-slate-300"
          }`}
          {...register("name", { required: "Le nom est obligatoire" })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="code">
          Code <span className="text-red-500">*</span>
        </label>
        <input
          id="code"
          type="text"
          className={`w-full px-3 py-2 border rounded uppercase tracking-wide font-mono ${
            errors.code ? "border-red-400" : "border-slate-300"
          }`}
          {...register("code", {
            required: "Le code est obligatoire",
            pattern: {
              value: /^[A-Z0-9_]+$/,
              message: "Utilisez des majuscules, chiffres ou _",
            },
            minLength: { value: 2, message: "Au moins 2 caractères" },
          })}
        />
        {errors.code && (
          <p className="text-red-500 text-xs mt-1">{errors.code.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="category">
          Catégorie <span className="text-red-500">*</span>
        </label>
        <select
          id="category"
          className={`w-full px-3 py-2 border rounded ${
            errors.category ? "border-red-400" : "border-slate-300"
          }`}
          {...register("category", {
            required: "La catégorie est obligatoire",
          })}
        >
          <option value="">-- Sélectionner --</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-3 py-2 border border-slate-300 rounded"
          rows={2}
          {...register("description")}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block font-medium mb-1" htmlFor="icon">
            Icône (emoji ou texte)
          </label>
          <input
            id="icon"
            type="text"
            maxLength={2}
            className="w-full px-3 py-2 border border-slate-300 rounded"
            {...register("icon")}
            placeholder="🏷️"
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium mb-1" htmlFor="color">
            Couleur (hex ou nom CSS)
          </label>
          <input
            id="color"
            type="color"
            className="w-12 h-10 p-0 border border-slate-300 rounded"
            {...register("color")}
            style={{ background: colorValue || "#fff" }}
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="priority">
          Priorité
        </label>
        <input
          id="priority"
          type="number"
          className="w-full px-3 py-2 border border-slate-300 rounded"
          {...register("priority", {
            valueAsNumber: true,
            min: { value: 0, message: "Minimum 0" },
            max: { value: 100, message: "Maximum 100" },
          })}
        />
        {errors.priority && (
          <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>
        )}
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="hover:bg-slate-100"
          disabled={isSubmitting}
        >
          Annuler
        </Button>
        <Button
          type="submit"
          className="bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enregistrement..." : "Enregistrer"}
        </Button>
      </div>
    </form>
  );
}
