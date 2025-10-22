import { Box, Typography, useTheme } from "@mui/material";

export default function FaqQuestion() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 407,
          height: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" color={theme.palette.textColor?.main}>Tire suas dúvidas - FAQ</Typography>
        <Typography variant="body2">
          Começar algo novo pode gerar muitas perguntas, e tudo bem! Aqui estão
          as dúvidas mais comuns da nossa comunidade, respondidas de forma
          simples e direta.
        </Typography>
      </Box>
    </Box>
  );
}
