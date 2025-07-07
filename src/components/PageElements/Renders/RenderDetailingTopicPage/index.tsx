import useFetchData from "@/components/fetchData"
import { Loading } from "@/components/Loading"
import { LayoutPage } from "../../LayoutPage"
import { DetailingTopicContent } from "../../Content/DetailingTopicContent"
import { BadRequest } from "@/components/BadRequest"
import { NoData } from "@/components/NoData"
import { useFetchTopicStatus } from "@/components/fetchStatus/fecthStatusTopic"
import { DetailingTopicContext } from "@/context"
import { useFetchTopicProgress } from "@/components/fetchProgress/fetchTopicProgress"

export const RenderDetailingTopicPage = (id: string) => {
  const extractId = (): string => {
    const parts: string[] = id.split("-")
    return parts[0]
  }

  const topicId = extractId()

  const {
    data: renderData,
    isLoading: loading,
    error: error,
  } = useFetchData("/api/stackbyApi/Topics")

  const { dataStatus } = useFetchTopicStatus(topicId)

  const { topicProgress } = useFetchTopicProgress(topicId)

  console.log("[TOPIC PROGRESS]", topicProgress)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <BadRequest />
  }
  if (!renderData) {
    return <NoData />
  }

  return (
    <DetailingTopicContext.Provider value={{ topicStatus: dataStatus }}>
      <LayoutPage>
        <DetailingTopicContent data={renderData} id={id} topicProgress={topicProgress?.progress!}/>
      </LayoutPage>
    </DetailingTopicContext.Provider>
  )
}
