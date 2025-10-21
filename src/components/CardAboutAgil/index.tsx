import { Box, Typography, useTheme } from "@mui/material";

interface CardAboutAgilProps {
  description: string;
  textBold?: string;
}

export default function CardAboutAgil({
  description,
  textBold,
}: CardAboutAgilProps) {
  const theme = useTheme();
  
  const parts = description.split(textBold!);
  return (
    <Box sx={theme.customStyles.cardAboutAgil}>
      {textBold ? (
        <Typography sx={{ maxWidth: { xs: 307, sm: 336 } }} variant="body1">
          {parts[0]}
          <Typography fontWeight={600} component={"span"}>
            {textBold}
          </Typography>
          {parts[1]}
        </Typography>
      ) : (
        <Typography maxWidth={336} variant="body1">
          {description}
        </Typography>
      )}
    </Box>
  );
}
