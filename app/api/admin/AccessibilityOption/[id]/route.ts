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
        { error: "ID d'option d'accessibilité invalide" },
        { status: 400 }
      );
    }

    const accessibilityOption = await prisma.accessibilityOption.findUnique({
      where: { id },
      // Optionnel: inclure les données liées
      // include: {
      //   accommodations: true,
      // },
    });

    if (!accessibilityOption) {
      return NextResponse.json(
        { error: "Option d'accessibilité non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(accessibilityOption);
  } catch (error) {
    console.error("GET AccessibilityOption error:", error);

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json(
        { error: "Format d'ID d'option d'accessibilité invalide" },
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
        { error: "ID d'option d'accessibilité invalide" },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Vérifier si l'enregistrement existe avant la mise à jour
    const existingOption = await prisma.accessibilityOption.findUnique({
      where: { id },
    });

    if (!existingOption) {
      return NextResponse.json(
        { error: "Option d'accessibilité non trouvée" },
        { status: 404 }
      );
    }

    const updated = await prisma.accessibilityOption.update({
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
    console.error("PUT AccessibilityOption error:", error);

    // Gestion des erreurs Prisma spécifiques
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { error: "Une option d'accessibilité avec ce nom existe déjà" },
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
        { error: "ID d'option d'accessibilité invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'enregistrement existe avant suppression
    const existingOption = await prisma.accessibilityOption.findUnique({
      where: { id },
    });

    if (!existingOption) {
      return NextResponse.json(
        { error: "Option d'accessibilité non trouvée" },
        { status: 404 }
      );
    }

    // Optionnel: Vérifier les enregistrements liés avant suppression
    // const relatedAccommodations = await prisma.accommodation.count({
    //   where: { accessibilityOptions: { some: { id } } },
    // });

    // if (relatedAccommodations > 0) {
    //   return NextResponse.json(
    //     { error: "Impossible de supprimer une option d'accessibilité utilisée par des hébergements" },
    //     { status: 409 }
    //   );
    // }

    await prisma.accessibilityOption.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Option d'accessibilité supprimée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE AccessibilityOption error:", error);

    // Gestion des erreurs de contrainte de clé étrangère
    if (
      error instanceof Error &&
      error.message.includes("Foreign key constraint")
    ) {
      return NextResponse.json(
        {
          error:
            "Impossible de supprimer une option d'accessibilité utilisée par des hébergements",
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
