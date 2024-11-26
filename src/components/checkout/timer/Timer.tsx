import { useEffect, useState } from "react";
import checked from "@assets/check.svg";
import styles from "./timer.module.scss"; // Import the CSS module

const Timer = () => {
  // Assuming transaction.timeCreated is in ISO string format
  const transactionCreatedTime = 1000; //new Date(transaction.timeCreated).getTime(); // Get timestamp in milliseconds
  const deadline = transactionCreatedTime + 30 * 60 * 1000; // Add 30 minutes (in milliseconds)

  const [timeLeft, setTimeLeft] = useState(Math.max(deadline - Date.now(), 0)); // Calculate initial time left

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        const currentTimeLeft = Math.max(deadline - Date.now(), 0); // Ensure time doesn't go below 0
        setTimeLeft(currentTimeLeft);

        if (currentTimeLeft === 0) {
          clearInterval(interval); // Stop the interval when time reaches 0
        }
      }, 1000); // Run every second

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [timeLeft, deadline]);

  // Convert milliseconds into minutes and seconds
  const minutes = Math.floor(timeLeft / (1000 * 60)); // Convert to minutes
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Remaining seconds

  const tenMinutesInMillis = 10 * 60 * 1000;

  return (
    <div className={styles.timerContainer}>
      {true ? (
        <>
          <h2 className="text-center text-5xl font-semibold">CHECKOUT</h2>
          <span className="text-center md:text-xl">
            <span className="text-[#eeb91d] md:text-xl">Deposit </span> the
            required funds{" "}
            <span className="text-[#eeb91d] md:text-xl">
              to the Deposit-to wallet address
            </span>{" "}
            in order to create a transaction.
          </span>
          <div className="flex gap-4 md:gap-8">
            <span className={styles.timerDigits}>
              {String(minutes).padStart(2, "0")} {/* Ensure 2 digits */}
            </span>
            <span className={styles.timeSeparator}>:</span>
            <span className={styles.timerDigits}>
              {String(seconds).padStart(2, "0")} {/* Ensure 2 digits */}
            </span>
          </div>
          <p className={styles.timeLeftLabel}>Time left to deposit funds</p>
        </>
      ) : (
        <div className={styles.transactionCompleteContainer}>
          <img src={checked} alt="Transaction Completed" />
          <h3 className={styles.transactionCompleteText}>
            Your Transaction Has Been Completed
          </h3>
        </div>
      )}
    </div>
  );
};

export default Timer;
