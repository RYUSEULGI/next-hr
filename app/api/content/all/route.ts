import prisma from '@/db';
import { ContentSortType } from '@/lib/api/content/content.types';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.content.findMany({
    select: {
      id: true,
      name: true
    }
  });

  const convert = JSON.stringify(data, (_, value) =>
    typeof value === 'bigint' ? Number(value) : value
  );

  const topDataShuffle = JSON.parse(convert).sort(() => Math.random() - 0.5);
  const todayDataShuffle = JSON.parse(convert).sort(() => Math.random() - 0.5);
  const listDataShuffle = JSON.parse(convert).sort(() => Math.random() - 0.5);

  const array = [
    {
      type: ContentSortType.RANK,
      title: '오늘의 TOP 20',
      items: topDataShuffle.slice(0, 20)
    },
    {
      type: ContentSortType.LIST,
      title: '지금 방영중인 인기 콘텐츠',
      items: todayDataShuffle.slice(0, 20)
    },
    { type: ContentSortType.LIST, title: '수상작 프로그램', items: listDataShuffle.slice(0, 20) }
  ];

  prisma.$disconnect();

  return NextResponse.json({ data: array, status: 200 });
}
