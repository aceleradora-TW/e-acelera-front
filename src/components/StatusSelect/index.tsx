import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from '@mui/material/Select'
import { SelectChangeEvent } from '@mui/material/Select'
import { theme } from "@/components/config/theme"


export default function StatusSelect() {
  const [status, setStatus] = React.useState<string>("")
  const [backgroundColor, setBackgroundColor] = React.useState<any>("")

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)

    switch (value) {
      case "statusConcluded":
        setBackgroundColor(theme.palette.statusSelect?.light)
        break
      case "statusInProgress":
        setBackgroundColor(theme.palette.statusSelect?.dark)
        break
      case "statusPending":
        setBackgroundColor(theme.palette.statusSelect?.main)
        break
      default:
        setBackgroundColor("")

    }
  }
  
  return (
    <Box sx={{ minWidth: 120, backgroundColor, width: "30%" }}>
      <FormControl fullWidth>
        <InputLabel id="statusLevelling" sx={{ color: "black" }}>
          Status
        </InputLabel>
        <Select
          labelId="statusLevelling"
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
            color: "#000000"
          }}
        >
          <MenuItem value="statusConcluded">Concluido</MenuItem>
          <MenuItem value="statusInProgress">Em andamento</MenuItem>
          <MenuItem value="statusPending">Pendente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
