import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { SelectChangeEvent } from "@mui/material/Select"
import { theme } from "@/app/config/theme"
import { useSession } from "next-auth/react"
import { LoginWarningModal } from "../Modals/LoginWarningModal"

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("statusPending")
  const [backgroundColor, setBackgroundColor] = React.useState<string>("rgb(225, 225, 225)")
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const { data: session } = useSession()
  const statusSelectRef = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const statusValue = localStorage.getItem("statusValue") || "statusPending"
      const isActive = localStorage.getItem("activeStatusSelect") === "true"
  
      if (isActive && statusSelectRef.current) {
        const validStatuses = ["statusPending", "statusInProgress", "statusConcluded"]
        setStatus(validStatuses.includes(statusValue) ? statusValue : "statusPending")
  
        statusSelectRef.current.classList.remove("ativo")
        localStorage.removeItem("activeStatusSelect")
        localStorage.removeItem("statusValue")
      }
    }
  }, [])
  
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)
     if (!session && statusSelectRef.current) { 
      statusSelectRef.current.classList.add("ativo")
      setIsModalOpen(true)
    }
  }

  const heandleCloseModal = () => {
    if(statusSelectRef.current){
      statusSelectRef.current.classList.remove("ativo")
    }
    setIsModalOpen(false)
    setStatus("statusPending")
  }

  React.useEffect(() => {
    switch (status) {
      case "statusConcluded":
        setBackgroundColor(theme.palette.statusSelect?.light || "")
        break
      case "statusInProgress":
        setBackgroundColor(theme.palette.statusSelect?.dark || "")
        break
      case "statusPending":
        setBackgroundColor(theme.palette.statusSelect?.main || "")
        break
      default:
        setBackgroundColor("rgb(225, 225, 225)")
    }
  }, [status])

  return (
    <Box
      sx={{
        backgroundColor,
        width,
        minWidth: '200px',
        '@media (max-width: 600px)': {
          maxWidth: '264px'
        }
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          shrink={true}
          id="statusLeveling"
          sx={{
            color: "#000000",
            "&.Mui-focused": {
              color: "#000000",
            },
          }}
        >
          Status
        </InputLabel>
        <Select
          ref= {statusSelectRef}
          notched={true}
          labelId="statusLeveling"
          id="statusSelect"
          value={status}
          label="Status"
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000000",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #000000",
            },
            height: "40px",
          }}
        >
          <MenuItem value="statusPending">Não Iniciado</MenuItem>
          <MenuItem value="statusInProgress">Em Andamento</MenuItem>
          <MenuItem value="statusConcluded">Concluído</MenuItem>
        </Select>
      </FormControl>
      <LoginWarningModal status={status} open={isModalOpen} handleClose={heandleCloseModal}/>
    </Box>
  )
}