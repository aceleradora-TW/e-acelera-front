import * as React from "react"
import Button, { ButtonProps } from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { ReactNode } from "react"
import { SxProps, Theme } from "@mui/material"
import { customStyles } from '@/app/config/themes/components';

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
}: CardProps) => (
    <aside>
      <Stack spacing={2} direction="row" onClick={click}>
        <Button
          variant="contained"
          sx={{
            ...customStyles?.button,
            ...(isActive && { ...customStyles?.buttonActive, }),
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
  );
