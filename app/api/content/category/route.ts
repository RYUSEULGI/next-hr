import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.contentGenre.findMany({
    select: {
      id: true,
      name: true
    },
    orderBy: { id: 'asc' }
  });

  const convert = JSON.stringify(data, (_, value) =>
    typeof value === 'bigint' ? Number(value) : value
  );

  prisma.$disconnect();

  return NextResponse.json({ data: JSON.parse(convert), status: 200 });
}
