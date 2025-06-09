//api/admin/Destination/[id]/routes.ts
import { NextResponse } from "next/server";

// GET: Récupérer une destination par ID
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // TODO: Récupérer la destination depuis la DB avec l'id
  // Exemple fictif :
  // const destination = await prisma.destination.findUnique({ where: { id } });
  return NextResponse.json({ message: `GET Destination ${id}` });
}

// PUT: Mettre à jour une destination par ID
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const data = await request.json();
  // TODO: Mettre à jour la destination dans la DB avec l'id et data
  return NextResponse.json({ message: `PUT Destination ${id}`, data });
}

// DELETE: Supprimer une destination par ID
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // TODO: Supprimer la destination dans la DB avec l'id
  return NextResponse.json({ message: `DELETE Destination ${id}` });
}
