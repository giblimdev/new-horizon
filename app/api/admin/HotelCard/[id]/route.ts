// app/api/admin/hotelCard/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Type pour les paramètres de route Next.js 15
type RouteContext = {
  params: Promise<{ id: string }>;
};

// Interface pour la validation des données de carte hôtelière
interface UpdateHotelCardData {
  name?: string;
  idCity?: string;
  shortDescription?: string;
  starRating?: number;
  overallRating?: number;
  ratingAdjective?: string;
  reviewCount?: number;
  basePricePerNight?: number;
  regularPrice?: number;
  currency?: string;
  isPartner?: boolean;
  promoMessage?: string;
  imageMessage?: string;
  cancellationPolicy?: string;
  accommodationTypeId?: string;
  destinationId?: string;
  hotelGroupId?: string;
  latitude?: number;
  longitude?: number;
  detailsId?: string;
}

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de carte hôtelière invalide" },
        { status: 400 }
      );
    }

    const hotelCard = await prisma.hotelCard.findUnique({
      where: { id },
      include: {
        accommodationType: {
          select: {
            id: true,
            name: true,
            code: true,
            category: true,
            description: true,
          },
        },
        destination: {
          select: {
            id: true,
            name: true,
            type: true,
            popularityScore: true,
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
          },
        },
        hotelGroup: {
          select: {
            id: true,
            name: true,
            description: true,
            website: true,
            logoUrl: true,
          },
        },
        details: {
          include: {
            address: {
              include: {
                city: {
                  select: {
                    name: true,
                    country: {
                      select: {
                        name: true,
                        code: true,
                      },
                    },
                  },
                },
                neighborhood: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            RoomAmenity: {
              select: {
                id: true,
                name: true,
                category: true,
                icon: true,
              },
              orderBy: {
                order: "asc",
              },
            },
            Label: {
              select: {
                id: true,
                name: true,
                code: true,
                category: true,
                icon: true,
                color: true,
              },
              orderBy: {
                priority: "desc",
              },
            },
          },
        },
        parking: {
          select: {
            id: true,
            isAvailable: true,
            spaces: true,
            notes: true,
          },
        },
        images: {
          select: {
            id: true,
            imageUrl: true,
            imageType: true,
            alt: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        HotelAmenity: {
          select: {
            id: true,
            name: true,
            category: true,
            icon: true,
            description: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        HotelCardToHotelHighlight: {
          include: {
            hotelHighlight: {
              select: {
                id: true,
                title: true,
                description: true,
                category: true,
                icon: true,
                priority: true,
                isPromoted: true,
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        },
        HotelCardToLabel: {
          include: {
            label: {
              select: {
                id: true,
                name: true,
                code: true,
                category: true,
                icon: true,
                color: true,
                priority: true,
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        },
        HotelCardToAccessibilityOption: {
          include: {
            accessibilityOption: {
              select: {
                id: true,
                name: true,
                code: true,
                category: true,
                icon: true,
                description: true,
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        },
        HotelCardToHotelAmenity: {
          include: {
            hotelAmenity: {
              select: {
                id: true,
                name: true,
                category: true,
                icon: true,
                description: true,
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        },
        _count: {
          select: {
            parking: true,
            images: true,
            HotelAmenity: true,
            HotelCardToHotelHighlight: true,
            HotelCardToLabel: true,
            HotelCardToAccessibilityOption: true,
            HotelCardToHotelAmenity: true,
          },
        },
      },
    });

    if (!hotelCard) {
      return NextResponse.json(
        { error: "Carte hôtelière non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(hotelCard);
  } catch (error) {
    console.error("GET HotelCard error:", error);

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Format d'ID de carte hôtelière invalide" },
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
        { error: "ID de carte hôtelière invalide" },
        { status: 400 }
      );
    }

    const body: UpdateHotelCardData = await req.json();

    // Validation des données
    if (body.name && body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Le nom de l'hôtel ne peut pas être vide" },
        { status: 400 }
      );
    }

    if (
      body.starRating !== undefined &&
      (body.starRating < 1 || body.starRating > 5)
    ) {
      return NextResponse.json(
        { error: "La note étoilée doit être entre 1 et 5" },
        { status: 400 }
      );
    }

    if (
      body.overallRating !== undefined &&
      (body.overallRating < 0 || body.overallRating > 10)
    ) {
      return NextResponse.json(
        { error: "La note globale doit être entre 0 et 10" },
        { status: 400 }
      );
    }

    if (body.basePricePerNight !== undefined && body.basePricePerNight < 0) {
      return NextResponse.json(
        { error: "Le prix de base doit être positif" },
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

    // Vérifier si la carte hôtelière existe avant la mise à jour
    const existingHotelCard = await prisma.hotelCard.findUnique({
      where: { id },
    });

    if (!existingHotelCard) {
      return NextResponse.json(
        { error: "Carte hôtelière non trouvée" },
        { status: 404 }
      );
    }

    // Vérifier les références étrangères si fournies
    if (body.accommodationTypeId) {
      const accommodationTypeExists = await prisma.accommodationType.findUnique(
        {
          where: { id: body.accommodationTypeId },
        }
      );
      if (!accommodationTypeExists) {
        return NextResponse.json(
          { error: "Type d'hébergement non trouvé" },
          { status: 400 }
        );
      }
    }

    if (body.destinationId) {
      const destinationExists = await prisma.destination.findUnique({
        where: { id: body.destinationId },
      });
      if (!destinationExists) {
        return NextResponse.json(
          { error: "Destination non trouvée" },
          { status: 400 }
        );
      }
    }

    if (body.hotelGroupId) {
      const hotelGroupExists = await prisma.hotelGroup.findUnique({
        where: { id: body.hotelGroupId },
      });
      if (!hotelGroupExists) {
        return NextResponse.json(
          { error: "Groupe hôtelier non trouvé" },
          { status: 400 }
        );
      }
    }

    const updated = await prisma.hotelCard.update({
      where: { id },
      data: {
        // Filtrer les valeurs undefined
        ...Object.fromEntries(
          Object.entries(body).filter(([_, value]) => value !== undefined)
        ),
      },
      include: {
        accommodationType: {
          select: {
            name: true,
            category: true,
          },
        },
        destination: {
          select: {
            name: true,
            type: true,
          },
        },
        hotelGroup: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            parking: true,
            images: true,
            HotelAmenity: true,
            HotelCardToHotelHighlight: true,
            HotelCardToLabel: true,
            HotelCardToAccessibilityOption: true,
            HotelCardToHotelAmenity: true,
          },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT HotelCard error:", error);

    // Gestion des erreurs Prisma spécifiques
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Carte hôtelière non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "Une carte hôtelière avec ce nom existe déjà" },
          { status: 409 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          { error: "Référence invalide vers un enregistrement lié" },
          { status: 400 }
        );
      }
    }

    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "Une carte hôtelière avec ce nom existe déjà" },
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
        { error: "ID de carte hôtelière invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'enregistrement existe avant suppression
    const existingHotelCard = await prisma.hotelCard.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            parking: true,
            images: true,
            HotelCardToHotelHighlight: true,
            HotelCardToLabel: true,
            HotelCardToAccessibilityOption: true,
            HotelCardToHotelAmenity: true,
          },
        },
      },
    });

    if (!existingHotelCard) {
      return NextResponse.json(
        { error: "Carte hôtelière non trouvée" },
        { status: 404 }
      );
    }

    // Vérifier les enregistrements liés avant suppression
    const totalRelatedRecords =
      existingHotelCard._count.parking +
      existingHotelCard._count.images +
      existingHotelCard._count.HotelCardToHotelHighlight +
      existingHotelCard._count.HotelCardToLabel +
      existingHotelCard._count.HotelCardToAccessibilityOption +
      existingHotelCard._count.HotelCardToHotelAmenity;

    if (totalRelatedRecords > 0) {
      return NextResponse.json(
        {
          error: "Impossible de supprimer une carte hôtelière utilisée",
          details: {
            parking: existingHotelCard._count.parking,
            images: existingHotelCard._count.images,
            highlights: existingHotelCard._count.HotelCardToHotelHighlight,
            labels: existingHotelCard._count.HotelCardToLabel,
            accessibility:
              existingHotelCard._count.HotelCardToAccessibilityOption,
            amenities: existingHotelCard._count.HotelCardToHotelAmenity,
          },
        },
        { status: 409 }
      );
    }

    await prisma.hotelCard.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Carte hôtelière supprimée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE HotelCard error:", error);

    // Gestion des erreurs de contrainte de clé étrangère
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Carte hôtelière non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            error:
              "Impossible de supprimer une carte hôtelière utilisée par des enregistrements liés",
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
            "Impossible de supprimer une carte hôtelière utilisée par des enregistrements liés",
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
