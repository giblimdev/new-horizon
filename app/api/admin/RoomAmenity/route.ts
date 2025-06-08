// /app/api/admin/RoomAmenity/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/RoomAmenity
export async function GET() {
  const data = await prisma.roomAmenity.findMany();
  return NextResponse.json(data);
}

// POST /api/admin/RoomAmenity
export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await prisma.roomAmenity.create({ data: body });
  return NextResponse.json(item, { status: 201 });
}
