import { useState } from "react";
import styles from "./Coinmodal.module.scss"; // Import CSS module
import bnb from "@assets/bnb.svg";
import eth from "@assets/eth.svg";
import usdc from "@assets/usdc.svg";
import usdt from "@assets/usdt.svg";
import ethereum from "@assets/ethereum.svg";
import bfg from "@assets/bfg.svg";
import bsrx from "@assets/bsrx.svg";
import solana from "@assets/solana.svg";
import Input from "../../reusables/Input";
import CInput from "../../reusables/CInput";

const CoinModal = ({
  toggleExchange,
  data,
  toggleDisplayModal,
  displayModal,
}: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const tokens = [
    { name: "BNB", image: bnb, conversion: "", fullname: "BNB" },
    { name: "USDC", image: usdc, conversion: "", fullname: "USDC" },
    { name: "SOL", image: solana, conversion: "", fullname: "SOLANA" },
    { name: "USDT", image: usdt, conversion: "", fullname: "USDT" },
    { name: "ETH", image: ethereum, conversion: "", fullname: "ETHEREUM" },
    { name: "BFG", image: bfg, conversion: "", fullname: "BFG" },
    { name: "BSRX", image: bsrx, conversion: "", fullname: "BSRX" },
  ];

  const networks = [
    { name: "Ethereum", image: eth, conversion: "" },
    { name: "Binance Smart Chain", image: bnb, conversion: "" },
    { name: "Solana", image: solana, conversion: "" },
    { name: "Ethereum", image: eth, conversion: "" },
    { name: "Binance Smart Chain", image: bnb, conversion: "" },
    { name: "Solana", image: solana, conversion: "" },
  ];

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNetworks = networks.filter((network) =>
    network.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`${styles.modalOverlay} ${
        !displayModal ? styles.hiddenModal : ""
      }`}
    >
      <div
        onClick={() => toggleDisplayModal(false)}
        className="absolute z-[-1] w-full h-full left-0 top-0"
      ></div>
      <div className={styles.modalContent}>
        <CInput
          large
          fill
          placeholder="Search for token or network"
          value={searchTerm}
          onChange={(value) => {
            setSearchTerm(value);
          }}
        />
        <div className={styles.tokensContainer}>
          <h4>TOKENS</h4>
          <div className={styles.tokensGrid}>
            {filteredTokens.map((token: any, index: number) => (
              <div
                onClick={() => {
                  toggleExchange((prev: any) => ({
                    ...prev,
                    [data]: token,
                  }));
                  toggleDisplayModal(false);
                }}
                key={index}
                className={styles.tokenItem}
              >
                <img src={token.image} alt={token.name} />
                <p>{token.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.networksContainer}>
          <h4>NETWORKS</h4>
          <div className={styles.networksGrid}>
            {filteredNetworks.map((network: any, index: number) => (
              <div key={index} className={styles.networkItem}>
                <img src={network.image} alt={network.name} />
                <p>{network.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinModal;
