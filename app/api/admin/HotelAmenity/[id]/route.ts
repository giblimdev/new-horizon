// app/api/admin/HotelAmenity/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Type pour les paramètres de route Next.js 15
type RouteContext = {
  params: Promise<{ id: string }>;
};

// Interface pour la validation des données d'équipement hôtelier
interface UpdateHotelAmenityData {
  name?: string;
  order?: number;
  category?: string;
  icon?: string;
  description?: string;
}

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID d'équipement hôtelier invalide" },
        { status: 400 }
      );
    }

    const hotelAmenity = await prisma.hotelAmenity.findUnique({
      where: { id },
      include: {
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
        HotelCardToHotelAmenity: {
          include: {
            hotelCard: {
              select: {
                id: true,
                name: true,
                starRating: true,
                overallRating: true,
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
            HotelCardToHotelAmenity: true,
          },
        },
      },
    });

    if (!hotelAmenity) {
      return NextResponse.json(
        { error: "Équipement hôtelier non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(hotelAmenity);
  } catch (error) {
    console.error("GET HotelAmenity error:", error);

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Format d'ID d'équipement hôtelier invalide" },
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
        { error: "ID d'équipement hôtelier invalide" },
        { status: 400 }
      );
    }

    const body: UpdateHotelAmenityData = await req.json();

    // Validation des données
    if (body.name && body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Le nom de l'équipement ne peut pas être vide" },
        { status: 400 }
      );
    }

    if (body.order !== undefined && body.order < 0) {
      return NextResponse.json(
        { error: "L'ordre doit être un nombre positif" },
        { status: 400 }
      );
    }

    // Vérifier si l'équipement existe avant la mise à jour
    const existingAmenity = await prisma.hotelAmenity.findUnique({
      where: { id },
    });

    if (!existingAmenity) {
      return NextResponse.json(
        { error: "Équipement hôtelier non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier l'unicité du nom si modifié
    if (body.name && body.name !== existingAmenity.name) {
      const duplicateAmenity = await prisma.hotelAmenity.findFirst({
        where: {
          name: body.name,
          id: { not: id },
        },
      });

      if (duplicateAmenity) {
        return NextResponse.json(
          { error: "Un équipement avec ce nom existe déjà" },
          { status: 409 }
        );
      }
    }

    const updated = await prisma.hotelAmenity.update({
      where: { id },
      data: {
        // Filtrer les valeurs undefined
        ...Object.fromEntries(
          Object.entries(body).filter(([_, value]) => value !== undefined)
        ),
        updatedAt: new Date(),
      },
      include: {
        _count: {
          select: {
            HotelCard: true,
            HotelCardToHotelAmenity: true,
          },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT HotelAmenity error:", error);

    // Gestion des erreurs Prisma spécifiques
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Équipement hôtelier non trouvé" },
          { status: 404 }
        );
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "Un équipement avec ce nom existe déjà" },
          { status: 409 }
        );
      }
    }

    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "Un équipement avec ce nom existe déjà" },
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
        { error: "ID d'équipement hôtelier invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'enregistrement existe avant suppression
    const existingAmenity = await prisma.hotelAmenity.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            HotelCard: true,
            HotelCardToHotelAmenity: true,
          },
        },
      },
    });

    if (!existingAmenity) {
      return NextResponse.json(
        { error: "Équipement hôtelier non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier les enregistrements liés avant suppression
    const totalRelatedRecords =
      existingAmenity._count.HotelCard +
      existingAmenity._count.HotelCardToHotelAmenity;

    if (totalRelatedRecords > 0) {
      return NextResponse.json(
        {
          error: "Impossible de supprimer un équipement utilisé",
          details: {
            directHotelLinks: existingAmenity._count.HotelCard,
            hotelAmenityLinks: existingAmenity._count.HotelCardToHotelAmenity,
          },
        },
        { status: 409 }
      );
    }

    await prisma.hotelAmenity.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Équipement hôtelier supprimé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE HotelAmenity error:", error);

    // Gestion des erreurs de contrainte de clé étrangère
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Équipement hôtelier non trouvé" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            error:
              "Impossible de supprimer un équipement utilisé par des hôtels",
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
          error: "Impossible de supprimer un équipement utilisé par des hôtels",
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
