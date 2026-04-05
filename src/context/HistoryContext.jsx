/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // New: Signal that an item was clicked and should be applied to the generator
  const [appliedItem, setAppliedItem] = useState(null);

  const applyToGenerator = (item) => {
    setAppliedItem(item);
    setIsHistoryOpen(false);
  };

  return (
    <HistoryContext.Provider value={{ 
      isHistoryOpen, 
      setIsHistoryOpen, 
      selectedItem, 
      setSelectedItem,
      appliedItem,
      setAppliedItem,
      applyToGenerator
    }}>
      {children}
    </HistoryContext.Provider>
  );
}

// Export the hook with uppercase initials or as a standard identified hook
export const useHistoryState = () => {
  const context = useContext(HistoryContext);
  if (!context) throw new Error("useHistoryState must be used within a HistoryProvider");
  return context;
};
