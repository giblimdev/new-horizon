import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Extraction de l'ID depuis l'URL (si tu ne veux pas utiliser params)
function extractIdFromUrl(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// GET /api/admin/Label/[id]
export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const label = await prisma.label.findUnique({ where: { id } });
  if (!label) {
    return NextResponse.json({ error: "Label not found" }, { status: 404 });
  }
  return NextResponse.json(label);
}

// PUT /api/admin/Label/[id]
export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.label.update({
      where: { id },
      data: {
        name: data.name,
        order: data.order,
        code: data.code,
        description: data.description,
        category: data.category,
        icon: data.icon,
        color: data.color,
        priority: data.priority,
        hotelDetailsId: data.hotelDetailsId,
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Label not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/admin/Label/[id]
export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.label.delete({ where: { id } });
    return NextResponse.json({ message: "Label deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Label not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
