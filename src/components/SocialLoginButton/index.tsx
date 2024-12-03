import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { theme } from "@/app/config/theme";
import Image, { StaticImageData } from "next/image";
import { Box, Typography } from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>(() => ({
  "&:hover": {
    backgroundColor: theme.palette.buttonHover?.light, 
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
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  platformName,
  onClick,
  platformIcon,
}) => (
  <CustomButton
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
