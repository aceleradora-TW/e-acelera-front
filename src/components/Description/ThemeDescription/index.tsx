import React from "react";
import { Divider, Box, Typography} from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";

interface ThemedescriptionProps {
  text: string
}

export const ThemeDescription: React.FC<ThemedescriptionProps> = ({ text }) => {
    let descriptionSize: number = 0
    for(let i:number=0; i< text.length; i++){
    descriptionSize = i
  }

  if (descriptionSize >= 1200) {
    let middleTextPoint: number= descriptionSize/2
    let textBox1:string=text.slice(0,middleTextPoint)
    let textBox2:string=text.slice(middleTextPoint, text.length)
    return (
      <ThemeConfig>
        <Box
          sx={
            theme.customStyles.description
          }
        >
          <Box sx={{ width: "45%" }}>
            <Typography variant="body1">
              {textBox1}
            </Typography>
          </Box>


          <Divider orientation="vertical" flexItem color="black"/>

          <Box sx={{ width: "45%" }}>
            <Typography variant="body1">
              {textBox2}
            </Typography>
          </Box>
        </Box>
      </ThemeConfig>
    );
    } else {
    return(
      <ThemeConfig>
        <Box
            sx={
              theme.customStyles.description
            }
        >
          <Typography variant="body1">
            {text}
          </Typography>
        </Box>
      </ThemeConfig>
      )
    }
}
