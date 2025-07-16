import { createContext, useContext, useState, type ReactNode } from "react";
import { ApiTopic } from "@/types/typeTopic";

type GlobalContextDefs = {
  themeProgress: number;
  topicProgress: number;
  topicStatus: ApiTopic | undefined;
  progressTrigger: number;
  handleThemeProgress: (progressValue: number) => void;
  handleTopicStatus: (topicStatus: ApiTopic | undefined) => void;
  handleTopicProgress: (progressValue: number) => void;
  triggerProgressUpdate: () => void;
}

const GlobalContext = createContext<GlobalContextDefs | null>(null);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeProgress, setThemeProgress] = useState<number>(0);
  const [topicStatus, setTopicStatus] = useState<ApiTopic | undefined>(undefined);
  const [topicProgress, setTopicProgress] = useState<number>(0);
  const [progressTrigger, setProgressTrigger] = useState<number>(0);

  const handleThemeProgress = (progressValue: number) => setThemeProgress(progressValue);
  const handleTopicStatus = (topicStatus: ApiTopic | undefined) => setTopicStatus(topicStatus);
  const handleTopicProgress = (progressValue: number) => setTopicProgress(progressValue);
  const triggerProgressUpdate = () => setProgressTrigger(prev => prev + 1);

  return (
    <GlobalContext.Provider value={{ 
      themeProgress, 
      topicProgress, 
      topicStatus, 
      progressTrigger,
      handleThemeProgress, 
      handleTopicStatus, 
      handleTopicProgress,
      triggerProgressUpdate
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider}