import { useEffect, useRef, useState } from "react";
import Copy from "../copy/Copy";
import QRCode from "react-qr-code";
import styles from "./paymentdetails.module.scss"; // Import the CSS module
import { useCheckoutContext } from "@contexts/CheckoutContext";
import Steps from "../steps/Steps";

const PaymentDetails = () => {
  const { orderDetail } = useCheckoutContext();
  const timerRef = useRef<any>(null);
  const [remainingTs, setRemainingTs] = useState(0);

  useEffect(() => {
    if (orderDetail) runTimer();
  }, [orderDetail]);

  const runTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setTimeout(timeerFunction, 500);
  };

  const timeerFunction = () => {
    const ts = Math.max(
      Math.floor(900 + (orderDetail?.creation_time ?? 0) - Date.now() / 1000),
      0
    );
    setRemainingTs(ts);
    if (ts === 0) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setTimeout(timeerFunction, 500);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className="text-center text-2xl md:text-5xl font-semibold mt-10">
        TRANSACTION DETAILS
      </h2>
      <div className={styles.transactionDetailWrapper}>
        <div className={styles.transactionDetailHeader}>
          <span className={styles.transactionDetailHeader_title}>
            Processing transaction
          </span>
          <div className="flex flex-row items-center gap-3">
            <span className={styles.transactionDetailHeader_transactionId}>
              Transaction ID: {orderDetail?.orderId}
            </span>
            <Copy text={orderDetail?.orderId!} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className={styles.card}>
            <div className="bg-[#ffe878] text-[#000] py-3 px-5 mb-10 text-[22px] rounded-[10px]">
              Time left to send deposit:{" "}
              <span className="text-[#068106] font-bold w-[100px]">{`${Math.floor(
                remainingTs / 60
              )
                .toString()
                .padStart(2, "0")}:${(remainingTs % 60)
                .toString()
                .padStart(2, "0")}`}</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full gap-5">
              <div className="flex flex-col gap-5 grow">
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <div className="w-[340px]">Send in a single transaction:</div>
                  <div className="flex flex-row grow items-center gap-3 text-2xl font-bold text-[#FFE878]">
                    <span>{orderDetail?.from_amount}</span>
                    <span>{orderDetail?.from_symbol}</span>
                    <Copy text={orderDetail?.from_amount!} />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <span className="w-[340px] text-nowrap">
                    To this address:
                  </span>
                  <div className="flex flex-row justify-start items-center gap-3 text-xl font-bold flex-nowrap flex-1">
                    <span className="overflow-wrap text-wrap break-all min-w-[200px] text-[#FFE878]">
                      {orderDetail?.paying_address}
                    </span>
                    <Copy text={orderDetail?.paying_address!} />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <div className="w-[340px]">Deposit Network:</div>
                  <div className="flex flex-row grow items-center gap-3 text-xl font-bold text-[#FFE878]">
                    <img
                      className="w-[24px]"
                      src={orderDetail?.from_network.logo}
                      alt="from network"
                    />
                    <span>{orderDetail?.from_network.name} Network</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-3 justify-center bg-white rounded-xl">
                <QRCode value={"https://google.com"} size={150} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          {/* <p>You Get</p> */}
          <div className={styles.card}>
            <div className="flex flex-col md:flex-row justify-between w-full gap-5">
              <div className="flex flex-col gap-5 grow">
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <div className="w-[340px]">Transaction type:</div>
                  <div className="flex flex-row grow items-center gap-3 text-2xl font-bold text-[#FFE878]">
                    <span>{orderDetail?.from_amount}</span>
                    <span>{orderDetail?.from_symbol}</span>
                    <Copy text={orderDetail?.from_amount!} />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <span className="w-[340px] text-nowrap">
                    You will receive:
                  </span>
                  <div className="flex flex-row justify-start items-center gap-3 text-xl font-bold flex-nowrap flex-1">
                    <span className="overflow-wrap text-wrap break-all min-w-[200px] text-[#FFE878]">
                      {orderDetail?.to_amount}
                      {orderDetail?.to_symbol}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <div className="w-[340px]">Receiver wallet:</div>
                  <div className="flex flex-row grow items-center gap-3 text-xl font-bold text-[#FFE878]">
                    <span>{orderDetail?.to_address}</span>
                    <Copy text={orderDetail?.to_address!} />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-center text-xl">
                  <div className="w-[340px]">Receiving network:</div>
                  <div className="flex flex-row grow items-center gap-3 text-xl font-bold text-[#FFE878]">
                    <img
                      className="w-[24px]"
                      src={orderDetail?.to_network.logo}
                      alt="from network"
                    />
                    <span>{orderDetail?.to_network.name} Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Steps />
      </div>
    </div>
  );
};

export default PaymentDetails;
