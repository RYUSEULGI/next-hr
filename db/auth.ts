import { IUser } from '@/interface/user';
import { prisma } from '.';

export async function create(requesetBody: IUser) {
  const user = await prisma.user.create({
    data: requesetBody
  });

  console.log('user', user);
  return user;
}
