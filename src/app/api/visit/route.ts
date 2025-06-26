import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
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

    return NextResponse.json({ count: visitor.count });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
