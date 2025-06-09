//api/admin/Country/[id]/routes.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Define the expected shape of the PUT and PATCH request bodies
interface CountryData {
  name: string;
  order?: number;
  code: string;
  language?: string;
  currency?: string;
}

// Validate UUID format for id
const isValidUUID = (id: string): boolean => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(id);
};

// Middleware for authentication (pseudo-code, implement as needed)
const authenticateRequest = (req: NextRequest): boolean => {
  // Example: Check for an Authorization header or session
  // const token = req.headers.get("authorization");
  // return verifyToken(token);
  return true; // Replace with actual auth logic
};

// GET /api/admin/Country/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidUUID(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(_req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const country = await prisma.country.findUnique({
      where: { id },
      include: {
        cities: true, // Include related City data (optional)
      },
    });

    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }

    return NextResponse.json(country, { status: 200 });
  } catch (error) {
    console.error("GET Country error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PUT /api/admin/Country/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidUUID(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: CountryData = await req.json();

    // Validate required fields for PUT (full update)
    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!body.code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const updatedCountry = await prisma.country.update({
      where: { id },
      data: {
        name: body.name,
        order: body.order,
        code: body.code,
        language: body.language,
        currency: body.currency,
      },
    });

    return NextResponse.json(updatedCountry, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Country code already exists" },
        { status: 400 }
      );
    }
    console.error("PUT Country error:", error);
    return NextResponse.json(
      { error: "Error updating country" },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/Country/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidUUID(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: Partial<CountryData> = await req.json();

    // Validate that at least one field is provided
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "At least one field must be provided" },
        { status: 400 }
      );
    }

    const updatedCountry = await prisma.country.update({
      where: { id },
      data: {
        name: body.name,
        order: body.order,
        code: body.code,
        language: body.language,
        currency: body.currency,
      },
    });

    return NextResponse.json(updatedCountry, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Country code already exists" },
        { status: 400 }
      );
    }
    console.error("PATCH Country error:", error);
    return NextResponse.json(
      { error: "Error partially updating country" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/Country/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidUUID(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(_req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.country.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2003"
    ) {
      return NextResponse.json(
        { error: "Cannot delete country due to existing city references" },
        { status: 400 }
      );
    }
    console.error("DELETE Country error:", error);
    return NextResponse.json(
      { error: "Error deleting country" },
      { status: 500 }
    );
  }
}
