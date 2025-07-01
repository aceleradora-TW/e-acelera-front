import { ApiTopic } from "@/types/typeTopic";
import { createContext } from "react";

interface DetailingTopicContextProps {
  topicStatus: ApiTopic | undefined;
  statusError: boolean;
  showStatusErrorModal: () => void;
}

const defaultContextValues = {
  topicStatus: { status: [] },
  statusError: false,
  showStatusErrorModal: () => {}
};

const DetailingTopicContext = createContext<DetailingTopicContextProps>({
  ...defaultContextValues,
});

DetailingTopicContext.displayName = "DetailingTopicContext";

export { DetailingTopicContext };
