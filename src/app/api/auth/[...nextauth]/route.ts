import NextAuth, { NextAuthOptions } from "next-auth"
import { getAuthProviders } from "../../../helpers/providers"

const handler: NextAuthOptions = NextAuth({
  providers: getAuthProviders(),
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.id = user.id
        token.provider = account.provider
        token.accessToken = account.access_token
      }
      return token
    },
  },
})

export { handler as GET, handler as POST }
