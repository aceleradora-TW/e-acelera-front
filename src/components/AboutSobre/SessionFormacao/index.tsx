
import { Box, Typography, useTheme } from "@mui/material";



export default function SessionFormacao({ title, isLarge }: { title: string; isLarge?: boolean }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme.customStyles.sessionFormacao(isLarge)
      }}
    >
      <Typography sx={{ textAlign: "center"}}>{title}</Typography>
    </Box>
  );
}
