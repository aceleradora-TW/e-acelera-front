import NextAuth from "next-auth"
import { getAuthProviders } from "./providers";

const handler = NextAuth({
  providers: getAuthProviders(),

  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.id = user.id;
        token.provider = account.provider;
        token.accessToken = account.access_token;
      }
      return token;
    },
    
    async redirect({ url, baseUrl }) {
      if (typeof window !== "undefined") {
        const storedRedirectUrl = localStorage.getItem("redirectAfterLogin");
        if (storedRedirectUrl) {
          return storedRedirectUrl;
        }
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    
  },
});


export { handler as GET, handler as POST }
