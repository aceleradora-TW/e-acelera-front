import { ApiTopic } from "@/types/typeTopic";
import { createContext } from "react";

interface DetailingTopicContextProps {
  topicStatus: ApiTopic | undefined;
}

const defaultContextValues = {
  topicStatus: { status: [] },
};

const DetailingTopicContext = createContext<DetailingTopicContextProps>({
  ...defaultContextValues,
});

DetailingTopicContext.displayName = "DetailingTopicContext";

export { DetailingTopicContext };
