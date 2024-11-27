import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { SelectChangeEvent } from "@mui/material/Select"
import { theme } from "@/app/config/theme"
import { useRouter } from 'next/navigation'


interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%"}: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("statusPending");
  const router = useRouter()

  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("rgb(225, 225, 225)");

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setStatus(value);
    
    //adicionar validação de quando o usuário nao estiver logado redirecionar para o login
    router.push("/login")

    switch (value) {
      case "statusConcluded":
        setBackgroundColor(theme.palette.statusSelect?.light || "");
        break;
      case "statusInProgress":
        setBackgroundColor(theme.palette.statusSelect?.dark || "");
        break;
      case "statusPending":
        setBackgroundColor(theme.palette.statusSelect?.main || "");
        break;
      default:
        setBackgroundColor("");
    }
  };

  return (
    <Box sx={{ backgroundColor, width }}>
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
          <MenuItem

            value="statusConcluded"
          >
            Concluído
          </MenuItem>

          <MenuItem
            value="statusInProgress"
          >
            Em Andamento
          </MenuItem>

          <MenuItem

            value="statusPending"
          >
            Não Iniciado
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
