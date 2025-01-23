import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import { theme } from "@/app/config/theme";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%";
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("statusPending");
  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("rgb(225, 225, 225)");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  //const { data: session } = useSession();
  const session = { user: { email: "teste@gmail.com" }, accessToken: "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTczNzYzNzM0OSwiZXhwIjoxNzM3NjQwOTQ5fQ.7VPT0cgN_sIOUJNunNR4kcgAMLWoJL9PuzyDtUVkEM0" };

  const pathname = usePathname();

  const extractIdsFromUrl = (pathname: string): string[] | null => {
    const parts = pathname.split("/");
    const topicId = parts[3];
    const itemId = parts[4];

    if (topicId && itemId) {
      const ids = [topicId, itemId];
      return ids;
    }

    return null;
  };

  const handleChange = async (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setStatus(value);
  
    if (!session) {
      const currentUrl = encodeURIComponent(window.location.href);
      router.push(`/login?callbackUrl=${currentUrl}`);
      return;
    }
  
    const ids = extractIdsFromUrl(pathname);
    if (!ids) return;
  
    setIsLoading(true);
  
    try {
      const response = await fetch(
        `http://localhost:5002/topic/${ids[0]}/item/${ids[1]}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`
          },
          body: JSON.stringify({ status: value }),
        }
      );
  
      if (!response.ok) {
        console.error(`Erro na API: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    } finally {
      setIsLoading(false); 
    }
  };
  
  React.useEffect(() => {
    switch (status) {
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
        setBackgroundColor("rgb(225, 225, 225)");
    }
  }, [status]);

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
          notched={true}
          labelId="statusLeveling"
          id="statusSelect"
          value={status}
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
          <MenuItem value="statusPending">Não Iniciado</MenuItem>
          <MenuItem value="statusInProgress">Em Andamento</MenuItem>
          <MenuItem value="statusConcluded">Concluído</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
