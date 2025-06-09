// app/api/admin/City/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Type pour les paramètres de route Next.js 15
type RouteContext = {
  params: Promise<{ id: string }>;
};

// Interface pour la validation des données de ville
interface UpdateCityData {
  name?: string;
  order?: number;
  countryId?: string;
}

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de ville invalide" },
        { status: 400 }
      );
    }

    const city = await prisma.city.findUnique({
      where: { id },
      include: {
        country: {
          select: {
            id: true,
            name: true,
            code: true,
            language: true,
            currency: true,
          },
        },
        neighborhoods: {
          select: {
            id: true,
            name: true,
            order: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        landmarks: {
          select: {
            id: true,
            name: true,
            type: true,
            description: true,
            latitude: true,
            longitude: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        addresses: {
          select: {
            id: true,
            streetName: true,
            postalCode: true,
          },
        },
        destinations: {
          select: {
            id: true,
            name: true,
            type: true,
            popularityScore: true,
          },
          orderBy: {
            popularityScore: "desc",
          },
        },
        _count: {
          select: {
            neighborhoods: true,
            landmarks: true,
            addresses: true,
            destinations: true,
          },
        },
      },
    });

    if (!city) {
      return NextResponse.json({ error: "Ville non trouvée" }, { status: 404 });
    }

    return NextResponse.json(city);
  } catch (error) {
    console.error("GET City error:", error);

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Format d'ID de ville invalide" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de ville invalide" },
        { status: 400 }
      );
    }

    const body: UpdateCityData = await req.json();

    // Validation des données
    if (body.name && body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Le nom de la ville ne peut pas être vide" },
        { status: 400 }
      );
    }

    if (body.order && body.order < 0) {
      return NextResponse.json(
        { error: "L'ordre doit être un nombre positif" },
        { status: 400 }
      );
    }

    // Vérifier si la ville existe
    const existingCity = await prisma.city.findUnique({
      where: { id },
      include: {
        country: true,
      },
    });

    if (!existingCity) {
      return NextResponse.json({ error: "Ville non trouvée" }, { status: 404 });
    }

    // Vérifier si le pays existe (si countryId est fourni)
    if (body.countryId) {
      const countryExists = await prisma.country.findUnique({
        where: { id: body.countryId },
      });

      if (!countryExists) {
        return NextResponse.json({ error: "Pays non trouvé" }, { status: 400 });
      }
    }

    // Vérifier l'unicité du nom dans le pays
    if (body.name && body.name !== existingCity.name) {
      const targetCountryId = body.countryId || existingCity.countryId;

      const duplicateCity = await prisma.city.findFirst({
        where: {
          name: body.name,
          countryId: targetCountryId,
          id: { not: id },
        },
      });

      if (duplicateCity) {
        return NextResponse.json(
          { error: "Une ville avec ce nom existe déjà dans ce pays" },
          { status: 409 }
        );
      }
    }

    const updated = await prisma.city.update({
      where: { id },
      data: {
        ...(body.name && { name: body.name.trim() }),
        ...(body.order !== undefined && { order: body.order }),
        ...(body.countryId && { countryId: body.countryId }),
        updatedAt: new Date(),
      },
      include: {
        country: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        _count: {
          select: {
            neighborhoods: true,
            landmarks: true,
            addresses: true,
            destinations: true,
          },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT City error:", error);

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Ville non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "Une ville avec ce nom existe déjà dans ce pays" },
          { status: 409 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          { error: "Référence de pays invalide" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de la ville" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de ville invalide" },
        { status: 400 }
      );
    }

    // Vérifier si la ville existe et récupérer les dépendances
    const existingCity = await prisma.city.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            neighborhoods: true,
            landmarks: true,
            addresses: true,
            destinations: true,
            DestinationToCity: true,
          },
        },
      },
    });

    if (!existingCity) {
      return NextResponse.json({ error: "Ville non trouvée" }, { status: 404 });
    }

    // Vérifier les dépendances avant suppression
    const totalDependencies =
      existingCity._count.neighborhoods +
      existingCity._count.landmarks +
      existingCity._count.addresses +
      existingCity._count.destinations +
      existingCity._count.DestinationToCity;

    if (totalDependencies > 0) {
      return NextResponse.json(
        {
          error: "Impossible de supprimer cette ville",
          details:
            "Cette ville contient des éléments liés qui doivent être supprimés en premier",
          dependencies: {
            neighborhoods: existingCity._count.neighborhoods,
            landmarks: existingCity._count.landmarks,
            addresses: existingCity._count.addresses,
            destinations: existingCity._count.destinations,
            destinationLinks: existingCity._count.DestinationToCity,
          },
        },
        { status: 409 }
      );
    }

    await prisma.city.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Ville supprimée avec succès",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE City error:", error);

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Ville non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            error:
              "Impossible de supprimer une ville utilisée par des enregistrements liés",
          },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur lors de la suppression de la ville" },
      { status: 500 }
    );
  }
}
