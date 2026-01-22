import ReactMarkdown from "react-markdown";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAccessibility } from "@/context/accessibility.context";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const { themeMode } = useAccessibility();

  return (
    <MuiAccordion
      sx={{
        border: "1px solid",
        mb: "8px",
        borderColor: "text.primary",
        borderRadius: 1,
        boxShadow: "0em 0.4em 0.4em rgb(44 44 44 / 40%)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "sameColor.white" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          backgroundColor: "bgColor.light",
          color: "sameColor.white",
          boxShadow: "0em 0.2em 0.4em rgb(44 44 44 / 40%)",
          borderRadius: 0.5,
        }}
      >
        <Typography component="span">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                style={{ color: themeMode === "dark" ? "#85b0d6" : undefined }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {answer}
        </ReactMarkdown>
      </AccordionDetails>
    </MuiAccordion>
  );
}
