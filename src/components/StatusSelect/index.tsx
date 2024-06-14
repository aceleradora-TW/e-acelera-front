import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

export default function StatusSelect() {
  const [status, setStatus] = React.useState<string>("")
  const [backgroundColor, setBackgroundColor] = React.useState<string>("")

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)

    switch (value) {
      case "green":
        setBackgroundColor("#9EFF85")
        break
      case "orange":
        setBackgroundColor("#FFDE6B")
        break
      case "light":
        setBackgroundColor("#ffffff")
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
          <MenuItem value="green">Concluido</MenuItem>
          <MenuItem value="orange">Em andamento</MenuItem>
          <MenuItem value="light">Pendente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
