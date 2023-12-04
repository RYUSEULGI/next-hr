import { prisma } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const requesetBody = await req.json();

  try {
    const exists = await prisma.user.findUnique({
      where: {
        username: requesetBody.username
      }
    });

    if (exists) {
      return NextResponse.json({ message: '이미 가입된 아이디 입니다.' }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: requesetBody
    });

    return NextResponse.json({ data: '' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: '서버에 오류가 발생하였습니다.', status: 500 });
  }
}
