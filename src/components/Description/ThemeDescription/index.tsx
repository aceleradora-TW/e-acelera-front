import React from "react";
import { Divider, Box, Typography} from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";
import { Padding } from "@mui/icons-material";

interface ThemedescriptionProps {
  text: string
}

export const ThemeDescription: React.FC<ThemedescriptionProps> = ({ text }) => {
    let descriptionSize: number = text.length
    let middleTextPoint: number= descriptionSize/2
    let textBox1:string=text.substring(0, middleTextPoint)
    let textBox2:string=text.substring(middleTextPoint, text.length)
    
  return (
    <ThemeConfig>
        <Box
          sx={
            theme.customStyles.description
          }
        >
          <Box sx={{ width: "49%",}}>
            <Typography variant="body1">
              {textBox1}
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem color="black" sx={{margin: "0 0px"}}/>

          <Box sx={{ width: "49%"}}>
            <Typography variant="body1">
              {textBox2}
            </Typography>
          </Box>
        </Box>
      </ThemeConfig>
  )
}