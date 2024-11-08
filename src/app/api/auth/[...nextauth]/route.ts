import NextAuth from "next-auth"
import { getAuthProviders } from "./providers";

const handler = NextAuth({
  providers: getAuthProviders(),
});


export { handler as GET, handler as POST }
