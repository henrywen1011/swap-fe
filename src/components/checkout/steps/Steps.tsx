import { useEffect, useState } from "react";
import pending from "@assets/pending.svg";
import nextstep from "@assets/nextstep.svg";
import deposit from "@assets/deposit.svg";
import anonymizing from "@assets/anonymizing.svg";
import exchanging from "@assets/exchanging.svg";
import complete from "@assets/complete.svg";
import styles from "./steps.module.scss"; // Import the CSS module

const stepsArr = [
  { label: "deposit", img: deposit },
  { label: "anonymizing", img: anonymizing },
  { label: "exchanging", img: exchanging },
  { label: "complete", img: complete },
];

const Steps = () => {
  const stringedTransaction: any = localStorage.getItem("transaction");
  const transaction = JSON.parse(stringedTransaction);

  const transactionCreatedTime = new Date(transaction.timeCreated).getTime();
  const [currentStep, setCurrentStep] = useState(0); // Starts at step 0 (deposit)

  useEffect(() => {
    const updateStep = () => {
      const now = Date.now();
      const elapsedMinutes = Math.floor(
        (now - transactionCreatedTime) / (1000 * 60)
      ); // Calculate minutes passed
      const newStep = Math.min(
        Math.floor(elapsedMinutes / 2),
        stepsArr.length - 1
      ); // Update every 2 minutes, max is the last step
      setCurrentStep(newStep);
    };

    updateStep(); // Run initially

    const interval = setInterval(() => {
      updateStep();
    }, 120 * 1000); // Check every 2 minutes (120,000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [transactionCreatedTime]);

  return (
    <div className="grid grid-cols-2 md:flex w-full max-w-[70rem] lg:max-w-[80rem] px-2 md:justify-between gap-4 md:gap-0">
      {stepsArr.map((step, index) => (
        <div key={index} className={styles.stepContainer}>
          {/* Show "Pending" icon for the current step */}
          {index === currentStep && (
            <img src={pending} alt="Pending" className={styles.pendingIcon} />
          )}

          {/* Show "Next Step" icon for the next step */}
          {index === currentStep + 1 && (
            <img
              src={nextstep}
              alt="Next Step"
              className={styles.nextStepIcon}
            />
          )}

          {/* Main step image */}
          <img className={styles.stepImage} src={step.img} alt={step.label} />
        </div>
      ))}
    </div>
  );
};

export default Steps;
