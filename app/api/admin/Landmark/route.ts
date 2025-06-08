// @/app/api/admin/Landmark/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/adim/Landmark
export async function GET() {
  const amenities = await prisma.landmark.findMany();
  return NextResponse.json(amenities);
}

// POST /api/adim/Landmark
export async function POST(req: NextRequest) {
  const data = await req.json();
  const amenity = await prisma.landmark.create({ data });
  return NextResponse.json(amenity, { status: 201 });
}
