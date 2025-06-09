//api/admin/HotelAmenity/[id]/routes.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 🔍 Utilitaire pour extraire l'id depuis l'URL
function extractIdFromUrl(req: NextRequest): string | null {
  const segments = req.nextUrl.pathname.split("/");
  const id = segments[segments.length - 1];
  return id || null;
}

// GET /api/admin/HotelAmenity/[id]
export async function GET(req: NextRequest) {
  const id = extractIdFromUrl(req);
  if (!id) {
    return NextResponse.json(
      { error: "ID manquant dans l’URL." },
      { status: 400 }
    );
  }

  try {
    const amenity = await prisma.hotelAmenity.findUnique({ where: { id } });
    if (!amenity) {
      return NextResponse.json(
        { error: "Amenity non trouvé." },
        { status: 404 }
      );
    }
    return NextResponse.json(amenity);
  } catch (error) {
    console.error("Erreur GET HotelAmenity:", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

// PUT /api/admin/HotelAmenity/[id]
export async function PUT(req: NextRequest) {
  const id = extractIdFromUrl(req);
  if (!id) {
    return NextResponse.json(
      { error: "ID manquant dans l’URL." },
      { status: 400 }
    );
  }

  try {
    const data = await req.json();
    const updatedAmenity = await prisma.hotelAmenity.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedAmenity);
  } catch (error) {
    console.error("Erreur PUT HotelAmenity:", error);
    return NextResponse.json(
      { error: "Erreur serveur ou ID invalide." },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/HotelAmenity/[id]
export async function DELETE(req: NextRequest) {
  const id = extractIdFromUrl(req);
  if (!id) {
    return NextResponse.json(
      { error: "ID manquant dans l’URL." },
      { status: 400 }
    );
  }

  try {
    await prisma.hotelAmenity.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur DELETE HotelAmenity:", error);
    return NextResponse.json(
      { error: "Erreur serveur ou ID invalide." },
      { status: 500 }
    );
  }
}

//api/admin/HotelAmenity/[id]/routes.ts
