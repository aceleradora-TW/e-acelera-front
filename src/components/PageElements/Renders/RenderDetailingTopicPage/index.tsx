import * as React from "react";
import { useFlags } from "flagsmith/react";
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

function traitIsTrue(value: unknown): boolean {
  return (
    value === true ||
    value === "true" ||
    value === 1 ||
    value === "1"
  );
}

const PageContent = ({ topicId }: { topicId: string }) => {
  const [isModalOpen, setIsModalOpen] =
    React.useState<boolean>(false);

  const {
    flag_adminjs,
    is_test_user,
    adminjs_preference,
  } = useFlags(
    ["flag_adminjs"],
    ["is_test_user", "adminjs_preference"]
  );

  const isTestUser = traitIsTrue(is_test_user);

  const usePostgres =
    flag_adminjs?.enabled === true ||
    (isTestUser && traitIsTrue(adminjs_preference));

  const showStatusErrorModal = () => {
    setIsModalOpen(true);
  };

  const { progressTrigger } = useGlobalContext();

  const { progress } = useFetchProgress(
    topicId,
    IdType.TOPIC_ID,
    progressTrigger
  );

  const { dataStatus } = useFetchTopicStatus(topicId);

  const url = usePostgres
    ? "/api/topics/getTopicById"
    : "/api/stackbyApi/Topics";

  const fetchOptions: RequestInit = usePostgres
    ? {
        method: "GET",
        headers: {
          id: topicId,
        },
      }
    : {
        method: "GET",
        headers: {
          operator: "rowIds",
          value: topicId,
        },
      };

  const {
    data: renderData,
    isLoading: loading,
    error,
  } = useFetchData(url, fetchOptions);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <BadRequest />;
  }

  if (!renderData) {
    return <NoData />;
  }

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
  const decodedId = decodeURIComponent(id);

  const topicId = decodedId.split("-")[0];

  return (
    <GlobalContextProvider>
      <PageContent topicId={topicId} />
    </GlobalContextProvider>
  );
};