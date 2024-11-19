import { useContext } from "react";
import { GlobalContext } from "@contexts/GlobalContext";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a ThemecontextProvider"
    );
  }

  const {
    modals,
    isLoading,
    isPageLoading,
    setIsLoading,
    setIsPageLoading,
    setModals,
    openModal,
    closeModal,
    closeAllModal,
  } = context;

  return {
    modals,
    isLoading,
    isPageLoading,
    setIsLoading,
    setIsPageLoading,
    setModals,
    openModal,
    closeModal,
    closeAllModal,
  };
};
export default useGlobalContext;
