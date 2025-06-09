//api/admin/HotelParking/[id]/routes.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Utilitaire pour extraire l'ID de l'URL
function extractIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// GET /api/admin/HotelParking/[id]
export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const parking = await prisma.hotelParking.findUnique({ where: { id } });
  if (!parking) {
    return NextResponse.json(
      { error: "HotelParking not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(parking);
}

// PUT /api/admin/HotelParking/[id]
export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.hotelParking.update({
      where: { id },
      data: {
        isAvailable: data.isAvailable,
        spaces: data.spaces,
        order: data.order,
        notes: data.notes,
        // Ajoute d'autres champs si besoin selon le schéma
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "HotelParking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/admin/HotelParking/[id]
export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.hotelParking.delete({ where: { id } });
    return NextResponse.json({ message: "HotelParking deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "HotelParking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
