import { Grid} from "@mui/material";
import { theme } from "@/app/config/themes";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import {components} from "./defs/description-full.defs";

interface DescriptionFullProps {
  text: string;
}

export const DescriptionFull: React.FC<DescriptionFullProps> = ({ text }) => (
    <Grid
      container
      alignItems="stretch"
      sx={{ ...theme.customStyles.description, height: "100%" }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <MarkdownRenderer
          components={components}
        >
          {text}
        </MarkdownRenderer>

      </Grid>
    </Grid>
  );
