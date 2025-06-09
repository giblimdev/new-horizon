// app/api/admin/AccommodationType/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Define the expected shape of the PUT and PATCH request bodies
interface AccommodationTypeData {
  name: string;
  description?: string;
  // Add other fields from your Prisma schema as needed
}

// Validate ID format (assuming it's a UUID or integer; adjust as needed)
const isValidId = (id: string): boolean => {
  // Example: UUID or integer validation
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(id) || !isNaN(Number(id));
};

// Middleware for authentication (pseudo-code, implement as needed)
const authenticateRequest = (req: NextRequest): boolean => {
  // Example: Check for an Authorization header or session
  // const token = req.headers.get("authorization");
  // return verifyToken(token);
  return true; // Replace with actual auth logic
};

// GET /api/admin/AccommodationType/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidId(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(_req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const accommodationType = await prisma.accommodationType.findUnique({
      where: { id },
    });

    if (!accommodationType) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(accommodationType, { status: 200 });
  } catch (error) {
    console.error("GET AccommodationType error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PUT /api/admin/AccommodationType/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidId(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: AccommodationTypeData = await req.json();

    // Validate required fields for PUT (full update)
    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const updatedAccommodationType = await prisma.accommodationType.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        // Add other fields as needed
      },
    });

    return NextResponse.json(updatedAccommodationType, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2003"
    ) {
      return NextResponse.json({ error: "Invalid reference" }, { status: 400 });
    }
    console.error("PUT AccommodationType error:", error);
    return NextResponse.json(
      { error: "Error updating accommodation type" },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/AccommodationType/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidId(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: Partial<AccommodationTypeData> = await req.json();

    // Validate that at least one field is provided
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "At least one field must be provided" },
        { status: 400 }
      );
    }

    const updatedAccommodationType = await prisma.accommodationType.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        // Add other fields as needed
      },
    });

    return NextResponse.json(updatedAccommodationType, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }
    console.error("PATCH AccommodationType error:", error);
    return NextResponse.json(
      { error: "Error partially updating accommodation type" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/AccommodationType/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id || !isValidId(id)) {
    return NextResponse.json(
      { error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  if (!authenticateRequest(_req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.accommodationType.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }
    console.error("DELETE AccommodationType error:", error);
    return NextResponse.json(
      { error: "Error deleting accommodation type" },
      { status: 500 }
    );
  }
}
