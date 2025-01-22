import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { SelectChangeEvent } from "@mui/material/Select"
import { theme } from "@/app/config/theme"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  // const response: Response = await fetch(url, {
  //   method: "PUT",
  //   headers: {
  //     "Authorization": "Bearer ",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ status: itemStatus }),
  // });

  const [status, setStatus] = React.useState<string>("statusPending")
  const [backgroundColor, setBackgroundColor] = React.useState<string>("rgb(225, 225, 225)")
  const router = useRouter()
  const { data: session } = useSession()

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)


    if (!session) {
      const currentUrl = encodeURIComponent(window.location.href)
      router.push(`/login?callbackUrl=${currentUrl}`)
    }
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
    </Box>
  )
}