import useFetchData from "@/components/fetchData"
import { Loading } from "@/components/Loading"
import { LayoutPage } from "../../LayoutPage"
import { DetailingTopicContent } from "../../Content/DetailingTopicContent"
import { BadRequest } from "@/components/BadRequest"
import { NoData } from "@/components/NoData"
import { useFetchTopicStatus } from "@/components/fetchStatus/fecthStatusTopic"
import { DetailingTopicContext } from "@/context"
import { useFetchProgress } from "@/components/fetchProgress"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { GlobalContextProvider } from "@/context/global.context"
import { IdType } from "@/types/type"

const PageContent = ({ topicId }: { topicId: string }) => {
  const { progressTrigger } = useGlobalContext()
  const {progress} = useFetchProgress(topicId, IdType.TOPIC_ID, progressTrigger)

  const {
    data: renderData,
    isLoading: loading,
    error: error,
  } = useFetchData("/api/stackbyApi/Topics")

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
    <LayoutPage>
      <DetailingTopicContent data={renderData} id={topicId} topicProgress={progress?.progress ?? 0} />
    </LayoutPage>
  )
}

export const RenderDetailingTopicPage = (id: string) => {
  const extractId = (): string => {
    const parts: string[] = id.split("-")
    return parts[0]
  }

  const topicId = extractId()

  return (
    <GlobalContextProvider>
      <PageContent topicId={topicId} />
    </GlobalContextProvider>
  )
}
