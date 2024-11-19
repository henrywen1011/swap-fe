import BitWalletConnectModal from "./BitWalletConnectModal";
import useGlobalContext from "@hooks/useGlobalContext";

const ModalsContainer = () => {
  const { modals } = useGlobalContext();
  return (
    <>
      <BitWalletConnectModal />
    </>
  );
};

export default ModalsContainer;
