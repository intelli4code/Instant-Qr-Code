import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <HistoryContext.Provider value={{ 
      isHistoryOpen, 
      setIsHistoryOpen, 
      selectedItem, 
      setSelectedItem 
    }}>
      {children}
    </HistoryContext.Provider>
  );
}

export const useHistoryState = () => useContext(HistoryContext);
