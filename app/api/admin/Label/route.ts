// /app/api/admin/Label/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// GET /api/admin/Label
export async function GET() {
  try {
    const data = await prisma.label.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET Label error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des labels." },
      { status: 500 }
    );
  }
}

// POST /api/admin/Label
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await prisma.label.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("POST Label error:", error);
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
      { error: "Erreur lors de la création du label." },
      { status: 500 }
    );
  }
}
