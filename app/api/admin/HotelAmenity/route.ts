// /app/api/admin/HotelAmenity/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/HotelAmenity
export async function GET() {
  try {
    const data = await prisma.hotelAmenity.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des équipements d'hôtel" },
      { status: 500 }
    );
  }
}

// POST /api/admin/HotelAmenity
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.hotelAmenity.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de la création de l'équipement d'hôtel" },
      { status: 400 }
    );
  }
}
