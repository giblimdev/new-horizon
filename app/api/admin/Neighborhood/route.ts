// /app/api/admin/Neighborhood/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/Neighborhood
export async function GET() {
  try {
    const data = await prisma.neighborhood.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des quartiers" },
      { status: 500 }
    );
  }
}

// POST /api/admin/
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.neighborhood.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de la création du quartier" },
      { status: 400 }
    );
  }
}
