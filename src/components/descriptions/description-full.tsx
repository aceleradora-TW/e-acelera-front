import { Grid } from "@mui/material";
import { theme } from "@/app/config/themes";
import { MarkdownRenderer } from "@/components/UI/markdown-renderer";
import { components } from "./defs/description-full.defs";
import { useTheme } from "@mui/material/styles";
import { AccessibilityProvider } from "@/context/accessibility.context";
interface DescriptionFullProps {
  text: string;
}

export const DescriptionFull: React.FC<DescriptionFullProps> = ({ text }) => {
  const muiTheme = useTheme();
  const contrastEnabled = false;

  const backgroundColor = contrastEnabled? "#000000" : muiTheme.palette.mode === "dark" ? "#555555" : "#f5f5f5";
  const textColor = contrastEnabled? "#f5f5f5" : muiTheme.palette.mode === "dark" ? "#f5f5f5" : "inherit";

  return (
    <Grid
      container
      alignItems="stretch"
      sx={{
        ...theme.customStyles.description,
        height: "100%",
        backgroundColor,
        color: textColor,
      }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <MarkdownRenderer components={components}>{text}</MarkdownRenderer>
      </Grid>
    </Grid>
  );
};
