import { useContext } from "react";
import { GlobalContext } from "@/context/global.context";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if(!context) {
    throw new Error("useGlobalContext hook must be used within a GlobalContextProvider");
  }

  return context;
}