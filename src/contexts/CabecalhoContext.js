import React, { createContext, useContext, useState } from "react";

const CabecalhoContext = createContext();

export function useCabecalhoContext() {
  return useContext(CabecalhoContext);
}

export function CabecalhoContextProvider({ children }) {
  const [isVisible, setVisible] = useState(true);
  const [opacidade, setOpacidade] = useState("rgb(14, 19, 23, 0)");

  function removeVisibility() {
    setVisible(false);
  }

  function activateVisibility() {
    setVisible(true);
  }

  return (
    <CabecalhoContext.Provider
      value={{
        removeVisibility,
        activateVisibility,
        isVisible,
        setOpacidade,
        opacidade,
      }}
    >
      {children}
    </CabecalhoContext.Provider>
  );
}
