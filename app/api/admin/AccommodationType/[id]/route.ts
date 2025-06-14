// app/api/admin/AccommodationType/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Type pour les paramètres de route Next.js 15
type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de type d'hébergement invalide" },
        { status: 400 }
      );
    }

    const accommodationType = await prisma.accommodationType.findUnique({
      where: { id },
      // Optionnel: inclure les données liées
      // include: {
      //   accommodations: true,
      // },
    });

    if (!accommodationType) {
      return NextResponse.json(
        { error: "Type d'hébergement non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(accommodationType);
  } catch (error) {
    console.error("GET AccommodationType error:", error);

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Format d'ID de type d'hébergement invalide" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de type d'hébergement invalide" },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Vérifier si l'enregistrement existe avant la mise à jour
    const existingType = await prisma.accommodationType.findUnique({
      where: { id },
    });

    if (!existingType) {
      return NextResponse.json(
        { error: "Type d'hébergement non trouvé" },
        { status: 404 }
      );
    }

    const updated = await prisma.accommodationType.update({
      where: { id },
      data: {
        // Filtrer les valeurs undefined
        ...Object.fromEntries(
          Object.entries(body).filter(([_, value]) => value !== undefined)
        ),
        updatedAt: new Date(), // Si vous avez ce champ
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT AccommodationType error:", error);

    // Gestion des erreurs Prisma spécifiques
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "Un type d'hébergement avec ce nom existe déjà" },
          { status: 409 }
        );
      }

      if (error.message.includes("Invalid")) {
        return NextResponse.json(
          { error: "Format de données invalide" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    // Validation de l'ID
    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "ID de type d'hébergement invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'enregistrement existe avant suppression
    const existingType = await prisma.accommodationType.findUnique({
      where: { id },
    });

    if (!existingType) {
      return NextResponse.json(
        { error: "Type d'hébergement non trouvé" },
        { status: 404 }
      );
    }

    // Optionnel: Vérifier les enregistrements liés avant suppression
    // const relatedAccommodations = await prisma.accommodation.count({
    //   where: { accommodationTypeId: id },
    // });

    // if (relatedAccommodations > 0) {
    //   return NextResponse.json(
    //     { error: "Impossible de supprimer un type d'hébergement utilisé par des hébergements" },
    //     { status: 409 }
    //   );
    // }

    await prisma.accommodationType.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Type d'hébergement supprimé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE AccommodationType error:", error);

    // Gestion des erreurs de contrainte de clé étrangère
    if (
      error instanceof Error &&
      error.message.includes("Foreign key constraint")
    ) {
      return NextResponse.json(
        {
          error:
            "Impossible de supprimer un type d'hébergement utilisé par des hébergements",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}
