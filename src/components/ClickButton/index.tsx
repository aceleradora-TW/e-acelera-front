import * as React from "react"
import Button, { ButtonProps } from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { ReactNode } from "react"
import { customStyles } from "@/app/config/themes/components"
import { SxProps, Theme } from "@mui/material"

type CardProps = {
  title?: string,
  click: () => void,
  endIcon?: ReactNode,
  backIcon?: ReactNode,
  sx?: ButtonProps['sx'],
  isActive?: boolean,
  isDarkMode?: boolean,
}

export const ClickButton = ({
  title,
  click,
  endIcon,
  backIcon,
  sx,
  isActive,
  isDarkMode,
}: CardProps) => (
  <aside>
    <Stack spacing={2} direction="row" onClick={click}>
      <Button
        variant="contained"
        sx={{
          ...customStyles.button,
          ...(isDarkMode && {
            backgroundColor: "#222",
            color: "#E0E0E0",
            border: "1px solid #E0E0E0",
          }),
          ...(isActive && {...customStyles.buttonActive,}),
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
