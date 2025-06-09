// components/componentsAdmim/tableManager/ItemFormAdress.tsx
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Save, X } from "lucide-react";

// Types alignés sur le schéma Prisma
type Address = {
  id: string;
  streetNumber?: string | null;
  streetName: string;
  addressLine2?: string | null;
  postalCode: string;
  cityId: string;
  neighborhoodId?: string | null;
  order?: number | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  city?: { id: string; name: string };
  neighborhood?: { id: string; name: string } | null;
};

type City = { id: string; name: string };
type Neighborhood = { id: string; name: string; cityId: string };

// Interface pour les props du composant
interface Props {
  initialData?: Partial<Address>;
  cityOptions: City[];
  neighborhoodOptions: Neighborhood[];
  onSubmit: (item: Partial<Address>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

// Interface pour les données du formulaire
interface FormData {
  streetNumber: string;
  streetName: string;
  addressLine2: string;
  postalCode: string;
  cityId: string;
  neighborhoodId: string;
}

export default function ItemFormAddress({
  initialData = {},
  cityOptions,
  neighborhoodOptions,
  onSubmit,
  onCancel,
  isLoading = false,
}: Props) {
  const [filteredNeighborhoods, setFilteredNeighborhoods] = useState<
    Neighborhood[]
  >([]);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      streetNumber: initialData.streetNumber || "",
      streetName: initialData.streetName || "",
      addressLine2: initialData.addressLine2 || "",
      postalCode: initialData.postalCode || "",
      cityId: initialData.cityId || "",
      neighborhoodId: initialData.neighborhoodId || "",
    },
    mode: "onChange",
  });

  // Observer les changements de ville pour filtrer les quartiers
  const selectedCityId = watch("cityId");

  useEffect(() => {
    if (selectedCityId) {
      const filtered = neighborhoodOptions.filter(
        (neighborhood) => neighborhood.cityId === selectedCityId
      );
      setFilteredNeighborhoods(filtered);
    } else {
      setFilteredNeighborhoods([]);
    }
  }, [selectedCityId, neighborhoodOptions]);

  // Réinitialiser le formulaire quand initialData change
  useEffect(() => {
    reset({
      streetNumber: initialData.streetNumber || "",
      streetName: initialData.streetName || "",
      addressLine2: initialData.addressLine2 || "",
      postalCode: initialData.postalCode || "",
      cityId: initialData.cityId || "",
      neighborhoodId: initialData.neighborhoodId || "",
    });
  }, [initialData, reset]);

  const onFormSubmit = (data: FormData) => {
    // Nettoyer les données avant envoi
    const cleanedData: Partial<Address> = {
      streetNumber: data.streetNumber.trim() || null,
      streetName: data.streetName.trim(),
      addressLine2: data.addressLine2.trim() || null,
      postalCode: data.postalCode.trim(),
      cityId: data.cityId,
      neighborhoodId: data.neighborhoodId || null,
    };

    onSubmit(cleanedData);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        {/* Numéro de rue */}
        <div className="space-y-2">
          <Label
            htmlFor="streetNumber"
            className="text-sm font-medium text-slate-700"
          >
            Numéro de rue
          </Label>
          <Controller
            name="streetNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="streetNumber"
                placeholder="123"
                className="w-full"
                disabled={isLoading}
              />
            )}
          />
        </div>

        {/* Nom de rue (obligatoire) */}
        <div className="space-y-2">
          <Label
            htmlFor="streetName"
            className="text-sm font-medium text-slate-700"
          >
            Nom de rue <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="streetName"
            control={control}
            rules={{
              required: "Le nom de rue est obligatoire",
              minLength: {
                value: 2,
                message: "Le nom de rue doit contenir au moins 2 caractères",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="streetName"
                placeholder="Rue de la Paix"
                className={`w-full ${
                  errors.streetName ? "border-red-500" : ""
                }`}
                disabled={isLoading}
              />
            )}
          />
          {errors.streetName && (
            <p className="text-sm text-red-600">{errors.streetName.message}</p>
          )}
        </div>

        {/* Complément d'adresse */}
        <div className="space-y-2">
          <Label
            htmlFor="addressLine2"
            className="text-sm font-medium text-slate-700"
          >
            Complément d'adresse
          </Label>
          <Controller
            name="addressLine2"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="addressLine2"
                placeholder="Appartement, étage, bâtiment..."
                className="w-full"
                disabled={isLoading}
              />
            )}
          />
        </div>

        {/* Code postal (obligatoire) */}
        <div className="space-y-2">
          <Label
            htmlFor="postalCode"
            className="text-sm font-medium text-slate-700"
          >
            Code postal <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="postalCode"
            control={control}
            rules={{
              required: "Le code postal est obligatoire",
              pattern: {
                value: /^[0-9]{5}$/,
                message: "Le code postal doit contenir 5 chiffres",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="postalCode"
                placeholder="75001"
                maxLength={5}
                className={`w-full ${
                  errors.postalCode ? "border-red-500" : ""
                }`}
                disabled={isLoading}
              />
            )}
          />
          {errors.postalCode && (
            <p className="text-sm text-red-600">{errors.postalCode.message}</p>
          )}
        </div>

        {/* Ville (obligatoire) */}
        <div className="space-y-2">
          <Label
            htmlFor="cityId"
            className="text-sm font-medium text-slate-700"
          >
            Ville <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="cityId"
            control={control}
            rules={{
              required: "La ville est obligatoire",
            }}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isLoading}
              >
                <SelectTrigger
                  className={`w-full ${errors.cityId ? "border-red-500" : ""}`}
                >
                  <SelectValue placeholder="Sélectionnez une ville" />
                </SelectTrigger>
                <SelectContent>
                  {cityOptions.map((city) => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.cityId && (
            <p className="text-sm text-red-600">{errors.cityId.message}</p>
          )}
        </div>

        {/* Quartier (optionnel) */}
        <div className="space-y-2">
          <Label
            htmlFor="neighborhoodId"
            className="text-sm font-medium text-slate-700"
          >
            Quartier
          </Label>
          <Controller
            name="neighborhoodId"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isLoading || !selectedCityId}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={
                      selectedCityId
                        ? "Sélectionnez un quartier (optionnel)"
                        : "Sélectionnez d'abord une ville"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Aucun quartier</SelectItem>
                  {filteredNeighborhoods.map((neighborhood) => (
                    <SelectItem key={neighborhood.id} value={neighborhood.id}>
                      {neighborhood.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {selectedCityId && filteredNeighborhoods.length === 0 && (
            <p className="text-sm text-slate-500">
              Aucun quartier disponible pour cette ville
            </p>
          )}
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3 pt-6 border-t border-slate-200">
          <Button
            type="submit"
            disabled={!isValid || isLoading}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin mr-2" />
                Sauvegarde...
              </>
            ) : (
              <>
                <Save size={16} className="mr-2" />
                Sauvegarder
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 hover:bg-slate-50"
          >
            <X size={16} className="mr-2" />
            Annuler
          </Button>
        </div>
      </form>

      {/* Aide contextuelle */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-800 mb-2">💡 Conseils</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Les champs marqués d'un * sont obligatoires</li>
          <li>• Le code postal doit contenir exactement 5 chiffres</li>
          <li>
            • Le quartier se sélectionne automatiquement selon la ville choisie
          </li>
          <li>
            • Le complément d'adresse est optionnel (appartement, étage, etc.)
          </li>
        </ul>
      </div>
    </div>
  );
}
