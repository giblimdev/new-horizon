//api/admin/HotelHighlight/[id]/routes.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Fonction utilitaire pour extraire l'ID depuis l'URL
function extractIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// GET /api/admin/HotelHighlight/[id]
export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const highlight = await prisma.hotelHighlight.findUnique({ where: { id } });
  if (!highlight) {
    return NextResponse.json(
      { error: "HotelHighlight not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(highlight);
}

// PUT /api/admin/HotelHighlight/[id]
export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.hotelHighlight.update({
      where: { id },
      data: {
        title: data.title,
        order: data.order,
        description: data.description,
        category: data.category,
        icon: data.icon,
        priority: data.priority,
        isPromoted: data.isPromoted,
        hotelId: data.hotelId,
        // Ajoute d'autres champs si besoin
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "HotelHighlight not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/admin/HotelHighlight/[id]
export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.hotelHighlight.delete({ where: { id } });
    return NextResponse.json({ message: "HotelHighlight deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "HotelHighlight not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
