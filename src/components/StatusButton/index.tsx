import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function StatusButton() {
  const [status, setStatus] = React.useState<string>("")
  const [backgroundColor, setBackgroundColor] = React.useState<string>("")

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)

    switch (value) {
      case "done":
        setBackgroundColor("bg-status-color-success")
        break
      case "inProgress":
        setBackgroundColor("bg-status-color-inprogress")
        break
      case "pending":
        setBackgroundColor("bg-button-send")
        break
      default:
        setBackgroundColor("")
    }
  }

  return (
    <Box className={`${backgroundColor}`} sx={{ minWidth: 120, width: "30%" }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
          <MenuItem value="done">Concluido</MenuItem>
          <MenuItem value="inProgress">Em andamento</MenuItem>
          <MenuItem value="pending">Pendente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
