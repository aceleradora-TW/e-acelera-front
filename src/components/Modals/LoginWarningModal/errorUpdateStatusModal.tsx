import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { theme } from "@/app/config/themes"
import { ClickButton } from "@/components/ClickButton"
import { ExclamationComponent } from "@/components/ExclamationComponent"

interface ErrorUpdateStatusModalProps {
  open: boolean,
  handleClose: () => void
}

export const ErrorUpdateStatusModal: React.FC<ErrorUpdateStatusModalProps> = ({ open, handleClose }) => (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-error-title"
      aria-describedby="modal-error-description"
    >

      <Box sx={theme.customStyles.styleModal}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "34px" }}>
          <ExclamationComponent color="#EFAE14" />
        </Box>
        <Typography id="modal-error-title" variant="h3" component="h3" sx={{ color: theme.palette.textColor?.main }}>
          Ops!
        </Typography>
        <Typography id="modal-error-description" variant="body1" component="p" sx={{ color: theme.palette.textColor?.light }}>
          Estamos enfrentando problemas. Não conseguimos salvar o seu status agora.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "25px", marginBottom: "-14px" }}>
          <ClickButton title="Fechar" click={handleClose} />
        </Box>
      </Box>
    </Modal>
  )