import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Nouhau",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "282897",
          name: "Brenno",
          username: "brenno",
          password: "senhadificil",
          image: "https://avatars.githubusercontent.com/u/44979517?v=4",
        };

        if (
          credentials?.username !== user.username ||
          credentials?.password !== user.password
        ) {
          return null;
        }
        const { password, ...rest } = user;
        return rest;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
