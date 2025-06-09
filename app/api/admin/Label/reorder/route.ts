// /app/api/admin/Label/reorder/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/Label/reorder
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
        prisma.label.update({
          where: { id: item.id },
          data: { order: item.order },
        })
    );

    await Promise.all(updatePromises);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur PATCH /api/admin/Label/reorder :", error);
    return NextResponse.json(
      { error: "Erreur lors du réordonnancement des labels." },
      { status: 500 }
    );
  }
}
