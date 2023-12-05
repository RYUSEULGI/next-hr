import { SERVER_ERROR_MESSAGE } from '@/constants';
import prisma from '@/db';
import { LoginType } from '@/lib/api/user/user.types';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export enum Crediential {
  LOGIN = 'login'
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: Crediential.LOGIN,
      type: 'credentials',
      credentials: {
        username: {}
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error(SERVER_ERROR_MESSAGE);
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        });

        if (!user) {
          throw new Error('아이디를 확인해주세요');
        }

        return { ...user, id: user.id.toString() };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },
  pages: {
    signIn: `/login?type=${LoginType.이메일}`
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    // TODO: jwt, session
  }
};
