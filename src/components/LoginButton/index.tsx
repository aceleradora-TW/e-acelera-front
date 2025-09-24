import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.buttonHover?.main,
    color: theme.palette.buttonHover?.contrastText,
    border: "none",
  },
}));

type CardProps = {
  click: () => void;
};

export const LoginButton = ({ click }: CardProps) => {
  const theme = useTheme();
  return (
    <aside>
      <Stack spacing={2} direction="row" onClick={click}>
        <ColorButton
          sx={{ ...theme.customStyles.button, padding: "5px 16px" }}
          variant="contained"
        >
          LOGIN
        </ColorButton>
      </Stack>
    </aside>
  );
};
