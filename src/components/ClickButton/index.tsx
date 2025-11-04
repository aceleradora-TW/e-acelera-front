import * as React from "react"
import Button, { ButtonProps } from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { ReactNode } from "react"
import { SxProps, Theme, useTheme } from "@mui/material"

type CardProps = {
  title?: string,
  click: () => void,
  endIcon?: ReactNode,
  backIcon?: ReactNode,
  sx?: ButtonProps['sx'],
  isActive?: boolean,
}

export const ClickButton = ({
  title,
  click,
  endIcon,
  backIcon,
  sx,
  isActive,
}: CardProps) => {
  const theme = useTheme();
  return (
    <aside>
      <Stack spacing={2} direction="row" onClick={click}>
        <Button
          variant="contained"
          sx={{
            ...theme.customStyles.button,
            ...(isActive && { ...theme.customStyles.buttonActive, }),
            ...sx,
          } as SxProps<Theme>}
        >
          <>
            {backIcon}
            {title}
            {endIcon}
          </>
        </Button>
      </Stack>
    </aside>
  )
};
