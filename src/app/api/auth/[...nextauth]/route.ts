import NextAuth from "next-auth"
import { getAuthProviders } from "./providers";


const {
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET,
} = process.env

if (
  !GITHUB_ID ||
  !GITHUB_SECRET ||
  !GOOGLE_CLIENT_ID ||
  !GOOGLE_CLIENT_SECRET ||
  !FACEBOOK_CLIENT_ID ||
  !FACEBOOK_CLIENT_SECRET ||
  !LINKEDIN_CLIENT_ID ||
  !LINKEDIN_CLIENT_SECRET
) {
  throw new Error("Missing necessary environment variables for authentication providers.");
}

const handler = NextAuth({
  providers: getAuthProviders(),
});


export { handler as GET, handler as POST }
