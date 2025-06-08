// @/app/api/admin/Country/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/Country
export async function GET() {
  try {
    const countries = await prisma.country.findMany({
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(countries);
  } catch (error) {
    console.error("GET Countries error:", error);
    return NextResponse.json(
      { error: "Échec de la récupération des pays" },
      { status: 500 }
    );
  }
}

// POST /api/admin/Country
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Validation des données
    if (!data.name) {
      return NextResponse.json(
        { error: "Le nom du pays est requis" },
        { status: 400 }
      );
    }
    
    const country = await prisma.country.create({ 
      data: {
        name: data.name.trim(),
        code: data.code?.trim(),
        // Ajoutez d'autres champs selon votre modèle Prisma
      }
    });
    return NextResponse.json(country, { status: 201 });
  } catch (error) {
    console.error("POST Country error:", error);
    return NextResponse.json(
      { error: "Échec de la création du pays" },
      { status: 500 }
    );
  }
}
