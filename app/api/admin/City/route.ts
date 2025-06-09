// /app/api/admin/City/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/City
export async function GET() {
  try {
    const data = await prisma.city.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des villes" },
      { status: 500 }
    );
  }
}

// POST /api/admin/City
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.city.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de la création de la ville" },
      { status: 400 }
    );
  }
}
