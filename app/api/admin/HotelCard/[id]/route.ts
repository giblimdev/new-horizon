// @/app/api/admin/hotelCard/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// GET /api/admin/hotelCard/[id]
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    const hotelCard = await prisma.hotelCard.findUnique({
      where: { id },
      include: {
        accommodationType: true,
        destination: {
          include: {
            City: {
              include: {
                country: true,
              },
            },
          },
        },
        hotelGroup: true,
        details: {
          include: {
            address: {
              include: {
                city: {
                  include: {
                    country: true,
                  },
                },
                neighborhood: true,
              },
            },
            RoomAmenity: true,
            Label: true,
          },
        },
        images: {
          orderBy: { order: "asc" },
        },
        HotelCardToHotelHighlight: {
          include: { hotelHighlight: true },
          orderBy: { order: "asc" },
        },
        HotelCardToLabel: {
          include: { label: true },
          orderBy: { order: "asc" },
        },
        HotelCardToAccessibilityOption: {
          include: { accessibilityOption: true },
          orderBy: { order: "asc" },
        },
        HotelCardToHotelAmenity: {
          include: { hotelAmenity: true },
          orderBy: { order: "asc" },
        },
      },
    });

    if (!hotelCard) {
      return NextResponse.json(
        { error: "Carte d'hôtel non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(hotelCard);
  } catch (error) {
    console.error("GET HotelCard error:", error);
    return NextResponse.json(
      { error: "Échec de la récupération de la carte d'hôtel" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/hotelCard/[id]
export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    const data = await req.json();

    // Validation des données obligatoires
    if (
      !data.name ||
      !data.idCity ||
      !data.starRating ||
      !data.basePricePerNight
    ) {
      return NextResponse.json(
        {
          error:
            "Le nom, la ville, le nombre d'étoiles et le prix de base sont requis",
        },
        { status: 400 }
      );
    }

    if (data.starRating < 1 || data.starRating > 5) {
      return NextResponse.json(
        { error: "Le nombre d'étoiles doit être entre 1 et 5" },
        { status: 400 }
      );
    }

    if (data.basePricePerNight <= 0) {
      return NextResponse.json(
        { error: "Le prix de base doit être supérieur à 0" },
        { status: 400 }
      );
    }

    const updatedHotelCard = await prisma.hotelCard.update({
      where: { id },
      data: {
        name: data.name.trim(),
        idCity: data.idCity,
        shortDescription: data.shortDescription?.trim(),
        starRating: parseInt(data.starRating),
        overallRating: data.overallRating
          ? parseFloat(data.overallRating)
          : null,
        ratingAdjective: data.ratingAdjective?.trim(),
        reviewCount: data.reviewCount ? parseInt(data.reviewCount) : 0,
        basePricePerNight: parseFloat(data.basePricePerNight),
        regularPrice: data.regularPrice ? parseFloat(data.regularPrice) : null,
        currency: data.currency || "EUR",
        isPartner: data.isPartner ?? false,
        promoMessage: data.promoMessage?.trim(),
        imageMessage: data.imageMessage?.trim(),
        cancellationPolicy: data.cancellationPolicy?.trim(),
        accommodationTypeId: data.accommodationTypeId || null,
        destinationId: data.destinationId || null,
        hotelGroupId: data.hotelGroupId || null,
        latitude: data.latitude ? parseFloat(data.latitude) : null,
        longitude: data.longitude ? parseFloat(data.longitude) : null,
      },
      include: {
        accommodationType: true,
        destination: true,
        hotelGroup: true,
        details: {
          include: {
            address: {
              include: {
                city: {
                  include: {
                    country: true,
                  },
                },
                neighborhood: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(updatedHotelCard, { status: 200 });
  } catch (error: any) {
    console.error("PUT HotelCard error:", error);
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Carte d'hôtel non trouvée" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          { error: "Référence invalide (ville, type d'hébergement, etc.)" },
          { status: 400 }
        );
      }
    }
    return NextResponse.json(
      { error: "Échec de la mise à jour de la carte d'hôtel" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/hotelCard/[id]
export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (tx) => {
      await tx.hotelCardToHotelHighlight.deleteMany({
        where: { hotelCardId: id },
      });
      await tx.hotelCardToLabel.deleteMany({ where: { hotelCardId: id } });
      await tx.hotelCardToAccessibilityOption.deleteMany({
        where: { hotelCardId: id },
      });
      await tx.hotelCardToHotelAmenity.deleteMany({
        where: { hotelCardId: id },
      });
      await tx.hotelCard.delete({ where: { id } });
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("DELETE HotelCard error:", error);
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Carte d'hôtel non trouvée" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      { error: "Échec de la suppression de la carte d'hôtel" },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/hotelCard/[id]
export async function PATCH(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    const data = await req.json();
    const updateData: any = {};

    if (data.name !== undefined) updateData.name = data.name.trim();
    if (data.shortDescription !== undefined)
      updateData.shortDescription = data.shortDescription?.trim();
    if (data.starRating !== undefined)
      updateData.starRating = parseInt(data.starRating);
    if (data.overallRating !== undefined)
      updateData.overallRating = data.overallRating
        ? parseFloat(data.overallRating)
        : null;
    if (data.basePricePerNight !== undefined)
      updateData.basePricePerNight = parseFloat(data.basePricePerNight);
    if (data.isPartner !== undefined) updateData.isPartner = data.isPartner;
    if (data.promoMessage !== undefined)
      updateData.promoMessage = data.promoMessage?.trim();

    const updatedHotelCard = await prisma.hotelCard.update({
      where: { id },
      data: updateData,
      include: {
        accommodationType: true,
        destination: true,
        hotelGroup: true,
      },
    });

    return NextResponse.json(updatedHotelCard, { status: 200 });
  } catch (error: any) {
    console.error("PATCH HotelCard error:", error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Carte d'hôtel non trouvée" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "Échec de la mise à jour partielle" },
      { status: 500 }
    );
  }
}
