"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import TableManagerHotelCard from "@/components/componentsAdmim/tableManager/TableManagerHotelCard";
import TableManagerHotelDetails from "@/components/componentsAdmim/tableManager/TableManagerHotelDetails";
import TableManagerHotelGroup from "@/components/componentsAdmim/tableManager/TableManagerHotelGroup";
import TableManagerHotelHighlight from "@/components/componentsAdmim/tableManager/TableManagerHotelHighlight";
import TableManagerLabel from "@/components/componentsAdmim/tableManager/TableManagerLabel";
import TableManagerAddress from "@/components/componentsAdmim/tableManager/TableManagerAdress";

// Types pour les données nécessaires à TableManagerAddress
type City = { id: string; name: string };
type Neighborhood = { id: string; name: string; cityId: string };

export default function InfoHotelAdminPage() {
  const [editingTable, setEditingTable] = useState<null | string>(null);
  const [cityOptions, setCityOptions] = useState<City[]>([]);
  const [neighborhoodOptions, setNeighborhoodOptions] = useState<
    Neighborhood[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Charger les données nécessaires pour TableManagerAddress
  const fetchAddressData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Charger les villes
      const citiesResponse = await fetch("/api/admin/City");
      if (!citiesResponse.ok) {
        throw new Error("Erreur lors du chargement des villes");
      }
      const cities = await citiesResponse.json();
      setCityOptions(Array.isArray(cities) ? cities : []);

      // Charger les quartiers
      const neighborhoodsResponse = await fetch("/api/admin/Neighborhood");
      if (!neighborhoodsResponse.ok) {
        throw new Error("Erreur lors du chargement des quartiers");
      }
      const neighborhoods = await neighborhoodsResponse.json();
      setNeighborhoodOptions(Array.isArray(neighborhoods) ? neighborhoods : []);
    } catch (err) {
      console.error("Erreur lors du chargement des données:", err);
      setError(err instanceof Error ? err.message : "Erreur de chargement");
      // Définir des valeurs par défaut en cas d'erreur
      setCityOptions([]);
      setNeighborhoodOptions([]);
    } finally {
      setLoading(false);
    }
  };

  // Charger les données quand on accède à la table Address
  useEffect(() => {
    if (editingTable === "Address") {
      fetchAddressData();
    }
  }, [editingTable]);

  return (
    <div className="w-screen min-h-screen p-0 m-0">
      <div className="m-5 p-5">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Gestion des informations hôtelières
        </h1>

        {!editingTable ? (
          <div className="space-y-6">
            {/* HOTEL CARD */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="HotelCard">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">HotelCard</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("HotelCard")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>image</li>
                    <li>stars</li>
                    <li>destinationId</li>
                    <li>hotelGroupId</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>destination</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* HOTEL DETAILS */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="HotelDetails">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">HotelDetails</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("HotelDetails")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>description</li>
                    <li>amenities</li>
                    <li>rules</li>
                    <li>hotelCardId</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* HOTEL GROUP */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="HotelGroup">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">HotelGroup</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("HotelGroup")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* HOTEL HIGHLIGHT */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="HotelHighlight">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">HotelHighlight</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("HotelHighlight")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>label</li>
                    <li>hotelCardId</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* LABEL */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="Label">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">Label</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("Label")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* ADDRESS */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="Address">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">Address</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("Address")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>streetNumber</li>
                    <li>streetName</li>
                    <li>addressLine2</li>
                    <li>postalCode</li>
                    <li>cityId</li>
                    <li>neighborhoodId</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>city</li>
                    <li>neighborhood</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setEditingTable(null)}
              className="mb-4 px-3 py-1 rounded bg-gray-300 text-black hover:bg-gray-400 text-sm"
            >
              Retour
            </button>

            {/* Affichage d'erreur si le chargement des données échoue */}
            {error && editingTable === "Address" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                <strong>Erreur:</strong> {error}
                <button
                  onClick={fetchAddressData}
                  className="ml-4 px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                >
                  Réessayer
                </button>
              </div>
            )}

            {/* Indicateur de chargement pour Address */}
            {loading && editingTable === "Address" && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-slate-600">
                  Chargement des données...
                </span>
              </div>
            )}

            {/* Rendu conditionnel des composants */}
            {editingTable === "HotelCard" && <TableManagerHotelCard />}
            {editingTable === "HotelDetails" && <TableManagerHotelDetails />}
            {editingTable === "HotelGroup" && <TableManagerHotelGroup />}
            {editingTable === "HotelHighlight" && (
              <TableManagerHotelHighlight />
            )}
            {editingTable === "Label" && <TableManagerLabel />}
            {editingTable === "Address" && !loading && !error && (
              <TableManagerAddress
                cityOptions={cityOptions}
                neighborhoodOptions={neighborhoodOptions}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
