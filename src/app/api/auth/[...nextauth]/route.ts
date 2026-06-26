import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import { getAuthProviders } from "../../../helpers/providers"



export const authOptions: NextAuthOptions = {
  providers: getAuthProviders(),

  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.id = user.id
        token.provider = account.provider
        token.accessToken = account.access_token

        if (user) {
          const role = await fetch(
            `${process.env.NEXTAUTH_URL}/api/user/getRole`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                email: user.email || "",
              },
            }
          )

          const userData = await role.json()

          token.role = userData.role
        }
      }

      return token
    },

    session: ({ session, token }) => {
      session.user = {
        ...session.user,
        role: token.role,
      }

      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// export { handler as GET, handler as POST }