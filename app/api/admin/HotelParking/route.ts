// /app/api/admin/HotelParking/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/HotelParking
export async function GET() {
  const data = await prisma.hotelParking.findMany();
  return NextResponse.json(data);
}

// POST /api/admin/HotelParking
export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await prisma.hotelParking.create({ data: body });
  return NextResponse.json(item, { status: 201 });
}
