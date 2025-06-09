// /app/api/HotelHighlight/Label/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// GET /api/HotelHighlight/Label
export async function GET() {
  try {
    const data = await prisma.hotelHighlight.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET HotelHighlight error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des HotelHighlight." },
      { status: 500 }
    );
  }
}

// POST /api/HotelHighlight/route.ts
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.hotelHighlight.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("POST HotelHighlight error:", error);
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
      { error: "Erreur lors de la création du HotelHighlight." },
      { status: 500 }
    );
  }
}
