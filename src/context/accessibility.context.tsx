'use client'
import React, { createContext, useContext, useState } from 'react';

type AcessibilidadeContextType = {
  mascaraAtiva: boolean;
  toggleMascara: () => void;
};

const AcessibilidadeContext = createContext<AcessibilidadeContextType>({
  mascaraAtiva: false,
  toggleMascara: () => {},
});

export const useAcessibilidade = () => useContext(AcessibilidadeContext);

export const AcessibilidadeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mascaraAtiva, setMascaraAtiva] = useState(false);

  const toggleMascara = () => setMascaraAtiva((prev) => !prev);

  return (
    <AcessibilidadeContext.Provider value={{ mascaraAtiva, toggleMascara }}>
      {children}
    </AcessibilidadeContext.Provider>
  );
};