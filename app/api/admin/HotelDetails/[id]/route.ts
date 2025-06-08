// /app/api/admin/HotelDetails/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// GET /api/admin/HotelDetails/[id]
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    const hotelDetails = await prisma.hotelDetails.findUnique({
      where: { id },
      include: {
        address: {
          include: {
            city: { include: { country: true } },
            neighborhood: true,
          },
        },
        RoomAmenity: { orderBy: { order: "asc" } },
        Label: { orderBy: { order: "asc" } },
        HotelCard: { select: { id: true, name: true } },
        HotelDetailsToRoomAmenity: {
          include: { roomAmenity: true },
          orderBy: { order: "asc" },
        },
      },
    });

    if (!hotelDetails) {
      return NextResponse.json(
        { success: false, error: "Détails d'hôtel non trouvés" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: hotelDetails });
  } catch (error) {
    console.error("GET HotelDetails error:", error);
    return NextResponse.json(
      { success: false, error: "Échec de la récupération des détails d'hôtel" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/HotelDetails/[id]
export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    const body = await req.json();

    if (!body.idHotelCard || !body.addressId) {
      return NextResponse.json(
        {
          success: false,
          error: "L'ID de la carte d'hôtel et l'adresse sont requis",
        },
        { status: 400 }
      );
    }

    const addressExists = await prisma.address.findUnique({
      where: { id: body.addressId },
    });

    if (!addressExists) {
      return NextResponse.json(
        { success: false, error: "Adresse non trouvée" },
        { status: 400 }
      );
    }

    const item = await prisma.hotelDetails.update({
      where: { id },
      data: {
        idHotelCard: body.idHotelCard,
        description: body.description?.trim(),
        addressId: body.addressId,
      },
      include: {
        address: {
          include: {
            city: { include: { country: true } },
            neighborhood: true,
          },
        },
        RoomAmenity: true,
        Label: true,
      },
    });

    return NextResponse.json({ success: true, data: item });
  } catch (error: any) {
    console.error("PUT HotelDetails error:", error);
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { success: false, error: "Détails d'hôtel non trouvés" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            success: false,
            error: "Référence invalide (carte d'hôtel ou adresse)",
          },
          { status: 400 }
        );
      }
    }
    return NextResponse.json(
      { success: false, error: "Erreur serveur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/HotelDetails/[id]
export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (tx) => {
      await tx.hotelDetailsToRoomAmenity.deleteMany({
        where: { hotelDetailsId: id },
      });

      await tx.hotelDetails.delete({
        where: { id },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE HotelDetails error:", error);
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { success: false, error: "Détails d'hôtel non trouvés" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            success: false,
            error: "Impossible de supprimer: données liées existantes",
          },
          { status: 409 }
        );
      }
    }
    return NextResponse.json(
      { success: false, error: "Erreur serveur lors de la suppression" },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/HotelDetails/[id]
export async function PATCH(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID manquant dans l'URL" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updateData: any = {};

    if (body.description !== undefined) {
      updateData.description = body.description?.trim();
    }
    if (body.addressId !== undefined) {
      const addressExists = await prisma.address.findUnique({
        where: { id: body.addressId },
      });
      if (!addressExists) {
        return NextResponse.json(
          { success: false, error: "Adresse non trouvée" },
          { status: 400 }
        );
      }
      updateData.addressId = body.addressId;
    }

    const item = await prisma.hotelDetails.update({
      where: { id },
      data: updateData,
      include: {
        address: {
          include: {
            city: { include: { country: true } },
            neighborhood: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: item });
  } catch (error: any) {
    console.error("PATCH HotelDetails error:", error);
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { success: false, error: "Détails d'hôtel non trouvés" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur lors de la mise à jour partielle",
      },
      { status: 500 }
    );
  }
}
