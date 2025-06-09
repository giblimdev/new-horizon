// /app/api/admin/HotelDetails/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/HotelDetails
export async function GET() {
  try {
    const data = await prisma.hotelDetails.findMany({
      include: {
        HotelCard: { select: { name: true } }, // Affichage enrichi (optionnel)
      },
      orderBy: { createdAt: "desc" }, // Tri côté DB
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des détails d'hôtel" },
      { status: 500 }
    );
  }
}

// POST /api/admin/HotelDetails
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.hotelDetails.create({
      data: {
        idHotelCard: body.idHotelCard,
        description: body.description,
        addressId: body.addressId,
      },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de la création du détail d'hôtel" },
      { status: 400 }
    );
  }
}
