import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  console.log('🔍 /api/visit invoked');
  console.log('DATABASE_URL:', process.env.DATABASE_URL?.slice(0,30) + '…');

  try {
    let visitor = await prisma.visitor.findFirst();
    console.log('Found visitor:', visitor);

    if (!visitor) {
      visitor = await prisma.visitor.create({ data: { count: 1 } });
      console.log('Created visitor:', visitor);
    } else {
      visitor = await prisma.visitor.update({
        where: { id: visitor.id },
        data: { count: visitor.count + 1 },
      });
      console.log('Updated visitor:', visitor);
    }

    return new Response(JSON.stringify({ count: visitor.count }));
  } catch (err) {
    console.error('❌ /api/visit error:', err);
    return new Response('Internal Error', { status: 500 });
  }
}
