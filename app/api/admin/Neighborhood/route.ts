// /app/api/admin/Neighborhood/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/Neighborhood
export async function GET() {
  const data = await prisma.neighborhood.findMany();
  return NextResponse.json(data);
}

// POST /api/admin/Neighborhood
export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await prisma.neighborhood.create({ data: body });
  return NextResponse.json(item, { status: 201 });
}
