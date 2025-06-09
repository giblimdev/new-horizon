import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

function getIdFromRequest(req: NextRequest): string | undefined {
  const url = new URL(req.url);
  return url.searchParams.get("id") || undefined;
}

// GET /api/admin/accommodationType?id=...
export async function GET(req: NextRequest) {
  const id = getIdFromRequest(req);
  if (!id) {
    return NextResponse.json({ error: "ID manquant dans l'URL" }, { status: 400 });
  }
  try {
    const accommodationType = await prisma.accommodationType.findUnique({ where: { id } });
    if (!accommodationType) {
      return NextResponse.json({ error: "accommodationType non trouvée" }, { status: 404 });
    }
    return NextResponse.json(accommodationType, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// PUT /api/admin/accommodationType?id=...
export async function PUT(req: NextRequest) {
  const id = getIdFromRequest(req);
  if (!id) {
    return NextResponse.json({ error: "ID manquant dans l'URL" }, { status: 400 });
  }
  try {
    const data = await req.json();
    const updatedAccommodationType = await prisma.accommodationType.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedAccommodationType, { status: 200 });
  } catch (error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ error: "accommodationType non trouvée" }, { status: 404 });
      }
      if (error.code === "P2003") {
        return NextResponse.json({ error: "Référence invalide" }, { status: 400 });
      }
    }
    return NextResponse.json({ error: "Échec de la mise à jour" }, { status: 500 });
  }
}

// DELETE /api/admin/accommodationType?id=...
export async function DELETE(req: NextRequest) {
  const id = getIdFromRequest(req);
  if (!id) {
    return NextResponse.json({ error: "ID manquant dans l'URL" }, { status: 400 });
  }
  try {
    await prisma.accommodationType.delete({ where: { id } });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "accommodationType non trouvée" }, { status: 404 });
    }
    return NextResponse.json({ error: "Échec de la suppression" }, { status: 500 });
  }
}

// PATCH /api/admin/accommodationType?id=...
export async function PATCH(req: NextRequest) {
  const id = getIdFromRequest(req);
  if (!id) {
    return NextResponse.json({ error: "ID manquant dans l'URL" }, { status: 400 });
  }
  try {
    const data = await req.json();
    const updatedAccommodationType = await prisma.accommodationType.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedAccommodationType, { status: 200 });
  } catch (error: any) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "accommodationType non trouvée" }, { status: 404 });
    }
    return NextResponse.json({ error: "Échec de la mise à jour partielle" }, { status: 500 });
  }
}
