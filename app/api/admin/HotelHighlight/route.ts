// /app/api/HotelHighlight/Label/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function GET() {
  try {
    const data = await prisma.hotelHighlight.findMany();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET Label error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur lors de la récupération des HotelHighlight.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.hotelHighlight.create({ data: body });
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    console.error("POST HotelHighlight error:", error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Un champ unique existe déjà (conflit d'unicité).",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Erreur serveur lors de la création." },
      { status: 500 }
    );
  }
}
