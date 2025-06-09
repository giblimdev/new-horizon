//api/admin/RoomAmenity/[id]/routes.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Fonction utilitaire pour extraire l'ID depuis l'URL
function extractIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// GET /api/admin/RoomAmenity/[id]
export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const roomAmenity = await prisma.roomAmenity.findUnique({ where: { id } });
  if (!roomAmenity) {
    return NextResponse.json(
      { error: "RoomAmenity not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(roomAmenity);
}

// PUT /api/admin/RoomAmenity/[id]
export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.roomAmenity.update({
      where: { id },
      data: {
        name: data.name,
        order: data.order,
        category: data.category,
        icon: data.icon,
        description: data.description,
        // Ajoute d'autres champs si nécessaire
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "RoomAmenity not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/admin/RoomAmenity/[id]
export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.roomAmenity.delete({ where: { id } });
    return NextResponse.json({ message: "RoomAmenity deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "RoomAmenity not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
