import React, { useState, useEffect } from "react";
import ItemFormAddress from "@/components/componentsAdmim/tableManager/ItemFormAdress";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  ArrowUp,
  ArrowDown,
  Pencil,
  Trash2,
  Loader2,
  Save,
  RotateCcw,
} from "lucide-react";

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

function formatDate(date: string | Date) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

type TableManagerAddressProps = {
  cityOptions: City[];
  neighborhoodOptions: Neighborhood[];
};

export default function TableManagerAddress({
  cityOptions,
  neighborhoodOptions,
}: TableManagerAddressProps) {
  const [items, setItems] = useState<Address[]>([]);
  const [originalItems, setOriginalItems] = useState<Address[]>([]);
  const [editMode, setEditMode] = useState<{
    mode: "add" | "edit";
    item?: Address;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Récupération des adresses
  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/Address");
      if (!response.ok)
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      const data = await response.json();
      // Tri par order si disponible
      const sortedData = data.sort(
        (a: Address, b: Address) => (a.order ?? 100) - (b.order ?? 100)
      );
      setItems(sortedData);
      setOriginalItems(JSON.parse(JSON.stringify(sortedData)));
      setHasUnsavedChanges(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = async (item: Partial<Address>) => {
    try {
      const maxOrder =
        items.length > 0 ? Math.max(...items.map((i) => i.order ?? 0)) : 0;
      const newItem = { ...item, order: maxOrder + 1 };
      const response = await fetch("/api/admin/Address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) throw new Error("Erreur lors de l'ajout");
      await fetchItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'ajout");
    }
  };

  const handleEdit = async (item: Address) => {
    try {
      const response = await fetch(`/api/admin/Address/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (!response.ok) throw new Error("Erreur lors de la modification");
      await fetchItems();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erreur lors de la modification"
      );
    }
  };

  const handleDelete = async (item: Address) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette adresse ?")) return;
    try {
      const response = await fetch(`/api/admin/Address/${item.id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erreur lors de la suppression");
      await fetchItems();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erreur lors de la suppression"
      );
    }
  };

  // Réordonner les adresses
  const handleMove = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === items.length - 1) return;
    const newItems = [...items];
    const swapIdx = direction === "up" ? index - 1 : index + 1;
    [newItems[index], newItems[swapIdx]] = [newItems[swapIdx], newItems[index]];
    newItems.forEach((item, idx) => {
      item.order = idx + 1;
    });
    setItems(newItems);
    setHasUnsavedChanges(true);
  };

  // Sauvegarde de l'ordre
  const saveOrder = async () => {
    setSaving(true);
    setError(null);
    try {
      const updates = items.map((item, index) => ({
        id: item.id,
        order: index + 1,
      }));
      const response = await fetch("/api/admin/Address/reorder", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates }),
      });
      if (!response.ok)
        throw new Error("Erreur lors de la sauvegarde de l'ordre");
      await fetchItems();
      setHasUnsavedChanges(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erreur lors de la sauvegarde"
      );
    } finally {
      setSaving(false);
    }
  };

  const resetOrder = () => {
    if (confirm("Annuler les modifications d'ordre ?")) {
      setItems(JSON.parse(JSON.stringify(originalItems)));
      setHasUnsavedChanges(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Adresses
            </h2>
            <p className="text-slate-600 mt-1">
              Gérez les adresses de votre base de données
            </p>
          </div>
          <div className="flex gap-2">
            {hasUnsavedChanges && (
              <>
                <Button
                  onClick={resetOrder}
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                >
                  <RotateCcw size={16} />
                  Annuler
                </Button>
                <Button
                  onClick={saveOrder}
                  disabled={saving}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                >
                  {saving ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Save size={16} />
                  )}
                  Sauvegarder l'ordre
                </Button>
              </>
            )}
            <Button
              onClick={() => setEditMode({ mode: "add" })}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <PlusCircle size={18} />
              Ajouter une adresse
            </Button>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center justify-between">
          <div>
            <strong>Erreur:</strong> {error}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setError(null)}
            className="text-red-600 hover:bg-red-100"
          >
            ✕
          </Button>
        </div>
      )}

      {hasUnsavedChanges && (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-lg mb-6">
          <strong>Attention:</strong> Vous avez des modifications d'ordre non
          sauvegardées.
        </div>
      )}

      {editMode && (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-slate-800">
              {editMode.mode === "add"
                ? "Ajouter une nouvelle adresse"
                : "Modifier l'adresse"}
            </h3>
          </div>
          <ItemFormAddress
            initialData={editMode.mode === "edit" ? editMode.item : {}}
            cityOptions={cityOptions}
            neighborhoodOptions={neighborhoodOptions}
            onSubmit={(item: Partial<Address>) => {
              if (editMode.mode === "add") handleAdd(item);
              else if (editMode.item && editMode.item.id)
                handleEdit({ ...editMode.item, ...item, id: editMode.item.id });
              setEditMode(null);
            }}
            onCancel={() => setEditMode(null)}
          />
        </div>
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-purple-600 mb-4" />
          <p className="text-slate-600">Chargement des adresses...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Aucune adresse trouvée
            </h3>
            <p className="text-slate-600">
              Commencez par ajouter votre première adresse
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1 ${
                hasUnsavedChanges ? "border-l-4 border-l-amber-400" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    {item.streetNumber ? `${item.streetNumber} ` : ""}
                    {item.streetName}
                  </h3>
                  <div className="text-sm text-slate-600">
                    {item.addressLine2 && (
                      <span>
                        {item.addressLine2}
                        <br />
                      </span>
                    )}
                    {item.postalCode} {item.city?.name || ""}
                    {item.neighborhood?.name
                      ? `, ${item.neighborhood.name}`
                      : ""}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMove(index, "up")}
                    disabled={index === 0 || saving}
                    title="Monter"
                    className="h-8 w-8 p-0 hover:bg-purple-50 hover:text-purple-600"
                  >
                    <ArrowUp size={14} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMove(index, "down")}
                    disabled={index === items.length - 1 || saving}
                    title="Descendre"
                    className="h-8 w-8 p-0 hover:bg-purple-50 hover:text-purple-600"
                  >
                    <ArrowDown size={14} />
                  </Button>
                </div>
              </div>
              <div className="text-xs text-slate-500 mb-4 space-y-1 bg-slate-50 p-3 rounded-lg">
                <div className="flex justify-between">
                  <span>Ordre:</span>
                  <span className="font-medium text-purple-600">
                    {item.order}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Créé:</span>
                  <span>{formatDate(item.createdAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Modifié:</span>
                  <span>{formatDate(item.updatedAt)}</span>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-slate-100">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditMode({ mode: "edit", item })}
                  title="Éditer"
                  className="flex-1 hover:bg-green-50 hover:text-green-600 hover:border-green-200"
                  disabled={saving}
                >
                  <Pencil size={14} className="mr-1" />
                  Éditer
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(item)}
                  title="Supprimer"
                  className="flex-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                  disabled={saving}
                >
                  <Trash2 size={14} className="mr-1" />
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
