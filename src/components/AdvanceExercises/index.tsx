import { Box, Typography } from "@mui/material";
import useFetchData from "@/components/fetchData";

interface sequenceExercises {
  text: string;
}

export const AdvanceExercises: React.FC<sequenceExercises> = ({text}) =>{

  return(

    <Box sx={{display: "flex", flexWrap: "wrap"}}>
     <Typography variant="caption" sx={{color: "#002C53",backgroundColor: "#FFDE6B", borderRadius: "10px", padding: "14px 64px"}}>{text}</Typography>
    </Box>
  )
}