// /app/api/admin/Landmark/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/Landmark
export async function GET() {
  try {
    const data = await prisma.landmark.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des points d'intérêt" },
      { status: 500 }
    );
  }
}

// POST /api/admin/Landmark
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.landmark.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de la création du point d'intérêt" },
      { status: 400 }
    );
  }
}
