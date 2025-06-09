"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import TableManagerHotelAmenity from "@/components/componentsAdmim/tableManager/TableManagerHotelAmenity";
import TableManagerRoomAmenity from "@/components/componentsAdmim/tableManager/TableManagerRoomAmenity";
import TableManagerAccommodationType from "@/components/componentsAdmim/tableManager/TableManagerAccommodationType";
import TableManagerAccessibilityOption from "@/components/componentsAdmim/tableManager/TableManagerAccessibilityOption";
import TableManagerHotelParking from "@/components/componentsAdmim/tableManager/TableManagerHotelParking";

export default function AmenetyAdminPage() {
  const [editingTable, setEditingTable] = useState<null | string>(null);

  return (
    <div className="w-screen min-h-screen p-0 m-0">
      <div className="m-5 p-5 bg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Gestion des services et équipements
        </h1>
        {!editingTable ? (
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="HotelAmenity">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">HotelAmenity</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("HotelAmenity")}
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
                    <li>category</li>
                    <li>icon</li>
                    <li>description</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>HotelCard</li>
                    <li>HotelCardToHotelAmenity</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="RoomAmenity">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">RoomAmenity</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("RoomAmenity")}
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
                    <li>category</li>
                    <li>icon</li>
                    <li>description</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>HotelDetails</li>
                    <li>HotelDetailsToRoomAmenity</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="AccommodationType">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">AccommodationType</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("AccommodationType")}
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
                    <li>description</li>
                    <li>category</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>HotelCard</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="AccessibilityOption">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">AccessibilityOption</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("AccessibilityOption")}
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
                    <li>description</li>
                    <li>category</li>
                    <li>icon</li>
                    <li>isRequired</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>HotelCardToAccessibilityOption</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="HotelParking">
                <div className="flex items-center justify-between pr-4">
                  <AccordionTrigger>
                    <span className="font-semibold">HotelParking</span>
                  </AccordionTrigger>
                  <button
                    onClick={() => setEditingTable("HotelParking")}
                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>id</li>
                    <li>isAvailable</li>
                    <li>spaces</li>
                    <li>order</li>
                    <li>notes</li>
                    <li>createdAt</li>
                    <li>updatedAt</li>
                    <li>HotelCard</li>
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
            {editingTable === "HotelAmenity" && <TableManagerHotelAmenity />}
            {editingTable === "RoomAmenity" && <TableManagerRoomAmenity />}
            {editingTable === "AccommodationType" && (
              <TableManagerAccommodationType />
            )}
            {editingTable === "AccessibilityOption" && (
              <TableManagerAccessibilityOption />
            )}
            {editingTable === "HotelParking" && <TableManagerHotelParking />}
          </div>
        )}
      </div>
    </div>
  );
}
