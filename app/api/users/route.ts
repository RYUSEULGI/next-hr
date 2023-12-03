import prisma from '@/db'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorized user' }, { status: 401 })
  }

  const data = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  })

  return NextResponse.json(data, {
    status: 200,
  })
}
