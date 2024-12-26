import React, { useEffect, useRef, useState } from "react";
import comingsoon from "@assets/comingSoon.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Checkbox from "rc-checkbox";
import ToggleSwitch from "./Toggleswitch";
import useSwapContext from "@hooks/useSwapContext";
import useGlobalContext from "@hooks/useGlobalContext";
import CInput from "@components/reusables/CInput";
import CButton from "@components/reusables/CButton";
import SVGIcon from "@components/reusables/SVGIcon";
import RotateItem from "@components/reusables/RotateItem";
import Placeholder from "@components/reusables/Placeholder";
import {
  API_STYLE,
  BUTTON_TYPES,
  MODAL_IDS,
  ROTATE_TYPES,
  SWAP_BUTTON_STATE,
  SwapButtonStateType,
  TOKEN_DIRECTRION,
  TokenDirectionType,
} from "@constants/types";
import { API_URIS, ICON_NAMES, TOAST_MESSAGE } from "@constants/config";
import { IToken, ITokenModalParams } from "@constants/interfeaces";
import styles from "./index.module.scss";
import { isValidAmount } from "@utils/number";
import { fetchServerData } from "@apis/baseApiRequest";
import FetchingLoader from "@components/reusables/FetchingLoader";
import "rc-checkbox/assets/index.css";
import { validateWalletAddress } from "@utils/validator";
import { useWindowSize } from "@hooks/useWindowSize";

