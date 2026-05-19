import NextAuth from "next-auth"
import { getAuthProviders } from "../../../helpers/providers"

const handler = NextAuth({
  providers: getAuthProviders(),
  callbacks: {
    async jwt({ token, user, account }) {

      if (user) {
        token.role = user.role || "user"
      }
      
      if (account) {
        token.id = user.id
        token.provider = account.provider
        token.accessToken = account.access_token
      }
      return token
    },

    async session ({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
