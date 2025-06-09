"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import TableManagerCountry from "@/components/componentsAdmim/tableManager/TableManagerCountry";
import TableManagerCity from "@/components/componentsAdmim/tableManager/TableManagerCity";
import TableManagerNeighborhood from "@/components/componentsAdmim/tableManager/TableManagerNeighborhood";
import TableManagerLandmark from "@/components/componentsAdmim/tableManager/TableManagerLandmark";
import TableManagerDestination from "@/components/componentsAdmim/tableManager/TableManagerDestination";

export default function InfoTourismeAdminPage() {
  const [editingTable, setEditingTable] = useState<null | string>(null);

  return (
    <div className="w-screen min-h-screen p-0 m-0">
      <div className="m-5 p-5 bg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Gestion des informations touristiques
        </h1>
        {!editingTable ? (
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="Country">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">Country</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("Country")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>order</li>
                    <li>code</li>
                    <li>language</li>
                    <li>currency</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>cities</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="City">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">City</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("City")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>order</li>
                    <li>countryId</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>country</li>
                    <li>neighborhoods</li>
                    <li>landmarks</li>
                    <li>addresses</li>
                    <li>destinations</li>
                    <li>DestinationToCity</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="Neighborhood">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">Neighborhood</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("Neighborhood")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>order</li>
                    <li>cityId</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>city</li>
                    <li>addresses</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="Landmark">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">Landmark</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("Landmark")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>order</li>
                    <li>description</li>
                    <li>type</li>
                    <li>cityId</li>
                    <li>latitude</li>
                    <li>longitude</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>city</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="Destination">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">Destination</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("Destination")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>name</li>
                    <li>order</li>
                    <li>description</li>
                    <li>type</li>
                    <li>popularityScore</li>
                    <li>cityId</li>
                    <li>latitude</li>
                    <li>longitude</li>
                    <li>radius</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>HotelCard</li>
                    <li>City</li>
                    <li>DestinationToCity</li>
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
            {editingTable === "Country" && <TableManagerCountry />}
            {editingTable === "City" && <TableManagerCity />}
            {editingTable === "Neighborhood" && <TableManagerNeighborhood />}
            {editingTable === "Landmark" && <TableManagerLandmark />}
            {editingTable === "Destination" && <TableManagerDestination />}
          </div>
        )}
      </div>
    </div>
  );
}
