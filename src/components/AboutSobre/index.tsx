import { Box, Typography } from "@mui/material";


interface CardAboutAgilProps { 
  description: string;
  textBold?: string;
}

export default function CardAboutAgil({ description, textBold }: CardAboutAgilProps) {
  

    const parts = description.split(textBold!);

  

  return (
    <Box
      minHeight={108}
      border={6}
      py={2}
      px={2}
      sx={{
        width: { xs: 337, md: 386 },
        borderImage: "linear-gradient(#EB658C, #F5AF55) 1",
      }}
    >
      {textBold ? (
        <Typography sx={{maxWidth: {xs: 307, sm: 336}}} variant="body1">
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
