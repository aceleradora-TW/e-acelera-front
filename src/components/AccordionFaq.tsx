import { Accordion, AccordionDetails, AccordionSummary, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionFaqProps { 
  question: string;
  answer: string;
}

export default function AccordionFaq({ question, answer }: AccordionFaqProps) {
  const theme = useTheme();
  return (
    <Accordion
      sx={{
        border: "1px solid",
        mb: "8px",
        borderColor: theme.palette.textColor?.main,
        borderRadius: 1,
        boxShadow: "0em 0.4em 0.4em rgb(44 44 44 / 40%)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.bgColor?.main }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          backgroundColor: theme.palette.textColor?.main,
          color: theme.palette.bgColor?.main,
          boxShadow: "0em 0.2em 0.4em rgb(44 44 44 / 40%)",
        }}
      >
        <Typography component="span">{ question }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        { answer }
      </AccordionDetails>
    </Accordion>
  );
}
