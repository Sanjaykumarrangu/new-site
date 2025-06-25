import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  // Try to get the visitor record
  let visitor = await prisma.visitor.findFirst();

  if (!visitor) {
    visitor = await prisma.visitor.create({
      data: { count: 1 },
    });
  } else {
    visitor = await prisma.visitor.update({
      where: { id: visitor.id },
      data: { count: visitor.count + 1 },
    });
  }

  return Response.json({ count: visitor.count });
}
