// /app/api/admin/AccommodationType/reorder/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
        prisma.accommodationType.update({
          where: { id: item.id },
          data: { order: item.order },
        })
    );
    await Promise.all(updatePromises);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur PATCH /api/admin/AccommodationType/reorder :", error);
    return NextResponse.json(
      { error: "Erreur lors du réordonnancement des types d'hébergement." },
      { status: 500 }
    );
  }
}
