import { useState } from "react";
import arrow from "@assets/arrow.svg";
import pocketCoin from "@assets/pocketCoin.svg";
import Copy from "../copy/Copy";
import QRCode from "react-qr-code";
import styles from "./paymentdetails.module.scss"; // Import the CSS module

const PaymentDetails = () => {
  const stringedTransaction: any = localStorage.getItem("transaction");
  const transaction = JSON.parse(stringedTransaction);
  const [generatedPayment] = useState({
    to: "0xb69b4b4a6a5a01e970c04cd8306a25e85cce71f8",
  });

  const exchangeDetails: any = localStorage.getItem("exchangeDetails");
  const exchange = JSON.parse(exchangeDetails);

  return (
    <div className={styles.container}>
      <h2 className="text-center text-2xl md:text-4xl font-semibold">
        TRANSACTION DETAILS
      </h2>
      <div className={styles.transactionDetails}>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-[62%] flex flex-col gap-4 text-white">
            <div className="w-full flex flex-col gap-4">
              <p>Deposit</p>
              <div className={styles.card}>
                <span className={styles.depositSection}>
                  <span>
                    <img src={exchange.sending.image} alt="eth coin" />
                  </span>
                  <h4 className="md:text-2xl font-semibold">
                    {transaction?.fromAmount} {exchange.sending.name}
                  </h4>
                  <p className="capitalize">
                    {exchange.sending.fullname} Smart Chain Network
                  </p>
                </span>
                <span>
                  <img className={styles.arrowIcon} src={arrow} alt="arrow" />
                </span>
                <span className={styles.walletSection}>
                  <span className="">
                    <img
                      className="scale-[80%] md:scale-100"
                      src={pocketCoin}
                      alt="eth coin"
                    />
                  </span>
                  <span className={styles.copyContainer}>
                    <h4 className="md:text-2xl font-semibold">
                      {generatedPayment?.to.slice(0, 5)}...
                      {generatedPayment?.to.slice(
                        generatedPayment?.to?.length - 4,
                        generatedPayment?.to?.length
                      )}
                    </h4>
                    <Copy text={generatedPayment?.to} />
                  </span>
                  <p>Deposit Wallet Address</p>
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p>You Get</p>
              <div className={styles.card}>
                <span className={styles.depositSection}>
                  <span>
                    <img src={exchange.receiving.image} alt="solana coin" />
                  </span>
                  <h4 className="md:text-2xl font-semibold">
                    {transaction?.toAmount} {exchange.receiving.name}
                  </h4>
                  <p>{exchange.receiving.fullname} Smart Chain Network</p>
                </span>
                <span>
                  <img className={styles.arrowIcon} src={arrow} alt="arrow" />
                </span>
                <span className={styles.walletSection}>
                  <span className="">
                    <img
                      className="scale-[80%] md:scale-100"
                      src={pocketCoin}
                      alt="eth coin"
                    />
                  </span>
                  <span className={styles.copyContainer}>
                    <h4 className="md:text-2xl font-semibold">
                      {transaction?.receivingWallet.slice(0, 5)}...
                      {transaction?.receivingWallet.slice(
                        transaction?.receivingWallet?.length - 4,
                        transaction?.receivingWallet?.length
                      )}
                    </h4>
                    <Copy text={transaction?.receivingWallet} />
                  </span>
                  <p>Receiving Wallet Address</p>
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p>Hydra ID</p>
              <div className={styles.card}>
                <p>66eb166eb166eb166eb166...0b1c5</p>
                <Copy text="66eb166eb166eb166eb166eb166eb166eb166eb1...0b1c5" />
              </div>
            </div>
          </div>
          <div className={styles.qrCodeSection}>
            <p>Scan From Your Wallet</p>
            <div className="flex items-center p-4 justify-center bg-white rounded-xl">
              <QRCode value={"https://google.com"} size={180} />
            </div>
          </div>
        </div>
        <div className={styles.timeSection}>
          <p>Creation Time</p>
          <p className={styles.highlightedText}>
            {new Date(transaction?.timeCreated).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
