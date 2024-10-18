import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { theme } from "@/app/config/theme";
import Image, { StaticImageData } from "next/image";
import { Box, Typography } from "@mui/material";

interface ColorButtonProps extends ButtonProps {
  hoverColor: string;
}

const ColorButton = styled(Button)<ColorButtonProps>(({ hoverColor }) => ({
  "&:hover": {
    backgroundColor: hoverColor,
    color: theme.palette.buttonHover?.contrastText,
    border: "none",
  },
  fontSize: "1rem",
  lineHeight: 1.6,
  fontWeight: 500,
  letterSpacing: "0.4px",
  width: "100%",
  borderRadius: "8px",
  textTransform: "none",
  color: "rgb(0,44,83)",
  backgroundColor: "rgb(217,217,217)",
}));

interface LoginButtonProps {
  website: string;
  onClick: () => void;
  icon: StaticImageData;
  hoverColor: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  website,
  onClick,
  icon,
  hoverColor,
}) => (
    <ColorButton
      hoverColor={hoverColor}
      onClick={onClick}
      component="a"
      aria-label={`Entrar com ${website}`}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          src={icon}
          alt={`Ícone da plataforma ${website}`}
          width={38}
          height={38}
        />
        <Typography
          variant="body1"
          sx={{
            minWidth: "10.31rem",
            textAlign: "left",
            marginLeft: 3,
            fontWeight: 550,
          }}
        >
          Entrar com {website}
        </Typography>
      </Box>
    </ColorButton>
);
