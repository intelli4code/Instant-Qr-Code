import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <HistoryContext.Provider value={{ isHistoryOpen, setIsHistoryOpen }}>
      {children}
    </HistoryContext.Provider>
  );
}

export const useHistoryState = () => useContext(HistoryContext);
