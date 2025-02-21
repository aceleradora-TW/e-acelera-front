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
import { usePathname } from "next/navigation"
import { useExerciseStatus } from "@/components/fetchExerciseStatus"

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("NotStarted")
  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("rgb(225, 225, 225)")
  const router = useRouter()
  const { data: session } = useSession()

  const pathname = usePathname()

  const getIdsTopcisFromUrl = (pathname: string): string[] | null => {
    const parts: string[] = pathname.split("/")
    
    if (parts.length === 4) {
      const topicId = parts[3].split("-")[0]

    return (topicId) ? [topicId] : null

    }

    return null
  }
  const topicIds = getIdsTopcisFromUrl(pathname)

  const topicIdsRef = React.useRef<string[] | null>(null);
 
  const requisicao = async (topicIds: string[] | null) => {

    if (!topicIds || JSON.stringify(topicIds) === JSON.stringify(topicIdsRef.current)) {
      return null;
    }

    try{
    topicIdsRef.current = topicIds;
    const response = await fetch(`/api/backend/getTopicExercisesStatus`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "topicId":topicIds[0], 
      },
    });
  
    const data = await response.json();
    console.log(data)
    return data;
  }catch{
    console.error("deu erroo")
  }
  };

  React.useEffect(() => {
    requisicao(topicIds);
  }, [topicIds]);
 
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

    if (!session) {
      const currentUrl = encodeURIComponent(window.location.href)
      router.push(`/login?callbackUrl=${currentUrl}`)
      return
    }

    if (!ids) return
    await updateStatus(value)
  }

  React.useEffect(() => { 
    if(exerciseStatus && ids){
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
    </Box>
  )
}
