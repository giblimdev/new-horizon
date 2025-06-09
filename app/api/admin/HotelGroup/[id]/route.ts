//api/admin/HotelGroup/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function extractIdFromUrl(url: string) {
  // Exemple : /api/admin/HotelGroup/abc123
  const parts = url.split("/");
  return parts[parts.length - 1];
}

export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url);
  const hotelGroup = await prisma.hotelGroup.findUnique({ where: { id } });
  if (!hotelGroup) {
    return NextResponse.json(
      { error: "HotelGroup not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(hotelGroup);
}

export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url);
  const data = await request.json();
  try {
    const updated = await prisma.hotelGroup.update({
      where: { id },
      data: {
        name: data.name,
        order: data.order,
        description: data.description,
        website: data.website,
        logoUrl: data.logoUrl,
      },
    });
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "HotelGroup not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url);
  try {
    await prisma.hotelGroup.delete({ where: { id } });
    return NextResponse.json({ message: "HotelGroup deleted" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "HotelGroup not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
