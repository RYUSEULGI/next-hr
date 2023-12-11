import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { categoryId, page, size, orderBy } = await req.json();

  if (!categoryId) {
    return NextResponse.json({ data: '', message: '일치하는 id가 없습니다.' }, { status: 400 });
  }

  const skip = page > 1 ? size * (page - 1) : 0;

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

  const convert = JSON.stringify(res, (_, value) =>
    typeof value === 'bigint' ? Number(value) : value
  );

  const data = {
    total,
    size,
    page,
    isLast: skip + size >= total,
    items: JSON.parse(convert)
  };

  return NextResponse.json({ data, status: 200 });
}
