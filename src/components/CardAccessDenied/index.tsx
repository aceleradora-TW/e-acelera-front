"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "@/app/config/themes";
import Image from "next/image";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const CardAccessDenied = () => {
  const { data: session } = useSession();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    if (session?.user) {
      setUserEmail(session.user.email || "Desconhecido");
      setUserRole(session.user.role || "SEM ROLE");
      console.log(
        `[403] Usuário ${session.user.email} com role ${session.user.role} bloqueado do CMS`,
      );
    }
  }, [session]);

  return (
    <Box sx={theme.customStyles.containerLogin}>
      <Box sx={theme.customStyles.cardLoginBox}>
        <Grid container spacing={2.5} sx={{ textAlign: "center" }}>
          {/* Logo e título */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.textColor?.main, fontWeight: "bold" }}
            >
              Acesso Negado
            </Typography>
          </Grid>

          {/* Ícone */}
          <Grid item xs={12}>
            <LockIcon
              sx={{ fontSize: 80, color: theme.palette.bgColor?.light }}
            />
          </Grid>

          {/* Informação do usuário */}
          {session?.user && (
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: theme.palette.bgColor?.light,
                  p: 2,
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.textColor?.main }}
                >
                  <strong>Usuário:</strong> {userEmail}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.textColor?.main, mt: 1 }}
                >
                  <strong>Role:</strong>{" "}
                  <span style={{ color: "#ff6b6b" }}>{userRole}</span>
                </Typography>
              </Box>
            </Grid>
          )}

          {/* Mensagem clara sobre 403 */}
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.textColor?.light }}
            >
              Você não tem permissão para acessar esta página.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.textColor?.light, mt: 1 }}
            >
              Apenas usuários com role <strong>ADMIN</strong> ou{" "}
              <strong>EDITOR</strong> podem acessar o CMS.
            </Typography>
          </Grid>

          {/* Botões de ação */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.buttonHover?.main,
                    color: theme.palette.buttonHover?.contrastText,
                    padding: "10px 24px",
                    "&:hover": {
                      backgroundColor: theme.palette.bgColor?.light,
                    },
                  }}
                >
                  Voltar para Home
                </Button>
              </Link>
              <Button
                variant="outlined"
                onClick={() => signOut({ callbackUrl: "/login" })}
                sx={{
                  borderColor: theme.palette.bgColor?.light,
                  color: theme.palette.bgColor?.light,
                  padding: "10px 24px",
                  "&:hover": {
                    borderColor: theme.palette.buttonHover?.main,
                    color: theme.palette.buttonHover?.main,
                  },
                }}
              >
                Logout
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
