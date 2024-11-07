import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedInProvider from "next-auth/providers/linkedin"

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

export const getAuthProviders = () => [
    GitHubProvider({
      clientId: GITHUB_ID!,
      clientSecret: GITHUB_SECRET!,
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
