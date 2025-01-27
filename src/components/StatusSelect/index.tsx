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

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%"
}

export default function StatusSelect({ width = "30%" }: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("NotStarted")
  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("rgb(225, 225, 225)")
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  // const { data: session } = useSession()
  const session = React.useMemo(() => {
    return {
      user: { email: "teste@gmail.com" },
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTczODAwMDIzMiwiZXhwIjoxNzM4MDAzODMyfQ.Kf9-1Vc4z50hvnwF1pjd18AN8CHklivmqa_wzCf6CuI",
    }
  }, [])

  const pathname = usePathname()

  const extractIdsFromUrl = (pathname: string): string[] | null => {
    const parts = pathname.split("/")
    const topicId = parts[3].split("-")[0]
    const itemId = parts[4].split("-")[0]

    if (topicId && itemId) {
      const ids = [topicId, itemId]
      return ids
    }

    return null
  }

  const fetchStatus = React.useCallback(async () => {
    if (session) {
      const ids = extractIdsFromUrl(pathname)
      if (!ids) return

      try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL
        const response = await fetch(
          `${baseUrl}/topic/${ids[0]}/item/${ids[1]}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        )

        if (!response.ok) {
          console.error(
            `Erro na API: ${response.status} - ${response.statusText}`
          )
          return
        }

        const data = await response.json()
        const statusData = data[0].itemStatus

        const validStatuses = ["NotStarted", "InProgress", "Completed"]
        if (validStatuses.includes(statusData)) {
          setStatus(statusData)
        } else {
          console.warn(`Status inválido recebido da API: ${data.itemStatus}`)
          setStatus("NotStarted")
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição GET:", error)
      }
    }
  }, [session, pathname])

  React.useEffect(() => {
    fetchStatus()
  }, [fetchStatus])

  const handleChange = async (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setStatus(value)

    if (!session) {
      const currentUrl = encodeURIComponent(window.location.href)
      router.push(`/login?callbackUrl=${currentUrl}`)
      return
    }

    const ids = extractIdsFromUrl(pathname)
    if (!ids) return

    setIsLoading(true)

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

      const response = await fetch(
        `${baseUrl}/topic/${ids[0]}/item/${ids[1]}/status`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemStatus: value }),
        }
      )

      if (!response.ok) {
        console.error(
          `Erro na API: ${response.status} - ${response.statusText}`
        )
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
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
