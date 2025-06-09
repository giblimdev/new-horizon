// app/api/admin/Destination/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Type pour les paramètres de route Next.js 15
type RouteContext = {
  params: Promise<{ id: string }>;
};

// Interface pour la validation des données de destination
interface UpdateDestinationData {
  name?: string;
  order?: number;
  description?: string;
  type?: string;
  popularityScore?: number;
  cityId?: string;
  latitude?: number;
  longitude?: number;
  radius?: number;
}

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de destination invalide" },
        { status: 400 }
      );
    }

    const destination = await prisma.destination.findUnique({
      where: { id },
      include: {
        City: {
          select: {
            id: true,
            name: true,
            country: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
        HotelCard: {
          select: {
            id: true,
            name: true,
            starRating: true,
            overallRating: true,
            basePricePerNight: true,
            currency: true,
            accommodationType: {
              select: {
                name: true,
                category: true,
              },
            },
          },
          orderBy: {
            overallRating: "desc",
          },
        },
        DestinationToCity: {
          include: {
            city: {
              select: {
                id: true,
                name: true,
                country: {
                  select: {
                    name: true,
                    code: true,
                  },
                },
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        },
        _count: {
          select: {
            HotelCard: true,
            DestinationToCity: true,
          },
        },
      },
    });

    if (!destination) {
      return NextResponse.json(
        { error: "Destination non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(destination);
  } catch (error) {
    console.error("GET Destination error:", error);

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Format d'ID de destination invalide" },
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
        { error: "ID de destination invalide" },
        { status: 400 }
      );
    }

    const body: UpdateDestinationData = await req.json();

    // Validation des données
    if (body.name && body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Le nom de la destination ne peut pas être vide" },
        { status: 400 }
      );
    }

    if (
      body.popularityScore !== undefined &&
      (body.popularityScore < 0 || body.popularityScore > 100)
    ) {
      return NextResponse.json(
        { error: "Le score de popularité doit être entre 0 et 100" },
        { status: 400 }
      );
    }

    if (
      body.latitude !== undefined &&
      (body.latitude < -90 || body.latitude > 90)
    ) {
      return NextResponse.json(
        { error: "La latitude doit être entre -90 et 90" },
        { status: 400 }
      );
    }

    if (
      body.longitude !== undefined &&
      (body.longitude < -180 || body.longitude > 180)
    ) {
      return NextResponse.json(
        { error: "La longitude doit être entre -180 et 180" },
        { status: 400 }
      );
    }

    if (body.radius !== undefined && body.radius < 0) {
      return NextResponse.json(
        { error: "Le rayon doit être positif" },
        { status: 400 }
      );
    }

    // Vérifier si la destination existe avant la mise à jour
    const existingDestination = await prisma.destination.findUnique({
      where: { id },
    });

    if (!existingDestination) {
      return NextResponse.json(
        { error: "Destination non trouvée" },
        { status: 404 }
      );
    }

    // Vérifier si la ville existe (si cityId est fourni)
    if (body.cityId) {
      const cityExists = await prisma.city.findUnique({
        where: { id: body.cityId },
      });

      if (!cityExists) {
        return NextResponse.json(
          { error: "Ville non trouvée" },
          { status: 400 }
        );
      }
    }

    const updated = await prisma.destination.update({
      where: { id },
      data: {
        // Filtrer les valeurs undefined
        ...Object.fromEntries(
          Object.entries(body).filter(([_, value]) => value !== undefined)
        ),
        updatedAt: new Date(),
      },
      include: {
        City: {
          select: {
            id: true,
            name: true,
            country: {
              select: {
                name: true,
                code: true,
              },
            },
          },
        },
        _count: {
          select: {
            HotelCard: true,
            DestinationToCity: true,
          },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT Destination error:", error);

    // Gestion des erreurs Prisma spécifiques
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Destination non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "Une destination avec ce nom existe déjà dans cette ville" },
          { status: 409 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          { error: "Référence de ville invalide" },
          { status: 400 }
        );
      }
    }

    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "Une destination avec ce nom existe déjà" },
          { status: 409 }
        );
      }

      if (error.message.includes("Invalid")) {
        return NextResponse.json(
          { error: "Format de données invalide" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur serveur interne" },
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
        { error: "ID de destination invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'enregistrement existe avant suppression
    const existingDestination = await prisma.destination.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            HotelCard: true,
            DestinationToCity: true,
          },
        },
      },
    });

    if (!existingDestination) {
      return NextResponse.json(
        { error: "Destination non trouvée" },
        { status: 404 }
      );
    }

    // Vérifier les enregistrements liés avant suppression
    const totalRelatedRecords =
      existingDestination._count.HotelCard +
      existingDestination._count.DestinationToCity;

    if (totalRelatedRecords > 0) {
      return NextResponse.json(
        {
          error: "Impossible de supprimer une destination utilisée",
          details: {
            hotels: existingDestination._count.HotelCard,
            cityLinks: existingDestination._count.DestinationToCity,
          },
        },
        { status: 409 }
      );
    }

    await prisma.destination.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Destination supprimée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Destination error:", error);

    // Gestion des erreurs de contrainte de clé étrangère
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Destination non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            error:
              "Impossible de supprimer une destination utilisée par des enregistrements liés",
          },
          { status: 409 }
        );
      }
    }

    if (
      error instanceof Error &&
      error.message.includes("Foreign key constraint")
    ) {
      return NextResponse.json(
        {
          error:
            "Impossible de supprimer une destination utilisée par des hôtels",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}
