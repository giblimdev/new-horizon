import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod"; // Optional: for validation

// Optional: Define validation schema
const accommodationTypeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  // Add other fields based on your model
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ID format (if using UUID)
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "Invalid accommodation type ID" },
        { status: 400 }
      );
    }

    const accommodationType = await prisma.accommodationType.findUnique({
      where: { id },
      // Optional: include related data
      // include: {
      //   accommodations: true,
      // },
    });

    if (!accommodationType) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(accommodationType);
  } catch (error) {
    console.error("GET AccommodationType error:", error);

    // More specific error handling
    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Invalid accommodation type ID format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "Invalid accommodation type ID" },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Optional: Validate request body
    // const validatedData = accommodationTypeSchema.parse(body);

    // Check if record exists before updating
    const existingType = await prisma.accommodationType.findUnique({
      where: { id },
    });

    if (!existingType) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }

    const updated = await prisma.accommodationType.update({
      where: { id },
      data: {
        // Filter out undefined values
        ...Object.fromEntries(
          Object.entries(body).filter(([_, value]) => value !== undefined)
        ),
        updatedAt: new Date(), // If you have this field
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT AccommodationType error:", error);

    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "Accommodation type with this name already exists" },
          { status: 409 }
        );
      }

      if (error.message.includes("Invalid")) {
        return NextResponse.json(
          { error: "Invalid data format" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "Invalid accommodation type ID" },
        { status: 400 }
      );
    }

    // Check if record exists before deleting
    const existingType = await prisma.accommodationType.findUnique({
      where: { id },
    });

    if (!existingType) {
      return NextResponse.json(
        { error: "Accommodation type not found" },
        { status: 404 }
      );
    }

    // Optional: Check for related records before deletion
    // const relatedAccommodations = await prisma.accommodation.count({
    //   where: { accommodationTypeId: id },
    // });

    // if (relatedAccommodations > 0) {
    //   return NextResponse.json(
    //     { error: "Cannot delete accommodation type with existing accommodations" },
    //     { status: 409 }
    //   );
    // }

    await prisma.accommodationType.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Accommodation type deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE AccommodationType error:", error);

    // Handle foreign key constraint errors
    if (
      error instanceof Error &&
      error.message.includes("Foreign key constraint")
    ) {
      return NextResponse.json(
        {
          error:
            "Cannot delete accommodation type with existing accommodations",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
