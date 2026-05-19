/* eslint-disable */
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** Oauth access token */
      token?: accessToken;
      role?: string | null;
    } & DefaultSession["user"];
  }

  
  interface User {
    role?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string | null;
  }
}