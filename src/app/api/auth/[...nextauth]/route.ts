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

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Adiciona o ID do usuário à sessão
        session.user.provider = token.provider; // Adiciona o provedor à sessão
        session.user.accessToken = token.accessToken; // Adiciona o access token à sessão
      }
      return session;
    },

    // Callback para redirecionamento após o login
    async redirect({ url, baseUrl }) {
      const redirectUrl = url || `${baseUrl}/dashboard`; // Defina o redirecionamento padrão
      return redirectUrl;
    },
    
  },
});


export { handler as GET, handler as POST }
