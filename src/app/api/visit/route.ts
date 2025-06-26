// src/app/api/visit/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

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

    return NextResponse.json({ count: visitor.count });
  } catch (err) {
    console.error('Visitor API error:', err);
    return NextResponse.json({ error: 'Failed to update count' }, { status: 500 });
  }
}
