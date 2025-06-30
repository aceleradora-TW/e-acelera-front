import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";


interface CircularProgressWithLabelProps {
  value: number;
}

const CircularProgressBar: React.FC<CircularProgressWithLabelProps> = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        thickness={5}
        sx={{ color: "#002c53" }}
      />
      <Typography
        variant="caption"
        component="div"
        color="textSecondary"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1rem",
        }}
      >
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  );
};

export default CircularProgressBar;
