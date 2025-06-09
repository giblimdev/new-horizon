// /app/api/admin/HotelGroup/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// GET /api/admin/HotelGroup
export async function GET() {
  try {
    const data = await prisma.hotelGroup.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET HotelGroup error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des groupes hôteliers" },
      { status: 500 }
    );
  }
}

// POST /api/admin/HotelGroup
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.hotelGroup.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("POST HotelGroup error:", error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Un champ unique existe déjà (conflit d'unicité)." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Erreur lors de la création du groupe hôtelier" },
      { status: 500 }
    );
  }
}
