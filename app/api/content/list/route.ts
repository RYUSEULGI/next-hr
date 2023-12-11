import prisma from '@/db';
import { convertBigIntResponse } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { categoryId, page, size, orderBy } = await req.json();

  const skip = page > 1 ? size * (page - 1) : 0;

  if (!categoryId) {
    const res = await prisma.content.findMany({
      skip,
      take: size,
      orderBy
    });

    const total = await prisma.content.count();

    const data = {
      total,
      size,
      page,
      isLast: skip + size >= total,
      items: convertBigIntResponse(res)
    };

    return NextResponse.json({ data, status: 200 });
  }

  const res = await prisma.content.findMany({
    where: {
      categoryId: BigInt(categoryId)
    },
    skip,
    take: size,
    orderBy
  });

  const total = await prisma.content.count({
    where: {
      categoryId: BigInt(categoryId)
    }
  });

  const data = {
    total,
    size,
    page,
    isLast: skip + size >= total,
    items: convertBigIntResponse(res)
  };

  return NextResponse.json({ data, status: 200 });
}
