import useGlobalContext from "@hooks/useGlobalContext";
import CModal from "@components/reusables/CModal";
import styles from "./index.module.scss";
import { MODAL_IDS, MODAL_SIZE } from "@constants/types";

const BitWalletConnectModal = () => {
  const { modals, closeModal } = useGlobalContext();
  const { setIsLoading } = useGlobalContext();

  return (
    <CModal
      size={MODAL_SIZE.SMALL}
      isOpen={modals[MODAL_IDS.BIT_WALLET_LIST]?.opened}
      title="Connect a wallet on Solana to continue"
    >
      <div className={styles.wallet_list}></div>
    </CModal>
  );
};

export default BitWalletConnectModal;
