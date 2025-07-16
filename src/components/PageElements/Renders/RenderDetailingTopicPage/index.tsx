import * as React from "react";
import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingTopicContent } from "../../Content/DetailingTopicContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { useFetchTopicStatus } from "@/components/fetchStatus/fecthStatusTopic";
import { DetailingTopicContext } from "@/context";
import { ErrorUpdateStatusModal } from "@/components/Modals/ErrorUpdateStatusModal/ErrorUpdateStatusModal";
import { useFetchProgress } from "@/components/fetchProgress";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { GlobalContextProvider } from "@/context/global.context";
import { IdType } from "@/types/type";

const PageContent = ({ topicId }: { topicId: string }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const showStatusErrorModal = () => setIsModalOpen(true);

  const { progressTrigger } = useGlobalContext();
  const { progress } = useFetchProgress(
    topicId,
    IdType.TOPIC_ID,
    progressTrigger
  );
  const { dataStatus } = useFetchTopicStatus(topicId);

  const {
    data: renderData,
    isLoading: loading,
    error,
  } = useFetchData("/api/stackbyApi/Topics");

  if (loading) return <Loading />;
  if (error) return <BadRequest />;
  if (!renderData) return <NoData />;

  return (
    <DetailingTopicContext.Provider
      value={{
        topicStatus: dataStatus,
        statusError: isModalOpen,
        showStatusErrorModal,
      }}
    >
      <LayoutPage>
        <ErrorUpdateStatusModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
        <DetailingTopicContent
          data={renderData}
          id={topicId}
          topicProgress={progress?.progress ?? 0}
        />
      </LayoutPage>
    </DetailingTopicContext.Provider>
  );
};

export const RenderDetailingTopicPage = (id: string) => {
  const extractId = (): string => {
    const parts = id.split("-");
    return parts[0];
  };

  const topicId = extractId();

  return (
    <GlobalContextProvider>
      <PageContent topicId={topicId} />
    </GlobalContextProvider>
  );
};
