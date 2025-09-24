import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { SelectChangeEvent } from "@mui/material/Select"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useStatus } from "@/components/fetchStatus/fetchStatusExercise"
import { LoginWarningModal } from "../Modals/LoginWarningModal"
import { ElementType } from "@/types/typeTopic"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { useTheme } from "@mui/material"

interface StatusSelectProps {
  width?: "30%" | "70%" | "100%";
  id?: string;
  elementType: ElementType;
}

export default function StatusSelect({
  width = "30%",
  id,
  elementType,
}: StatusSelectProps) {
  const [status, setStatus] = React.useState<string>("NotStarted");
  const [backgroundColor, setBackgroundColor] = React.useState<string>("rgb(225, 225, 225)");
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { data: session } = useSession();
  const statusSelectRef = React.useRef<HTMLDivElement>(null);
  const { topicStatus, triggerProgressUpdate } = useGlobalContext();
  const pathname = usePathname();
  const theme = useTheme();
  const currentStatusTopic = topicStatus?.status?.find((s) => s.itemId === id);

  React.useEffect(() => {
    if (currentStatusTopic) {
      setStatus(currentStatusTopic?.itemStatus);
    }
  }, [currentStatusTopic]);

  const extractIdsFromUrl = (pathname: string): string[] | null => {
    const parts = pathname.split("/");
    const themeId = parts[2]?.split("-")[0] || "";
    const topicId = parts[3]?.split("-")[0] || "";
    return themeId && topicId ? [themeId, topicId] : null;
  };

  const ids = extractIdsFromUrl(pathname);

  const {
    status: exerciseStatus,
    isLoading,
    updateStatus,
  } = useStatus({
    themeId: ids?.[0] || "",
    topicId: ids?.[1] || "",
    itemId: id || "",
  });

  const handleChange = async (event: SelectChangeEvent) => {
    const value = event.target.value as string;

    if (!session && statusSelectRef.current) {
      statusSelectRef.current.classList.add("ativo");
      setIsModalOpen(true);
      return;
    }

    if (!ids) return;

    const success = await updateStatus(value, elementType);
    if (!success) return;

    try {
      await updateStatus(value, elementType)
      triggerProgressUpdate()
    } catch (error) {
      console.error("Erro ao atualizar status:", error)
    }
  }

  const handleCloseModals = () => {
    if (statusSelectRef.current) {
      statusSelectRef.current.classList.remove("ativo");
    }
    setIsModalOpen(false);
    setStatus("NotStarted");
  };

  React.useEffect(() => {
    if (exerciseStatus && ids) {
      setStatus(exerciseStatus);
    }
  }, [exerciseStatus, ids]);

  React.useMemo(() => {
    switch (status) {
      case "Completed":
        setBackgroundColor(theme.palette.statusSelect?.light || "");
        break;
      case "InProgress":
        setBackgroundColor(theme.palette.statusSelect?.dark || "");
        break;
      case "NotStarted":
        setBackgroundColor(theme.palette.statusSelect?.main || "");
        break;
      default:
        setBackgroundColor("rgb(225, 225, 225)");
    }
  }, [status]);

  return (
    <Box
      id={id}
      ref={statusSelectRef}
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
          shrink
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
          notched
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

      <LoginWarningModal
        status={status}
        open={isModalOpen}
        handleClose={handleCloseModals}
      />
    </Box>
  );
}
