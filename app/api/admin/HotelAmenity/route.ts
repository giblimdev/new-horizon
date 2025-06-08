// @/app/api/admin/HotelAmenity/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/adim/HotelAmenity
export async function GET() {
  const amenities = await prisma.hotelAmenity.findMany();
  return NextResponse.json(amenities);
}

// POST /api/adim/HotelAmenity
export async function POST(req: NextRequest) {
  const data = await req.json();
  const amenity = await prisma.hotelAmenity.create({ data });
  return NextResponse.json(amenity, { status: 201 });
}
