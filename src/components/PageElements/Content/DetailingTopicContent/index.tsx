import React, { useEffect } from "react"
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

interface TopicContentProps {
  field: TopicField
  topicProgress: number
}

const TopicContent: React.FC<TopicContentProps> = ({ field, topicProgress }) => (
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

export const DetailingTopicContent: React.FC<DetailingContentProps> = ({
  data,
  id,
  topicProgress,
  source
}) => {
  const { dataStatus } = useFetchTopicStatus(id)
  const { handleTopicStatus } = useGlobalContext();


  useEffect(() => {
    handleTopicStatus(dataStatus)
  }, [dataStatus, handleTopicStatus])
  
  console.log("data:", data)
 
  if (source === "stackby") {
    const [topicData] = data as DataItem[];
    return (
      <TopicContent
        field={topicData?.field as TopicField}
        topicProgress={topicProgress}
      />
    )
  }

  if (source === "adminjs") {
    const topic = data as Topic;
    return (
      <>
        <Grid item xl={12} lg={9} md={6} sm={3}>
          <BreadCrumb />
          <Heading variant="h1" text={topic.title} />
          <ProgressBar percentage={topicProgress} />
          <p style={{ fontSize: "0.8rem", textAlign: "right", marginTop: "4px" }}>
            {topicProgress}% concluído
          </p>
        </Grid>

        <DescriptionWithVideo
          textDescription={topic.description}
          textVideo={topic.video?.description}
          title={topic.video?.title}
          videoLink={topic.video.link}
          references={topic.video?.references ?? ""}
          videoId={topic.video?.id}
        />

        <Grid item xl={12} lg={9} md={6} sm={3}>
          <Heading variant="h2" text={"Exercícios"} />
        </Grid>
        <ContainerCardsExercises
          exercises={topic.exercises}
          exercisesDescription={"Exercícios disponíveis"}
          exercisesInfo={JSON.stringify(topic.exercises)}
        />

        {topic.references && topic.references.trim() !== "" && (
          <>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <Heading variant="h2" text={"Referências"} />
            </Grid>
            <DescriptionReference text={topic.references} />
          </>
        )}
      </>
    );
  }

}











