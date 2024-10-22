import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { theme } from "@/app/config/theme";
import Image, { StaticImageData } from "next/image";
import { Box, Typography } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  hoverBackgroundColor: string;
}

const CustomButton = styled(Button)<CustomButtonProps>(({ hoverBackgroundColor }) => ({
  "&:hover": {
    backgroundColor: hoverBackgroundColor,
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

interface SocialLoginButtonProps {
  platformName: string;
  onClick: () => void;
  platformIcon: StaticImageData;
  hoverBackgroundColor: string;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  platformName,
  onClick,
  platformIcon,
  hoverBackgroundColor,
}) => (
  <CustomButton
    hoverBackgroundColor={hoverBackgroundColor}
    onClick={onClick}
    component="a"
    aria-label={`Entrar com ${platformName}`}
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
        src={platformIcon}
        alt={`Ícone da plataforma ${platformName}`}
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
        Entrar com {platformName}
      </Typography>
    </Box>
  </CustomButton>
);
