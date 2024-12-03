import React from "react"
import { Grid } from "@mui/material"
import { BreadCrumb } from "@/components/BreadCrumb"
import { ApiResponse, DataItem, FilteredDetailingTopicItem } from "@/types/type"
import { DescriptionReference } from "@/components/Description/DescriptionReference"
import { ContainerCardsExercises } from "../../Container/ContainerCardsExercises"
import { DescriptionWithVideo } from "@/components/Description/DescriptionWithVideo"
import { Heading } from "@/components/Heading"

interface DetailingContentProps {
  data: ApiResponse
  id: string
}

function isFilteredDetailingTopicItem(field: any): field is FilteredDetailingTopicItem {
  return field && "videoLink" in field && "video" in field
}

const TopicContent: React.FC<{ field: FilteredDetailingTopicItem }> = ({ field }) => (
  <>
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <BreadCrumb />
      <Heading variant="h1" text={field.title} />
    </Grid>
    <DescriptionWithVideo
      textDescription={field.description}
      textVideo={field.videoDescription}
      title={field.video}
      videoLink={field.videoLink}
      references={field.videoReference}
    />
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <Heading variant="h2" text={"Exercícios"} />
    </Grid>
    <ContainerCardsExercises
      exercises={field.exercises}
      exercisesDescription={field.exercisesDescription}
      exercisesInfo={field.exercisesInfo}
    />

    {field.references && field.references.trim() != "" && (
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
}) => {
  const filteredData = data?.data.filter(
    (element: DataItem) => element.id === id.split("-")[0]
  )

  return (
    <>
      {filteredData.map((element: DataItem) => {
        if (isFilteredDetailingTopicItem(element.field)) {
          return (
            <TopicContent key={element.id} field={element.field} />
          )
        }
        return null
      })}
    </>
  )
}
