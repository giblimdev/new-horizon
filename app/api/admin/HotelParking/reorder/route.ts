// /app/api/admin/HotelParking/reorder/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/HotelParking/reorder
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    if (!Array.isArray(body.updates)) {
      return NextResponse.json(
        {
          error: "Format invalide. Attendu : { updates: [{ id, order }, ...] }",
        },
        { status: 400 }
      );
    }

    const updatePromises = body.updates.map(
      (item: { id: string; order: number }) =>
        prisma.hotelParking.update({
          where: { id: item.id },
          data: { order: item.order },
        })
    );

    await Promise.all(updatePromises);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur PATCH /api/admin/HotelParking/reorder :", error);
    return NextResponse.json(
      { error: "Erreur lors du réordonnancement des parkings d'hôtel." },
      { status: 500 }
    );
  }
}
