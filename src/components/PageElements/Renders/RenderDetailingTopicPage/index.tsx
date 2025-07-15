import * as React from "react"
import useFetchData from "@/components/fetchData"
import { Loading } from "@/components/Loading"
import { LayoutPage } from "../../LayoutPage"
import { DetailingTopicContent } from "../../Content/DetailingTopicContent"
import { BadRequest } from "@/components/BadRequest"
import { NoData } from "@/components/NoData"
import { useFetchTopicStatus } from "@/components/fetchStatus/fecthStatusTopic"
import { DetailingTopicContext } from "@/context"
import { ErrorUpdateStatusModal } from "@/components/Modals/ErrorUpdateStatusModal/ErrorUpdateStatusModal"
import { useFetchTopicProgress } from "@/components/fetchProgress/fetchTopicProgress"

export const RenderDetailingTopicPage = (id: string) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const showStatusErrorModal = () => {
    setIsModalOpen(true);
  }

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
  const {topicProgress} = useFetchTopicProgress(topicId)
 
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
    <DetailingTopicContext.Provider value={{ topicStatus: dataStatus, statusError: isModalOpen, showStatusErrorModal }}>
      <LayoutPage>
        <ErrorUpdateStatusModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
       <DetailingTopicContent data={renderData} id={id} topicProgress={topicProgress.status.progress ?? 0}/>
      </LayoutPage>
    </DetailingTopicContext.Provider>
  );
}

