// app/api/admin/Country/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Type pour les paramètres de route Next.js 15
type RouteContext = {
  params: Promise<{ id: string }>;
};

// Interface pour la validation des données de pays
interface CountryData {
  name: string;
  order?: number;
  code: string;
  language?: string;
  currency?: string;
}

// Validation UUID
const isValidUUID = (id: string): boolean => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(id);
};

// Authentification (à implémenter selon vos besoins)
const authenticateRequest = (req: NextRequest): boolean => {
  return true; // Remplacez par votre logique d'authentification
};

// GET /api/admin/Country/[id]
export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    if (!id || !isValidUUID(id)) {
      return NextResponse.json(
        { error: "ID de pays invalide" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const country = await prisma.country.findUnique({
      where: { id },
      include: {
        cities: {
          select: {
            id: true,
            name: true,
            order: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        _count: {
          select: {
            cities: true,
          },
        },
      },
    });

    if (!country) {
      return NextResponse.json({ error: "Pays non trouvé" }, { status: 404 });
    }

    return NextResponse.json(country);
  } catch (error) {
    console.error("GET Country error:", error);
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/Country/[id]
export async function PUT(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    if (!id || !isValidUUID(id)) {
      return NextResponse.json(
        { error: "ID de pays invalide" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body: CountryData = await req.json();

    // Validation des champs requis pour PUT
    if (!body.name || body.name.trim().length === 0) {
      return NextResponse.json({ error: "Le nom est requis" }, { status: 400 });
    }

    if (!body.code || body.code.trim().length === 0) {
      return NextResponse.json(
        { error: "Le code pays est requis" },
        { status: 400 }
      );
    }

    // Vérifier l'unicité du code si modifié
    const existingCountry = await prisma.country.findUnique({
      where: { id },
    });

    if (!existingCountry) {
      return NextResponse.json({ error: "Pays non trouvé" }, { status: 404 });
    }

    if (body.code !== existingCountry.code) {
      const duplicateCode = await prisma.country.findUnique({
        where: { code: body.code },
      });

      if (duplicateCode) {
        return NextResponse.json(
          { error: "Ce code pays existe déjà" },
          { status: 409 }
        );
      }
    }

    const updatedCountry = await prisma.country.update({
      where: { id },
      data: {
        name: body.name.trim(),
        order: body.order,
        code: body.code.trim().toUpperCase(),
        language: body.language?.trim(),
        currency: body.currency?.trim(),
        updatedAt: new Date(),
      },
      include: {
        _count: {
          select: {
            cities: true,
          },
        },
      },
    });

    return NextResponse.json(updatedCountry);
  } catch (error) {
    console.error("PUT Country error:", error);

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ error: "Pays non trouvé" }, { status: 404 });
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "Ce code pays existe déjà" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du pays" },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/Country/[id]
export async function PATCH(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    if (!id || !isValidUUID(id)) {
      return NextResponse.json(
        { error: "ID de pays invalide" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body: Partial<CountryData> = await req.json();

    // Validation qu'au moins un champ est fourni
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "Au moins un champ doit être fourni" },
        { status: 400 }
      );
    }

    // Validation des champs si fournis
    if (body.name !== undefined && body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Le nom ne peut pas être vide" },
        { status: 400 }
      );
    }

    if (body.code !== undefined && body.code.trim().length === 0) {
      return NextResponse.json(
        { error: "Le code pays ne peut pas être vide" },
        { status: 400 }
      );
    }

    const updatedCountry = await prisma.country.update({
      where: { id },
      data: {
        ...(body.name && { name: body.name.trim() }),
        ...(body.order !== undefined && { order: body.order }),
        ...(body.code && { code: body.code.trim().toUpperCase() }),
        ...(body.language && { language: body.language.trim() }),
        ...(body.currency && { currency: body.currency.trim() }),
        updatedAt: new Date(),
      },
      include: {
        _count: {
          select: {
            cities: true,
          },
        },
      },
    });

    return NextResponse.json(updatedCountry);
  } catch (error) {
    console.error("PATCH Country error:", error);

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ error: "Pays non trouvé" }, { status: 404 });
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "Ce code pays existe déjà" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur lors de la mise à jour partielle du pays" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/Country/[id]
export async function DELETE(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    if (!id || !isValidUUID(id)) {
      return NextResponse.json(
        { error: "ID de pays invalide" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    // Vérifier les dépendances avant suppression
    const existingCountry = await prisma.country.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            cities: true,
          },
        },
      },
    });

    if (!existingCountry) {
      return NextResponse.json({ error: "Pays non trouvé" }, { status: 404 });
    }

    if (existingCountry._count.cities > 0) {
      return NextResponse.json(
        {
          error: "Impossible de supprimer ce pays",
          details:
            "Ce pays contient des villes qui doivent être supprimées en premier",
          citiesCount: existingCountry._count.cities,
        },
        { status: 409 }
      );
    }

    await prisma.country.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Pays supprimé avec succès",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Country error:", error);

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ error: "Pays non trouvé" }, { status: 404 });
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          { error: "Impossible de supprimer un pays utilisé par des villes" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur lors de la suppression du pays" },
      { status: 500 }
    );
  }
}
