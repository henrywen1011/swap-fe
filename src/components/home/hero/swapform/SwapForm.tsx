import React, { useRef, useState } from "react";
import ToggleSwitch from "./Toggleswitch";
import comingsoon from "@assets/comingSoon.svg";
import ethereum from "@assets/ethereum.svg";
import solana from "@assets/solana.svg";
import { useNavigate } from "react-router-dom";
import CoinModal from "../../CoinModal/CoinModal";
import styles from "./SwapForm.module.scss";
import CButton from "../../../reusables/CButton";
import { BUTTON_TYPES } from "@constants/types";
import CInput from "../../../reusables/CInput";

interface Exchange {
  name: string;
  image: string;
  conversion: string;
  fullname: string;
}

const SwapForm: React.FC = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [receivingWallet, setReveivingWallet] = useState("");
  const [buttons, toggleButtons] = useState([
    { name: "SWAP", clicked: true },
    { name: "BUY", clicked: false },
    { name: "SELL", clicked: false },
  ]);

  const handleButtonPress = (payload: string) => {
    toggleModal(payload.toLowerCase());
    toggleButtons((prevState) =>
      prevState.map((button) => ({
        ...button,
        clicked: button.name === payload,
      }))
    );
  };

  const [displayedModal, toggleModal] = useState("swap");
  const formData = useRef<any>({
    fromAmount: 0,
    toAmount: 0,
    receivingWallet: "",
    timeCreated: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.current.timeCreated = new Date().toISOString();
    (formData.current.fromAmount = fromAmount),
      (formData.current.toAmount = toAmount),
      (formData.current.receivingWallet = receivingWallet),
      localStorage.setItem("transaction", JSON.stringify(formData.current));
    localStorage.setItem("exchangeDetails", JSON.stringify(exchange));
    navigate("/checkout");
  };

  const [exchange, toggleExchange] = useState<{
    sending: Exchange;
    receiving: Exchange;
  }>({
    sending: {
      name: "ETH",
      image: ethereum,
      conversion: "",
      fullname: "ETHEREUM",
    },
    receiving: {
      name: "SOL",
      image: solana,
      conversion: "",
      fullname: "SOLANA",
    },
  });

  const dataType = useRef<"sending" | "receiving">("sending");
  const [displayModal, toggleDisplayModal] = useState(false);

  const handleModal = (payload: "sending" | "receiving") => {
    dataType.current = payload;
    toggleDisplayModal(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${displayModal ? styles.swapFormHidden : styles.swapForm}`}
      >
        <div className={styles.swapHeader}>
          <h3 className={styles.headerText}>MULTICHAIN SWAP</h3>
          <div className={styles.toggleSwitchContainer}>
            <p>Semi Private</p>
            <ToggleSwitch />
            <p>Private</p>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <div className={styles.buttonContainer}>
            {buttons.map((button, index) => (
              <CButton
                key={index}
                onClick={() => handleButtonPress(button.name)}
                outline
                bordered={false}
                type={BUTTON_TYPES.PILLED}
                buttonType="button"
              >
                {button.name}
              </CButton>
            ))}
          </div>
        </div>

        <>
          <div
            className={
              styles.gridContainer +
              ` ${displayedModal === "swap" ? null : "hidden"}`
            }
          >
            <div className={styles.inputWrapper}>
              <span>{exchange.sending.fullname}</span>
              <div className={styles.walletField}>
                <CInput
                  large
                  fill
                  required
                  pilled
                  onlyNumbers
                  precision={8}
                  placeholder="Enter Amount"
                  value={fromAmount}
                  onChange={(value) => {
                    setFromAmount(value);
                  }}
                  suffix={
                    <span
                      onClick={() => handleModal("sending")}
                      className={styles.iconContainer}
                    >
                      <img
                        className="w-7"
                        src={exchange.sending.image}
                        alt=""
                      />
                      {exchange.sending.name}
                    </span>
                  }
                />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <span>{exchange.receiving.fullname}</span>
              <div className={styles.walletField}>
                <CInput
                  large
                  fill
                  required
                  pilled
                  onlyNumbers
                  precision={8}
                  placeholder="Enter value magnitude"
                  value={toAmount}
                  onChange={(value) => {
                    setToAmount(value);
                  }}
                  suffix={
                    <span
                      onClick={() => handleModal("receiving")}
                      className={styles.iconContainer}
                    >
                      <img
                        className="w-7"
                        src={exchange.receiving.image}
                        alt=""
                      />
                      {exchange.receiving.name}
                    </span>
                  }
                />
                <span
                  onClick={() => handleModal("receiving")}
                  className={styles.iconContainer}
                >
                  <img className="w-7" src={exchange.receiving.image} alt="" />
                  {exchange.receiving.name}
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              styles.inputWrapper +
              ` ${displayedModal === "swap" ? null : "hidden"}`
            }
          >
            <h3>RECEIVING WALLET ADDRESS</h3>
            <div className={styles.walletField}>
              <CInput
                large
                fill
                required
                pilled
                placeholder="Receiving wallet address"
                value={receivingWallet}
                onChange={(value) => {
                  setReveivingWallet(value);
                }}
              />
            </div>
          </div>

          <div
            className={
              styles.checkboxContainer +
              ` ${displayedModal === "swap" ? null : "hidden"}`
            }
          >
            {/* <Input type="checkbox" required={true} /> */}
            <CInput type="checkbox" />
            <span className={styles.termsText}>
              I have read and agreed to the Hydra{" "}
              <a className={styles.link} href="#">
                Terms of Use
              </a>{" "}
              and{" "}
              <a className={styles.link} href="#">
                Privacy Policy
              </a>
            </span>
          </div>
          <CButton primary>test</CButton>
          <CButton
            className={` ${displayedModal === "swap" ? null : "hidden"}`}
            bordered
            outline
            primary
            type={BUTTON_TYPES.PILLED}
            big
          >
            SWAP
          </CButton>
        </>

        <img
          src={comingsoon}
          className={`${displayedModal === "swap" ? "hidden" : null}`}
          alt="Coming Soon"
        />

        <span className={styles.centerText}>
          First time on hydra?{" "}
          <a href="#" className={styles.link}>
            Watch
          </a>
        </span>
      </form>

      <CoinModal
        displayModal={displayModal}
        toggleDisplayModal={toggleDisplayModal}
        toggleExchange={toggleExchange}
        data={dataType.current}
      />
    </>
  );
};

export default SwapForm;
