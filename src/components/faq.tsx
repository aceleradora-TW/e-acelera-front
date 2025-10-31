import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Accordion } from "./accordion";
import { FAQ_QUESTIONS } from "@/utils/constants";

export function Faq() {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      sx={{ display: "flex", justifyContent: "center", paddingY: 4 , paddingX: 2}}
    >
      <Grid sx={{ maxWidth: "1292px" }} container spacing={{ xs: 2, md: 4 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            color={theme.palette.textColor?.main}
          >
            Tire suas dúvidas - FAQ
          </Typography>
          <Typography variant="body2">
            Começar algo novo pode gerar muitas perguntas, e tudo bem! Aqui
            estão as dúvidas mais comuns da nossa comunidade, respondidas de
            forma simples e direta.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          {FAQ_QUESTIONS.map((item, i) => (
            <Accordion
              question={item.question}
              answer={item.answer}
              key={i}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
