// TableManagerLandmark.tsx

import React, { useState, useEffect } from "react";
import ItemFormLandmark from "./ItemFormLandmark";
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

function formatDate(dateString: string) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

interface Landmark {
  id: string;
  name: string;
  order?: number | null;
  description?: string | null;
  type: string;
  cityId: string;
  latitude?: number | null;
  longitude?: number | null;
  createdAt: string;
  updatedAt: string;
  city?: { name: string };
}

interface CityOption {
  id: string;
  name: string;
}

export default function TableManagerLandmark() {
  const [items, setItems] = useState<Landmark[]>([]);
  const [originalItems, setOriginalItems] = useState<Landmark[]>([]);
  const [editMode, setEditMode] = useState<{
    mode: "add" | "edit";
    item?: any;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [cityOptions, setCityOptions] = useState<CityOption[]>([]);

  useEffect(() => {
    fetch("/api/admin/City")
      .then((res) => res.json())
      .then(setCityOptions)
      .catch(() => setCityOptions([]));
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/Landmark");
      if (!response.ok)
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      const data = await response.json();
      const sortedData = data.sort(
        (a: Landmark, b: Landmark) => (a.order ?? 100) - (b.order ?? 100)
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

  const handleAdd = async (item: any) => {
    try {
      const maxOrder =
        items.length > 0 ? Math.max(...items.map((i) => i.order ?? 0)) : 0;
      const newItem = { ...item, order: maxOrder + 1 };
      const response = await fetch("/api/admin/Landmark", {
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

  const handleEdit = async (item: any) => {
    try {
      const response = await fetch(`/api/admin/Landmark/${item.id}`, {
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

  const handleDelete = async (item: any) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce point d'intérêt ?"))
      return;
    try {
      const response = await fetch(`/api/admin/Landmark/${item.id}`, {
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

  const saveOrder = async () => {
    setSaving(true);
    setError(null);
    try {
      const updates = items.map((item, index) => ({
        id: item.id,
        order: index + 1,
      }));
      const response = await fetch("/api/admin/Landmark/reorder", {
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
    if (
      confirm("Êtes-vous sûr de vouloir annuler les modifications d'ordre ?")
    ) {
      setItems(JSON.parse(JSON.stringify(originalItems)));
      setHasUnsavedChanges(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-orange-50 min-h-screen">
      {/* En-tête */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Points d'intérêt (Landmarks)
            </h2>
            <p className="text-slate-600 mt-1">
              Gérez les points d'intérêt touristiques référencés dans la base de
              données
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
              className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <PlusCircle size={18} />
              Ajouter un point d'intérêt
            </Button>
          </div>
        </div>
      </div>

      {/* Affichage des erreurs */}
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

      {/* Indicateur de changements non sauvegardés */}
      {hasUnsavedChanges && (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-lg mb-6">
          <strong>Attention:</strong> Vous avez des modifications d'ordre non
          sauvegardées.
        </div>
      )}

      {/* Formulaire d'édition */}
      {editMode && (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="border-l-4 border-orange-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-slate-800">
              {editMode.mode === "add"
                ? "Ajouter un nouveau point d'intérêt"
                : "Modifier le point d'intérêt"}
            </h3>
          </div>
          <ItemFormLandmark
            initialData={editMode.mode === "edit" ? editMode.item : {}}
            onSubmit={(item) => {
              if (editMode.mode === "add") handleAdd(item);
              else handleEdit({ ...editMode.item, ...item });
              setEditMode(null);
            }}
            onCancel={() => setEditMode(null)}
            cityOptions={cityOptions}
          />
        </div>
      )}

      {/* Contenu principal */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-orange-600 mb-4" />
          <p className="text-slate-600">Chargement des points d'intérêt…</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="text-6xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Aucun point d'intérêt trouvé
            </h3>
            <p className="text-slate-600">
              Commencez par ajouter votre premier point d'intérêt
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1 ${
                hasUnsavedChanges ? "border-l-4 border-l-amber-400" : ""
              }`}
            >
              {/* En-tête de la card */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 text-lg">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-800">
                      {item.name}
                    </h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded font-mono">
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded font-mono">
                        {item.city?.name || item.cityId}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMove(index, "up")}
                    disabled={index === 0 || saving}
                    title="Monter"
                    className="h-8 w-8 p-0 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <ArrowUp size={14} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMove(index, "down")}
                    disabled={index === items.length - 1 || saving}
                    title="Descendre"
                    className="h-8 w-8 p-0 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <ArrowDown size={14} />
                  </Button>
                </div>
              </div>
              {/* Description */}
              <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                {item.description || "Aucune description disponible"}
              </p>
              {/* Métadonnées */}
              <div className="text-xs text-slate-500 mb-4 space-y-1 bg-slate-50 p-3 rounded-lg">
                <div className="flex justify-between">
                  <span>Ordre:</span>
                  <span className="font-medium text-orange-600">
                    {item.order ?? 100}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-mono bg-white px-1 rounded">
                    {item.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Ville:</span>
                  <span className="font-mono bg-white px-1 rounded">
                    {item.city?.name || item.cityId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Latitude:</span>
                  <span>{item.latitude ?? "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Longitude:</span>
                  <span>{item.longitude ?? "—"}</span>
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
              {/* Actions */}
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
