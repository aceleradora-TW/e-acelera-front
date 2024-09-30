"use client"
import { ClickButton } from "@/components/ClickButton";
import { Box } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Box>
      <button onClick={() => signIn("github", {callbackUrl: "/Logado"})}>
      Logar com github
      </button>
    </Box>
  );
}
