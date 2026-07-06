import NextAuth from "next-auth";
import { getAuthProviders } from "../../../helpers/providers";

const handler = NextAuth({
  providers: getAuthProviders(),
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.id = user.id;
        token.provider = account.provider;
        token.accessToken = account.access_token;

        try {
          const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
          const backendUrl =
            process.env.BACKEND_BASE_URL || "http://localhost:5002";

// Evitar logar PII (ex.: email) durante o login.

          // 1. Primeiro: Registrar/validar o usuário no backend
          console.log("[NextAuth] Registrando usuário no backend...");
          const loginResponse = await fetch(`${backendUrl}/login`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${account.access_token}`,
              "Content-Type": "application/json",
            },
          });

// Resposta do backend omitida para evitar log de dados sensíveis.

          if (!loginResponse.ok) {
            console.warn(
              `[NextAuth] Falha ao registrar usuário no backend: ${loginResponse.status}`,
            );
          }

          // 2. Depois: Buscar a role do usuário
          console.log("[NextAuth] Buscando role do usuário...");
          const roleResponse = await fetch(`${baseUrl}/api/user/getRole`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              email: user.email || "",
            },
          });

          const roleText = await roleResponse.text();
          console.log(
            `[NextAuth] /api/user/getRole resposta: ${roleResponse.status} - ${roleText}`,
          );

          if (roleResponse.ok) {
            const userData = JSON.parse(roleText);
            token.role = userData.role || "VIEWER";
            console.log(`[NextAuth] ✅ Role atribuída: ${token.role}`);
          } else {
            console.error(
              `[NextAuth] ❌ Erro ao buscar role: ${roleResponse.status}`,
            );
            token.role = "VIEWER";
          }
        } catch (error) {
          console.error("[NextAuth] ❌ Erro no fluxo de autenticação:", error);
          token.role = "VIEWER";
        }
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user.role = token.role;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
