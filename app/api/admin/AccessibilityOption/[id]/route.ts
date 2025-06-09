// app/api/admin/AccessibilityOption/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Define the expected shape of the PUT request body
interface UpdateAccessibilityOption {
  name: string;
  order?: number;
  category?: string;
  icon?: string;
  description?: string;
}

// Validate ID format (assuming it's a UUID or string)
const isValidId = (id: string): boolean => {
  // Example: UUID validation (modify as needed for your use case)
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(id) || !isNaN(Number(id)); // Adjust based on your ID format
};

// Middleware for authentication (pseudo-code, implement as needed)
const authenticateRequest = (req: NextRequest): boolean => {
  // Example: Check for an Authorization header or session
  // const token = req.headers.get("authorization");
  // return verifyToken(token);
  return true; // Replace with actual auth logic
};

// GET /api/admin/AccessibilityOption/[id]
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").filter(Boolean).pop();

    if (!id || !isValidId(id)) {
      return NextResponse.json(
        { error: "Invalid or missing ID" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const amenity = await prisma.accessibilityOption.findUnique({
      where: { id },
    });

    if (!amenity) {
      return NextResponse.json(
        { error: "Accessibility option not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(amenity, { status: 200 });
  } catch (error) {
    console.error("GET AccessibilityOption error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PUT /api/admin/AccessibilityOption/[id]
export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").filter(Boolean).pop();

    if (!id || !isValidId(id)) {
      return NextResponse.json(
        { error: "Invalid or missing ID" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: UpdateAccessibilityOption = await req.json();

    // Validate required fields
    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const updated = await prisma.accessibilityOption.update({
      where: { id },
      data: {
        name: body.name,
        order: body.order,
        category: body.category,
        icon: body.icon,
        description: body.description,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Accessibility option not found" },
        { status: 404 }
      );
    }
    console.error("PUT AccessibilityOption error:", error);
    return NextResponse.json(
      { error: "Error updating accessibility option" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/AccessibilityOption/[id]
export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").filter(Boolean).pop();

    if (!id || !isValidId(id)) {
      return NextResponse.json(
        { error: "Invalid or missing ID" },
        { status: 400 }
      );
    }

    if (!authenticateRequest(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.accessibilityOption.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { error: "Accessibility option not found" },
        { status: 404 }
      );
    }
    console.error("DELETE AccessibilityOption error:", error);
    return NextResponse.json(
      { error: "Error deleting accessibility option" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function handler(req: NextRequest) {
  return NextResponse.json(
    { error: `Method ${req.method} Not Allowed` },
    { status: 405 }
  );
}
