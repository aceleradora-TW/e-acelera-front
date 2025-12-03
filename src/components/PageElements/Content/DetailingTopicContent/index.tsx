import React, { useEffect, useMemo } from "react"
import { Grid } from "@mui/material"
import { BreadCrumb } from "@/components/BreadCrumb"
import { DataItem, Topic, TopicField } from "@/types/type"
import { DescriptionReference } from "@/components/descriptions/description-reference"
import { ContainerCardsExercises } from "../../Container/ContainerCardsExercises"
import { DescriptionWithVideo } from "@/components/descriptions/description-with-video"
import { Heading } from "@/components/Heading"
import ProgressBar from "@/components/PageElements/Progress/ProgressBar"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { useFetchTopicStatus } from "@/components/fetchStatus/fecthStatusTopic"

interface DetailingContentProps {
  data: DataItem[] | Topic
  id: string
  topicProgress: number
  source: "adminjs" | "stackby"
}

interface NormalizedTopic {
  title: string
  description: string
  video: {
    title?: string
    description?: string
    link?: string
    references?: string
    id?: string
  }
  exercises: any[] | string
  exercisesDescription:  string 
  exercisesInfo: string
  references?: string
}

export const DetailingTopicContent: React.FC<DetailingContentProps> = ({
  data,
  id,
  topicProgress,
  source
}) => {
  const { dataStatus } = useFetchTopicStatus(id)
  const { handleTopicStatus } = useGlobalContext()

  useEffect(() => {
    handleTopicStatus(dataStatus)
  }, [dataStatus, handleTopicStatus])

  const normalized: NormalizedTopic | null = useMemo(() => {
    if (source === "stackby") {
      const [topicData] = data as DataItem[]
      const field = topicData.field as TopicField

      
      return {
        title: field.title,
        description: field.description,
        video: {
          title: field.video,
          description: field.videoDescription,
          link: field.videoLink,
          references: field.videoReference,
          id: field.videoInfo
        },
        exercises: field.exercises,
        exercisesDescription: field.exercisesDescription, 
        exercisesInfo: field.exercisesInfo,  
        references: field.references ?? ""
        
      }
    }

    const topic = data as Topic

    return {
      title: topic.title,
      description: topic.description,
      video: {
        title: topic.video?.title,
        description: topic.video?.description,
        link: topic.video?.link,
        references: topic.video?.references,
        id: topic.video?.id
      },
      exercises: Array.isArray(topic.exercises)
        ? topic.exercises
        : topic.exercises
        ? [topic.exercises]
        : [],
      exercisesDescription: "",
      exercisesInfo: "",
      references: topic.references ?? ""
    }
  }, [data, source])


  if (!normalized) return null

  return (
    <>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <BreadCrumb />
        <Heading variant="h1" text={normalized.title} />
        <ProgressBar percentage={topicProgress} />
        <p style={{ fontSize: "0.8rem", textAlign: "right", marginTop: "4px" }}>
          {topicProgress}% concluído
        </p>
      </Grid>

      <DescriptionWithVideo
        textDescription={normalized.description}
        textVideo={normalized.video.description!}
        title={normalized.video.title!}
        videoLink={normalized.video.link!}
        references={normalized.video.references!}
        videoId={normalized.video.id!}
      />

      <Grid item xl={12} lg={9} md={6} sm={3}>
        <Heading variant="h2" text={"Exercícios"} />
      </Grid>

      <ContainerCardsExercises
        exercises={normalized.exercises}
        exercisesDescription={normalized.exercisesDescription}
        exercisesInfo={normalized.exercisesInfo}
      />

      {normalized.references && normalized.references.trim() !== "" && (
        <>
          <Grid item xl={12} lg={9} md={6} sm={3}>
            <Heading variant="h2" text={"Referências"} />
          </Grid>
          <DescriptionReference text={normalized.references} />
        </>
      )}
    </>
  )
}
