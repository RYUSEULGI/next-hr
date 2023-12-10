import { SERVER_ERROR_MESSAGE } from '@/constants';
import prisma from '@/db';
import { LoginType } from '@/lib/api/user/user.types';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export enum Credentials {
  LOGIN = 'login'
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: Credentials.LOGIN,
      type: 'credentials',
      credentials: {
        email: {}
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error(SERVER_ERROR_MESSAGE);
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user) {
          throw new Error('아이디를 확인해주세요');
        }

        return user;
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
    session: async ({ session }) => {
      const user = await prisma.user.findUnique({
        where: { email: session.user?.email! },
        select: { id: true, email: true, name: true }
      });

      session.user = user!;

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    }
  }
};
