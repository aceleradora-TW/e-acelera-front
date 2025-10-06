import { Box, Typography } from "@mui/material";



export default function SessionFormacao({ title, isLarge }: { title: string; isLarge?: boolean }) {
  return (
    <Box
      sx={{
        width: isLarge ? { xs: "100%", md: "97%" } : { xs: "48%", md: "46%" },
        flexWrap: "wrap",
        minHeight: 67,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#0b497a",
        borderRadius: 1,
        color: "white",
        boxShadow: 4,
        overflowWrap: "break-word",
      }}
    >
      <Typography sx={{ textAlign: "center"}}>{title}</Typography>
    </Box>
  );
}
