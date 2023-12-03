import { PrismaClient } from '@prisma/client'

const prismaClient = () => {
  return new PrismaClient()
}

const globalForPrisma = (global as unknown) as {
  prisma: ReturnType<typeof prismaClient> | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClient()

export default prisma

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
