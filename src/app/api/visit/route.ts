import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  try {
    let visitor = await prisma.visitor.findFirst();

    if (!visitor) {
      visitor = await prisma.visitor.create({ data: { count: 1 } });
    } else {
      visitor = await prisma.visitor.update({
        where: { id: visitor.id },
        data: { count: visitor.count + 1 },
      });
    }

    return new Response(JSON.stringify({ count: visitor.count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('❌ /api/visit error:', err);
    return new Response(
      JSON.stringify({ error: err.message || 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
