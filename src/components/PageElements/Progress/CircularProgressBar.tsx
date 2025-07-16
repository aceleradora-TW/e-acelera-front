import React from "react";
import Box from "@mui/material/Box";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

interface CircularProgressWithLabelProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressWithLabelProps> = (({ percentage }: CircularProgressWithLabelProps) => (
    <Box position="relative" display="inline-flex">
       <CircularProgress
        variant="determinate"
        value={100}
        size={50}
        thickness={3}
        sx={{ color: "#aceef5",
          position: "absolute"
         }}
      />

      <CircularProgress
        variant="determinate"
        value={percentage}
        size={50}
        thickness={3}
        sx={{ color: "#002c53"
         }}
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
          fontSize: ".85rem",
        }}
      >
        {`${Math.round(percentage)}%`}
      </Typography>
    </Box>
  ))
export default CircularProgressBar;