const SwapForm: React.FC = () => {
  const { modals, openModal, isPageLoading } = useGlobalContext();
  const { tokens, networks, categories } = useSwapContext();
  const [selTokenType, setSelTokenType] = useState<TokenDirectionType>();
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState<IToken>();
  const [toToken, setToToken] = useState<IToken>();
  const [receivingWallet, setReveivingWallet] = useState("");
  const controllerRef = useRef<AbortController | null>(null);
  const [checkPTR, setCheckPTR] = useState(false);
  const { isMobile } = useWindowSize();
  const [buttonState, setButtonState] = useState<SwapButtonStateType>(
    SWAP_BUTTON_STATE.DEFAULT
  );
  const timerRef = useRef<any>(null);
  const [buttons, toggleButtons] = useState([
    { name: "SWAP", clicked: true },
    { name: "BUY/SELL", clicked: false },
    { name: "DEX", clicked: false },
  ]);

  useEffect(() => {
    if (!isPageLoading && tokens && !fromToken && !toToken) {
      const _fromToken = tokens.find(
        (_token) => _token.name.toLowerCase() === "btc"
      );
      const _toToken = tokens.find(
        (_token) => _token.name.toLowerCase() === "eth"
      );
      setFromToken(_fromToken);
      setToToken(_toToken);
    }
  }, [isPageLoading, tokens]);

  // Handle token changes
  useEffect(() => {
    setToAmount("");
    if (Number(fromAmount) > 0 && fromToken && toToken) {
      // Need to wrap with Lazy call providers
      lazyGuardedCall(fromAmount, fromToken, toToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromAmount, fromToken, toToken]);

  const handleButtonPress = (payload: string) => {
    toggleModal(payload.toLowerCase());
    toggleButtons((prevState) =>
      prevState.map((button) => ({
        ...button,
        clicked: button.name === payload,
      }))
    );
  };

  const [displayedModal, toggleModal] = useState(buttons[0].name);

  const navigate = useNavigate();

  const handleSwap = async (e: React.FormEvent) => {
    if (!isValidAmount(fromAmount) || !isValidAmount(toAmount)) {
      setButtonState(SWAP_BUTTON_STATE.INVALID_ROUTE);
      return;
    }

    if (!fromToken || !toToken) {
      setButtonState(SWAP_BUTTON_STATE.INVALID_ROUTE);
      toast.error("Please select the tokens.");
      return;
    }

    if (!checkPTR) {
      toast.error(
        "Please Accept Terms of Use, Privacy Policy and Disclosures."
      );
      return;
    }

    // validate wallet address
    if (
      !receivingWallet ||
      receivingWallet.length === 0 ||
      !validateWalletAddress(
        receivingWallet,
        toToken.network_name ?? "",
        toToken.name
      )
    ) {
      toast.error("Invalid receiver address");
      return;
    }

    // Cancel the previous request if it exists
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // Create a new AbortController for the current request
    const controller = new AbortController();
    controllerRef.current = controller;

    // create order
    const request_data = {
      from_amount: fromAmount,
      to_address: receivingWallet,
      from_symbol: fromToken.name,
      to_symbol: toToken.name,
      private_mode: false,
      // exchangeFlow_list: flowList
    };

    setButtonState(SWAP_BUTTON_STATE.CREATING_ORDER);
    const { status, data } = await fetchServerData({
      method: API_STYLE.POST,
      url: API_URIS.CREATE_SWAP_ORDER,
      param: request_data,
      abortController: controller,
    });
    setButtonState(SWAP_BUTTON_STATE.CREATING_ORDER);

    console.log(status, data);

    if (status === 200 && data?.data) {
      navigate(`/checkout/${data.data.bitrunnerId}`);
    }
  };

  const openTokenModal = (type: TokenDirectionType) => {
    if (!tokens.length || !networks.length)
      return toast.warn(TOAST_MESSAGE.FAIL_TOKEN_FETCH);
    setSelTokenType(type);
    openModal(MODAL_IDS.TOKEN_SELECT, { type, tokens, networks, categories });
  };

  useEffect(() => {
    if (!modals[MODAL_IDS.TOKEN_SELECT].opened) {
      const params = modals[MODAL_IDS.TOKEN_SELECT].params as ITokenModalParams;
      if (params.selToken) {
        if (selTokenType === TOKEN_DIRECTRION.FROM)
          setFromToken(params.selToken);
        else setToToken(params.selToken);
      }
    }
  }, [modals[MODAL_IDS.TOKEN_SELECT].opened]);

  // Handler for amounts changes in fromToken
  const fromAmountChange = (value: string) => {
    if (value !== fromAmount) setFromAmount(value);
    // Need to wrap with Lazy call providers
  };

  // LazyCall to avoid bunch of calls
  const lazyGuardedCall = (
    amount: string,
    aToken: IToken | undefined,
    bToken: IToken | undefined
  ) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Validate token
    if (!aToken || !bToken) {
      return;
    }
    if (!isValidAmount(amount)) {
      return;
    }

    // Need to wrap with Lazy call providers
    timerRef.current = setTimeout(() => {
      getFlowList(amount, aToken, bToken);
    }, 500);
  };

  // Get flow pair list (main API calls)
  const getFlowList = async (
    amount: string,
    aToken: IToken,
    bToken: IToken
  ) => {
    try {
      // Cancel the previous request if it exists
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      // Create a new AbortController for the current request
      const controller = new AbortController();
      controllerRef.current = controller;

      const priceQuote: any = {
        from_amount: amount,
        from_symbol: aToken.name,
        to_symbol: bToken.name,
        private_mode: false,
      };

      setButtonState(SWAP_BUTTON_STATE.FETCHING_ROUTE);

      // Get flow list
      const { status, data } = await fetchServerData({
        method: API_STYLE.POST,
        param: priceQuote,
        url: API_URIS.FETCH_SWAP_QUOTE,
        abortController: controller,
      });

      if (status === 200 && data?.data) {
        const { toAmount, maxAmount, minAmount } = data.data;
        if (maxAmount > 0 && fromAmount > maxAmount) {
          toast.error("The Input amount is too much.");
          return;
        }

        const expectedAmount = toAmount?.toString();
        const minimumAmount = minAmount ? minAmount?.toString() : "0";

        setToAmount(expectedAmount);

        if (expectedAmount === "-1") {
          setButtonState(SWAP_BUTTON_STATE.INVALID_ROUTE);
        } else setButtonState(SWAP_BUTTON_STATE.DEFAULT);
      }

      // if (data) {
      //   if (typeof data === "string") {
      //     // toast.error(data);
      //     return;
      //   } else {
      //     const { toAmount, maxAmount, minAmount } = data;

      //     if (maxAmount > 0 && fromAmount > maxAmount) {
      //       toast.error("The Input amount is too much.");
      //       return;
      //     }

      //     const expectedAmount = toAmount?.toString();
      //     const minimumAmount = minAmount ? minAmount?.toString() : "0";

      //     setToAmount(expectedAmount);

      //     if (expectedAmount === "-1") {
      //       // toast.error(
      //       //   <ToastContent
      //       //     title={"Please Input Minimum Amount Required"}
      //       //     content={
      //       //       "Make sure your fill the minimum amount to perform the swap."
      //       //     }
      //       //   />
      //       // );
      //     }
      //     // setMinRequiredAmount(minimumAmount);
      //   }
      // }
    } catch (err0r) {}
  };

  return (
    <>
      <div className={`${styles.swapForm}`}>
        <div className="flex flex-col w-full items-center">
          <div className={styles.buttonContainer}>
            {buttons.map((button, index) => (
              <CButton
                tiny={isMobile}
                active={button.clicked}
                key={index}
                onClick={() => handleButtonPress(button.name)}
                bordered={false}
                type={BUTTON_TYPES.PILLED}
                buttonType="button"
              >
                {button.name}
              </CButton>
            ))}
          </div>
        </div>

        <div className={styles.toggleHeader}>
          <div className={styles.toggleSwitchContainer}>
            <p>Semi Private</p>
            <ToggleSwitch />
            <p>Private</p>
          </div>
        </div>

        {displayedModal === buttons[0].name ? (
          <div className={styles.gridContainer}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputLabel}>
                <div className={styles.networkLabel}>
                  <span className="flex w-[50px]">From: </span>
                  {fromToken ? (
                    <>
                      <img src={fromToken?.network_logo} />
                      <span>{fromToken?.network_name} Network</span>
                    </>
                  ) : (
                    <Placeholder height={20} />
                  )}
                </div>
                <div className={styles.toggleHeader}>
                  <div className={styles.toggleSwitchContainer}>
                    <p>Semi Private</p>
                    <ToggleSwitch />
                    <p>Private</p>
                  </div>
                </div>
              </div>
              <CInput
                large
                fill
                required
                onlyNumbers
                precision={8}
                placeholder="0"
                value={fromAmount}
                onChange={fromAmountChange}
                suffix={
                  <div
                    onClick={() => openTokenModal(TOKEN_DIRECTRION.FROM)}
                    className={styles.iconContainer}
                  >
                    <img className="w-7" src={fromToken?.logo} alt="" />
                    <span>{fromToken?.display_name.split(" ")[0]}</span>
                    <RotateItem rotation={ROTATE_TYPES.ROT_90}>
                      <SVGIcon name={ICON_NAMES.RIGHT_ARROW} size={16} />
                    </RotateItem>
                  </div>
                }
              />
            </div>

            <div className={styles.inputWrapper}>
              <div className={styles.inputLabel}>
                <div className={styles.networkLabel}>
                  <span className="flex w-[50px]">To:</span>
                  {toToken ? (
                    <>
                      <img src={toToken?.network_logo} />
                      <span>{toToken?.network_name} Network</span>
                    </>
                  ) : (
                    <Placeholder height={20} />
                  )}
                </div>
              </div>
              <div className={styles.walletField}>
                <CInput
                  large
                  fill
                  disabled
                  required
                  onlyNumbers
                  precision={8}
                  placeholder="0"
                  value={toAmount}
                  loading={buttonState === SWAP_BUTTON_STATE.FETCHING_ROUTE}
                  suffix={
                    <div
                      onClick={() => openTokenModal(TOKEN_DIRECTRION.TO)}
                      className={styles.iconContainer}
                    >
                      <img className="w-7" src={toToken?.logo} alt="" />
                      <span>{toToken?.display_name.split(" ")[0]}</span>
                      <div>
                        <RotateItem rotation={ROTATE_TYPES.ROT_90}>
                          <SVGIcon name={ICON_NAMES.RIGHT_ARROW} size={16} />
                        </RotateItem>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputLabel}>
                <span>Receiving wallet address:</span>
              </div>
              <div className={styles.walletField}>
                <CInput
                  big
                  fill
                  required
                  placeholder="Receiving wallet address"
                  value={receivingWallet}
                  onChange={(value) => {
                    setReveivingWallet(value);
                  }}
                />
              </div>
            </div>

            <div className={styles.checkboxContainer}>
              <Checkbox
                checked={checkPTR}
                onChange={(e) => {
                  setCheckPTR(e.target.checked);
                }}
              />
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
            <CButton
              large
              outline
              primary
              bordered
              className={styles.swap_button}
              onClick={handleSwap}
              type={BUTTON_TYPES.PILLED}
              disabled={
                buttonState !== SWAP_BUTTON_STATE.DEFAULT ||
                Number(toAmount) <= 0
              }
            >
              {buttonState}
              {(buttonState === SWAP_BUTTON_STATE.FETCHING_ROUTE ||
                buttonState === SWAP_BUTTON_STATE.CREATING_ORDER) && (
                <FetchingLoader />
              )}
            </CButton>
          </div>
        ) : (
          <img src={comingsoon} alt="Coming Soon" />
        )}

        <span className={styles.centerText}>
          First time on hydra?{" "}
          <a href="#" className={styles.link}>
            Watch
          </a>
        </span>
      </div>
    </>
  );
};

export default SwapForm;
