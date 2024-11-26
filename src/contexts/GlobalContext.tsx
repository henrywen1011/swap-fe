import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IModalsState } from "@constants/interfeaces";
import { MODAL_IDS } from "@constants/types";

interface GlobalContextProps {
  isLoading: boolean;
  isPageLoading: boolean;
  modals: IModalsState;
  setModals: (val: IModalsState) => void;
  closeModal: (val: any, params?: any) => void;
  closeAllModal: () => void;
  setIsLoading: (val: boolean) => void;
  setIsPageLoading: (val: boolean) => void;
  openModal: (modalId: string, params?: any) => void;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const initializeModals = () => {
    let tpModals = {} as IModalsState;
    Object.values(MODAL_IDS).map((_id) => {
      tpModals = { ...tpModals, [_id]: { opened: false, params: {} } };
    });

    return tpModals;
    // console.log(tpModals);
    // setModals(tpModals);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [modals, setModals] = useState<IModalsState>(initializeModals());

  useEffect(() => {
    initializeModals();
  }, []);

  const openModal = (modalId: string, params?: any) => {
    const tp = { ...modals, [modalId]: { opened: true, params } };
    setModals(tp);
  };

  const changeModalStatus = (modalId: string, params?: any) => {
    const tp = { ...modals, [modalId]: { ...modals[modalId], params } };
    setModals(tp);
  };

  const closeModal = (modalId: string, newParam?: any) => {
    setModals({
      ...modals,
      [modalId]: { opened: false, params: newParam ?? modals[modalId].params },
    });
  };

  const closeAllModal = () => {
    setModals(initializeModals());
  };

  return (
    <GlobalContext.Provider
      value={{
        modals,
        isLoading,
        isPageLoading,
        setModals,
        openModal,
        closeModal,
        closeAllModal,
        setIsLoading,
        setIsPageLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
