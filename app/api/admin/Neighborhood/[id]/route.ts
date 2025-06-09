//api/admin/Neighborhood/[id]/routes.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Fonction utilitaire pour extraire l'ID depuis l'URL
function extractIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// GET /api/admin/Neighborhood/[id]
export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const neighborhood = await prisma.neighborhood.findUnique({ where: { id } });
  if (!neighborhood) {
    return NextResponse.json(
      { error: "Neighborhood not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(neighborhood);
}

// PUT /api/admin/Neighborhood/[id]
export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.neighborhood.update({
      where: { id },
      data: {
        name: data.name,
        order: data.order,
        cityId: data.cityId,
        // Ajoute d'autres champs si besoin selon le schéma
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Neighborhood not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/admin/Neighborhood/[id]
export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.neighborhood.delete({ where: { id } });
    return NextResponse.json({ message: "Neighborhood deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Neighborhood not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
