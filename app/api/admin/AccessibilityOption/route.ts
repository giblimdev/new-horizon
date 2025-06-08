// /app/api/admin/AccessibilityOption/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/AccessibilityOption
export async function GET() {
  const data = await prisma.accessibilityOption.findMany();
  return NextResponse.json(data);
}

// POST /api/admin/AccessibilityOption
export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await prisma.accessibilityOption.create({ data: body });
  return NextResponse.json(item, { status: 201 });
}
