import React, { useEffect } from "react"
import { Grid } from "@mui/material"
import { BreadCrumb } from "@/components/BreadCrumb"
import { ApiResponse, DataItem, IdType, TopicField } from "@/types/type"
import { DescriptionReference } from "@/components/Description/DescriptionReference"
import { ContainerCardsExercises } from "../../Container/ContainerCardsExercises"
import { DescriptionWithVideo } from "@/components/Description/DescriptionWithVideo"
import { Heading } from "@/components/Heading"
import ProgressBar from "@/components/PageElements/Progress/ProgressBar"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { useFetchTopicStatus } from "@/components/fetchStatus/fecthStatusTopic"

interface DetailingContentProps {
  data: ApiResponse
  id: string
  topicProgress: number
}

interface TopicContentProps {
  field: TopicField
  topicProgress: number
}

const TopicContent: React.FC<TopicContentProps> = ({ field, topicProgress }) => {
  const totalItems =
    (field.videoInfo ? 1 : 0) +
    (field.exercisesInfo?.split(",").filter(Boolean).length || 0)

  return (
    <>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <BreadCrumb />
        <Heading variant="h1" text={field.title} />
        <ProgressBar percentage={topicProgress} />
        <p
          style={{
            fontSize: "0.8rem",
            textAlign: "right",
            marginTop: "4px",
          }}
        >
          {topicProgress}% concluído
        </p>
      </Grid>

      <DescriptionWithVideo
        textDescription={field.description}
        textVideo={field.videoDescription}
        title={field.video}
        videoLink={field.videoLink}
        references={field.videoReference}
        videoId={field.videoInfo}
      />
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <Heading variant="h2" text={"Exercícios"} />
      </Grid>
      <ContainerCardsExercises
        exercises={field.exercises}
        exercisesDescription={field.exercisesDescription}
        exercisesInfo={field.exercisesInfo}
      />
      {field.references && field.references.trim() !== "" && (
        <>
          <Grid item xl={12} lg={9} md={6} sm={3}>
            <Heading variant="h2" text={"Referências"} />
          </Grid>
          <DescriptionReference text={field.references} />
        </>
      )}
    </>
  )
}

export const DetailingTopicContent: React.FC<DetailingContentProps> = ({
  data,
  id,
  topicProgress
}) => {
  const { dataStatus } = useFetchTopicStatus(id)
  const { handleTopicStatus } = useGlobalContext();

  const filteredData = data?.data.filter(
    (element: DataItem) => element.id === id.split("-")[0]
  )

  useEffect(() => {
      handleTopicStatus(dataStatus)
  }, [dataStatus, handleTopicStatus])

  return (
    <>
      {filteredData.map((element: DataItem) => (
        <TopicContent
          key={element.id}
          field={element.field as TopicField}
          topicProgress={topicProgress}
        />
      ))}
    </>
  )
}
