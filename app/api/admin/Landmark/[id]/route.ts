//api/admin/landmark/[id]/routes.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Fonction utilitaire pour extraire l'ID de l'URL
function extractIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// GET /api/admin/landmark/[id]
export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const landmark = await prisma.landmark.findUnique({ where: { id } });
  if (!landmark) {
    return NextResponse.json({ error: "Landmark not found" }, { status: 404 });
  }
  return NextResponse.json(landmark);
}

// PUT /api/admin/landmark/[id]
export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.landmark.update({
      where: { id },
      data: {
        name: data.name,
        order: data.order,
        description: data.description,
        type: data.type,
        cityId: data.cityId,
        latitude: data.latitude,
        longitude: data.longitude,
        // Ajoute d'autres champs si besoin selon le schéma
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Landmark not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/admin/landmark/[id]
export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.landmark.delete({ where: { id } });
    return NextResponse.json({ message: "Landmark deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Landmark not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
