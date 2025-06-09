//api/admin/City/[id]/routes.ts
// app/api/admin/City/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Define the expected shape of the PUT and PATCH request bodies
interface CityData {
  name: string;
  order?: number;
  countryId: string;
}

// Validate UUID format for id and countryId
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

// GET /api/admin/City/[id]
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
    const city = await prisma.city.findUnique({
      where: { id },
      include: {
        country: true, // Include related Country data
      },
    });

    if (!city) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }

    return NextResponse.json(city, { status: 200 });
  } catch (error) {
    console.error("GET City error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PUT /api/admin/City/[id]
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
    const body: CityData = await req.json();

    // Validate required fields for PUT (full update)
    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!body.countryId || !isValidUUID(body.countryId)) {
      return NextResponse.json(
        { error: "Valid countryId is required" },
        { status: 400 }
      );
    }

    // Verify that the countryId exists
    const country = await prisma.country.findUnique({
      where: { id: body.countryId },
    });
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 400 });
    }

    const updatedCity = await prisma.city.update({
      where: { id },
      data: {
        name: body.name,
        order: body.order,
        countryId: body.countryId,
      },
    });

    return NextResponse.json(updatedCity, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2003"
    ) {
      return NextResponse.json(
        { error: "Invalid countryId reference" },
        { status: 400 }
      );
    }
    console.error("PUT City error:", error);
    return NextResponse.json({ error: "Error updating city" }, { status: 500 });
  }
}

// PATCH /api/admin/City/[id]
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
    const body: Partial<CityData> = await req.json();

    // Validate that at least one field is provided
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "At least one field must be provided" },
        { status: 400 }
      );
    }

    // Validate countryId if provided
    if (body.countryId && !isValidUUID(body.countryId)) {
      return NextResponse.json(
        { error: "Valid countryId is required" },
        { status: 400 }
      );
    }

    // Verify that the countryId exists if provided
    if (body.countryId) {
      const country = await prisma.country.findUnique({
        where: { id: body.countryId },
      });
      if (!country) {
        return NextResponse.json(
          { error: "Country not found" },
          { status: 400 }
        );
      }
    }

    const updatedCity = await prisma.city.update({
      where: { id },
      data: {
        name: body.name,
        order: body.order,
        countryId: body.countryId,
      },
    });

    return NextResponse.json(updatedCity, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }
    console.error("PATCH City error:", error);
    return NextResponse.json(
      { error: "Error partially updating city" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/City/[id]
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
    await prisma.city.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2003"
    ) {
      return NextResponse.json(
        { error: "Cannot delete city due to existing references" },
        { status: 400 }
      );
    }
    console.error("DELETE City error:", error);
    return NextResponse.json({ error: "Error deleting city" }, { status: 500 });
  }
}
