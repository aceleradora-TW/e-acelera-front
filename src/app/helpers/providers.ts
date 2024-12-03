import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedInProvider from "next-auth/providers/linkedin"
import logger from "@/utils/logger"

const {
  GIT_ID,
  GIT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET,
} = process.env

if (
  !GIT_ID ||
  !GIT_SECRET ||
  !GOOGLE_CLIENT_ID ||
  !GOOGLE_CLIENT_SECRET ||
  !LINKEDIN_CLIENT_ID ||
  !LINKEDIN_CLIENT_SECRET
) {
  logger.error("Missing necessary environment variables for authentication providers.");

  throw new Error("Missing necessary environment variables for authentication providers.");
}
export const getAuthProviders = () => [
  GitHubProvider({
    clientId: GIT_ID!,
    clientSecret: GIT_SECRET!,
  }),
  GoogleProvider({
    clientId: GOOGLE_CLIENT_ID!,
    clientSecret: GOOGLE_CLIENT_SECRET!,
  }),
  FacebookProvider({
    clientId: FACEBOOK_CLIENT_ID!,
    clientSecret: FACEBOOK_CLIENT_SECRET!,
  }),
  LinkedInProvider({
    clientId: LINKEDIN_CLIENT_ID!,
    clientSecret: LINKEDIN_CLIENT_SECRET!,
  }),
];
