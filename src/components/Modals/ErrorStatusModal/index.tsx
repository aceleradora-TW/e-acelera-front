import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { theme } from "@/app/config/theme"
import { ClickButton } from "@/components/ClickButton"
import { ExclamationComponent } from "@/components/ExclamationComponent"

interface ErrorStatusModalProps {
  open: boolean,
  handleClose:() => void
}

export const ErrorStatusModal: React.FC<ErrorStatusModalProps> = ({open, handleClose}) => {
   
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={theme.customStyles.styleModal}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "34px" }}>
            <ExclamationComponent color="#a60000" />
          </Box>

          <Typography id="modal-modal-title" variant="h3" component="h3" sx={{ color: theme.palette.textColor?.main }}>
            Erro!
          </Typography>
          <Typography id="modal-modal-description" variant="body1" component="p" sx={{ color: theme.palette.textColor?.light }}>
            Não foi possivel salvar o status!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: "25px", marginBottom: "-14px" }}>
            <ClickButton title="Voltar" click={handleClose} />
          </Box>
        </Box>
      </Modal>

  )
}