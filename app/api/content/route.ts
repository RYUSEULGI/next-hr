import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ data: '', message: '존재하지 않는 id 입니다.', status: 500 });
  }

  const data = await prisma.content.findUnique({
    where: {
      id: BigInt(id)
    }
  });

  const convert = JSON.stringify(data, (_, value) =>
    typeof value === 'bigint' ? Number(value) : value
  );

  prisma.$disconnect();

  return NextResponse.json({ data: JSON.parse(convert), status: 200 });
}
