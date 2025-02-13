import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { theme } from "@/app/config/theme"
import { ClickButton } from "@/components/ClickButton"
import { ExclamationComponent } from "@/components/ExclamationComponent"
import { useRouter } from "next/navigation"

interface LoginWarningModalProps {
  status: string,
  open: boolean,
  handleClose:() => void
}

export const LoginWarningModal: React.FC<LoginWarningModalProps> = ({status, open, handleClose }) => {
  const router = useRouter()
  const statusSave = (status: string) => {
    localStorage.setItem("statusValue", status)
    localStorage.setItem("activeStatusSelect", "true")
  }
 
  const handlePageRedirectLogin = () => {
    statusSave(status)
    const currentUrl = encodeURIComponent(window.location.href)
    router.push(`/login?callbackUrl=${currentUrl}`)
  }

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={theme.customStyles.styleModal}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "34px" }}>
            <ExclamationComponent color="#EFAE14" />
          </Box>

          <Typography id="modal-modal-title" variant="h3" component="h3" sx={{ color: theme.palette.textColor?.main }}>
            Atenção!
          </Typography>
          <Typography id="modal-modal-description" variant="body1" component="p" sx={{ color: theme.palette.textColor?.light }}>
            Para salvar o status é preciso estar logado!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: "25px", marginBottom: "-14px" }}>
            <ClickButton title="Logar" click={() => handlePageRedirectLogin()} />
            <ClickButton title="Voltar" click={handleClose} />
          </Box>
        </Box>
      </Modal>
  )
}