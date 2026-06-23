
'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import Form from "@/components/UI/dashboard/form";
import {
  TopicFormSchema,
  topicFormDefs,
} from "@/components/UI/dashboard/forms/defs/topic.defs";
import { useRouter } from "next/navigation";
import { Alert ,Box, Button, Link, TextField, Typography, useTheme } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import {
  actionsContainerStyles,
  textFieldStyles,
  textFieldsContainerStyles,
} from "@/components/UI/dashboard/forms/form.styles";
import { BadRequest } from "@/components/BadRequest";
import { Loading } from "@/components/Loading";
import { NoData } from "@/components/NoData";
import { CmsTopic, CmsTopicVideo } from "@/types/type";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";
import { cancelButtonStyles } from "@/components/UI/dashboard/forms/form.styles"
import { fi } from "zod/v4/locales";

interface Props {
  id: string;
}

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];

  if (!videoId) {
    return null;
  }

  return `https://www.youtube.com/embed/${videoId}`;
};

export default function DetailTopic({ id }: Props) {
  const [topic, setTopic] = useState<CmsTopic | undefined>(undefined);
  const [originalTopic, setOriginalTopic] = useState<CmsTopic | undefined>(undefined)
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("")
  const muiTheme = useTheme();
  const router = useRouter();


  const fetchTopic = useCallback(async () => {
    setLoading(true);
    setErrorStatus(null);

    try {
      const response = await fetch("/api/topics/getTopicById", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

       if (!response.ok) throw new Error(`Erro: ${response.status}`)

      const data = await response.json();

      setTopic(data.data)
      setOriginalTopic(data.data)
    } catch (error) {
      console.error("Erro ao buscar tópico:", error);
    } 
  }, [id]);

  useEffect(() => {
    fetchTopic();
  }, [fetchTopic]);

  /* const topicStatus = useMemo(
    () => (topic?.isActive ? "Ativo" : "Inativo"),
    [topic?.isActive]
  ); */

  function handleChange(field: keyof CmsTopic , value: string) {
    if (!topic) return

    setTopic({
      ...topic,
      [field]: value,

    })
  }

  function handleVideoChange(field: keyof CmsTopicVideo, value: string) {
    if (!topic || !topic.video) return

    setTopic({
      ...topic,
      video: {
        ...topic.video,
        [field]: value,
      } as CmsTopicVideo
    });
  }

  function handleEdit() {
    setOriginalTopic(topic)
    setIsEditing(true)
    setErrorMessage("")
  }
  
function handleCancelEdit() {
    const confirmCancel = window.confirm(
      "Deseja cancelar a edição? As alterações serão perdidas."
    )

    if (!confirmCancel) return

    setTopic(originalTopic)
    setIsEditing(false)
    setErrorMessage("")
  }

  /* Começa aqui */
  async function handleSave() {
    if (!topic) return
    
    try {
      setErrorMessage("")

      const payload = {
        title: topic.title,
        shortDescription: topic.shortDescription,
        description: topic.description,
        isActive: topic.isActive,
        videoTitle: topic.video?.title,
        videoDescription: topic.video?.description,
        videoReferences: topic.video?.references,
        videoLink: topic.video?.link,
      }

      const response = await fetch("/api/topics/updateTopic", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "id": String(id),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`)
    }

    const data = await response.json()

    setTopic(data.data ?? topic)
    setOriginalTopic(data.data ?? topic)
    setIsEditing(false)
  } catch (error) {
      console.error("Erro ao salvar tópico:", error);
      setErrorMessage("Ocorreu um erro ao salvar o tópico. Por favor, tente novamente.");
    }

}


/*   if (loading) return <Loading />;
  if (errorStatus === 404) return <NoData />;
  if (errorStatus) return <BadRequest />;
  if (!topic) return <NoData />; */

/*   const videoEmbedUrl = topic.video?.link ? getYouTubeEmbedUrl(topic.video.link) : null; */

  return (
    <Box>
      <UpperBanner
        title={topic?.title || "Tópicos"}
        showBreadCrumb
        breadCrumbLabel={topic?.title}
      />

       <Box sx={textFieldsContainerStyles}>

        <Box
        sx={{
          backgroundColor: "#EAF3FA",
          minHeight: "120px",
          px: { xs: 3, md: 10 },
          py: 4,
          mt: -2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#004A7C",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          Topics
        </Typography>

        {!isEditing && (
          <Button
            onClick={handleEdit}
            disabled={!topic}
            sx={{
              color: "#5E8CB5",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            ✎ Editar
          </Button>
        )}
      </Box>

        {/* <TextField
          label="ID"
          value={topic.id}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        /> */} 

        {/* <TextField
          label="Tema"
          value={topic.theme?.title || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        /> */}

        <TextField
          label="Título"
          value={topic?.title || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
           onChange={(event) => handleChange("title", event.target.value)}
          sx={textFieldStyles}
        />

        {/* <TextField
          label="Ativo/Inativo"
          value={topicStatus}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        /> */}

        <TextField
          label="Descrição curta"
          value={topic?.shortDescription || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("shortDescription", event.target.value)}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição longa"
          value={topic?.description || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
           onChange={(event) => handleChange("description", event.target.value)}
          multiline
          minRows={4}
          sx={textFieldStyles}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Vídeo
        </Typography>

        {topic?.video ? (
          <Box sx={{ display: "grid", gap: 2 }}>
            <TextField
              label="Título do vídeo"
              value={topic.video.title || ""}
              fullWidth
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) => handleVideoChange("title", event.target.value)}
              sx={textFieldStyles}
            />

            <TextField
              label="Explicação do vídeo"
              value={topic.video.description || ""}
              fullWidth
              multiline
              minRows={4}
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) => handleVideoChange("description", event.target.value)}
              sx={textFieldStyles}
            />

            <TextField
              label="Referências do vídeo"
              value={topic.video.references || ""}
              fullWidth
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) => handleVideoChange("references", event.target.value)}
              sx={textFieldStyles}
            />

            <TextField
              label="Link do vídeo"
              value={topic.video.link || ""}
              fullWidth
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) => handleVideoChange("link", event.target.value)}
              sx={textFieldStyles}
            />

            {isEditing && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 2,
                          mt: 4,
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            ...cancelButtonStyles(muiTheme),
                            borderColor: "red",
                            color: "red",
                            backgroundColor: "#fff",
                            px: 4,
                          }}
                          onClick={handleCancelEdit}
                        >
                          CANCELAR
                        </Button>
            
                        <Button
                          variant="contained"
                          onClick={handleSave}
                          disabled={!topic}
                          sx={{
                            backgroundColor: "#004A7C",
                            px: 4,
                            "&:hover": {
                              backgroundColor: "#003B63",
                            },
                          }}
                        >
                          SALVAR
                        </Button>
                      </Box>
                    )}

            {/* {videoEmbedUrl ? (
              <Box sx={{ width: "100%", overflow: "hidden", borderRadius: 2 }}>
                <iframe
                  width="100%"
                  height="332"
                  src={videoEmbedUrl}
                  title={topic.video.title || "Vídeo do tópico"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
            ) : (
              <Link href={topic.video.link} target="_blank" rel="noopener noreferrer">
                Abrir vídeo em nova aba
              </Link>
            )} */}
          </Box>
        ) : (
          <Typography variant="body1">Nenhum vídeo cadastrado para este tópico.</Typography>
        )}
      </Box>

  
    </Box>
  );
}
