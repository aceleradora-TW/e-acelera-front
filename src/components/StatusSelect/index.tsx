import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from '@mui/material/Select'
import { SelectChangeEvent } from '@mui/material/Select'
import { theme } from "@/app/config/theme"

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("statusPending")
  const [backgroundColor, setBackgroundColor] = React.useState<string>("rgb(225, 225, 225)")

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)

    switch (value) {
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
        setBackgroundColor("")

    }
  }

  return (
    <Box sx={{ backgroundColor, width }}>
      <FormControl fullWidth>
        <InputLabel shrink={true} id="statusLeveling" sx={{ color: "black" }}>
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
              borderColor: "black"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black"
            },
            backgroundColor: "#0000000",
            color: "#000000"
          }}
        >
          <MenuItem sx={{border:"2px solid",  borderColor: "black", backgroundColor:"rgba(155, 255, 133)",'&:hover': {
        backgroundColor:"rgba(155, 255, 133, 0.5)" , 
      }, }} value="statusConcluded">Concluído</MenuItem>
          <MenuItem sx={{borderRight:"2px solid",borderLeft:"2px solid",  borderColor: "black", backgroundColor:"rgb(255, 222, 107)",'&:hover': {
        backgroundColor:"rgba(255, 222, 107, 0.5)" , 
      }, }} value="statusInProgress">Em andamento</MenuItem>
          <MenuItem sx={{border:"2px  solid",  borderColor: "black", backgroundColor:"rgb(225, 225, 225)",'&:hover': {
        backgroundColor: "rgba(225, 225, 225, 0.5)" , 
      }, }}value="statusPending">Pendente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
