"use client";

import { ReactNode, useRef } from "react";
import { FlagsmithProvider } from "flagsmith/react";
import { IState } from "flagsmith/types";
import { createFlagsmithInstance } from "flagsmith/isomorphic";

export const FeatureFlagProvider = ({
  serverState,
  children,
}: {
  serverState: IState;
  children: ReactNode;
}) => {
  const flagsmithInstance = useRef(createFlagsmithInstance());
  console.log("[FeatureFlagProvider] Inicializando Flagsmith com o estado do servidor:", serverState);

  return (
    <FlagsmithProvider flagsmith={flagsmithInstance.current} serverState={serverState}>
      <>{children}</>
    </FlagsmithProvider>
  );
};