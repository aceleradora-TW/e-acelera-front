import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { theme } from '@/app/config/theme';
import { ClickButton } from '@/components/ClickButton';
import { ExclamationComponent } from '@/components/ExclamationComponent';
import { useRouter } from "next/navigation"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #002C53',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function LoginWarningModal() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageRedirectLogin = () => {
    const currentUrl = encodeURIComponent(window.location.href)
    router.push(`/login?callbackUrl=${currentUrl}`)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "34px" }}>
            <ExclamationComponent color="#EFAE14"/>
          </Box>

          <Typography id="modal-modal-title" variant="h3" component="h3" sx={{ color: theme.palette.textColor?.main, textAlign: "center" }}>
            Atenção!
          </Typography>
          <Typography id="modal-modal-description" variant="body1" component="p" sx={{ color: theme.palette.textColor?.light, textAlign: "center" }}>
            Para salvar o status é preciso estar logado!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: "25px", marginBottom: "-14px" }}>
            <ClickButton title='Logar' click={() => handlePageRedirectLogin()} />
            <ClickButton title='Voltar' click={() => setOpen(false)} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}