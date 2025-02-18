import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { SelectChangeEvent } from "@mui/material/Select"
import { theme } from "@/app/config/theme"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useExerciseStatus } from "@/components/fetchExerciseStatus"
import { LoginWarningModal } from "../Modals/LoginWarningModal"
import { ErrorStatusModal } from "../Modals/ErrorStatusModal"
interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("NotStarted")
  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("rgb(225, 225, 225)")
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [errorModalOpen, setErrorModalOpen] = React.useState<boolean>(false)
  const statusSelectRef = React.useRef<HTMLDivElement>(null)
  const { data: session } = useSession()
  const pathname = usePathname()

  // React.useEffect(() => {
  //   if (typeof window === "undefined") return

  //   const statusValue = localStorage.getItem("statusValue") || "NotStarted"
  //   const isActive = localStorage.getItem("activeStatusSelect") === "true"
  //   const validStatuses = ["NotStarted", "InProgress", "Completed"]

  //   if (statusSelectRef.current) {
  //     if (session && isActive) {
  //       setStatus(validStatuses.includes(statusValue) ? statusValue : "NotStarted")
  //       console.log("oi, estou funcionando 3")
  //     }

  //     statusSelectRef.current.classList.remove("ativo")
  //     localStorage.removeItem("activeStatusSelect")
  //     localStorage.removeItem("statusValue")
  //     console.log("oi, estou funcionando 2")
  //   }
  // }, [])

  const extractIdsFromUrl = (pathname: string): string[] | null => {
    const parts: string[] = pathname.split("/")

    if (parts.length === 5) {
      const topicId = parts[3].split("-")[0]
      const itemId = parts[4].split("-")[0]

      return (topicId && itemId) ? [topicId, itemId] : null

    }

    return null
  }

  const ids = extractIdsFromUrl(pathname)
  
  const {
    status: exerciseStatus,
    isLoading,
    updateStatus,
  } = useExerciseStatus({
    topicId: ids?.[0] || "",
    itemId: ids?.[1] || "",
  })

  const handleChange = async (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)

    if (!session && statusSelectRef.current) { 
      statusSelectRef.current.classList.add("ativo")
      setIsModalOpen(true)
    }

    if (!ids) return

    const reqUpdateStatus = await updateStatus(value)

    if(!reqUpdateStatus && session) {
      setErrorModalOpen(true)
    }
  } 
  
  const heandleCloseModals = () => {
    if(statusSelectRef.current) {
      statusSelectRef.current.classList.remove("ativo")
    }
    setIsModalOpen(false)
    setErrorModalOpen(false)
    setStatus("NotStarted")
  }
  
  React.useEffect(() => {
    if (exerciseStatus) {
      setStatus(exerciseStatus)
    }
  }, [exerciseStatus])
  
  React.useMemo(() => {
    switch (status) {
      case "Completed":
        setBackgroundColor(theme.palette.statusSelect?.light || "")
        break
      case "InProgress":
        setBackgroundColor(theme.palette.statusSelect?.dark || "")
        break
      case "NotStarted":
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
        minWidth: "200px",
        "@media (max-width: 600px)": {
          maxWidth: "264px",
        },
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
          value={status || "NotStarted"}
          label="Status"
          onChange={handleChange}
          disabled={isLoading}
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
          <MenuItem value="NotStarted">Não Iniciado</MenuItem>
          <MenuItem value="InProgress">Em Andamento</MenuItem>
          <MenuItem value="Completed">Concluído</MenuItem>
        </Select>
      </FormControl>
      <LoginWarningModal status={status} open={isModalOpen} handleClose={heandleCloseModals}/>
      <ErrorStatusModal open={errorModalOpen} handleClose={heandleCloseModals} />
    </Box>
  )
}
