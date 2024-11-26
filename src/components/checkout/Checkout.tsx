import styles from "./Checkout.module.scss";
import formBg from "@assets/formBg.png";
import StarAnimation from "../home/hero/heroBg/heroBg";
import PaymentDetails from "./paymentdetails/PaymentDetails";
import Steps from "./steps/Steps";
import Timer from "./timer/Timer";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{
          background: `url(${formBg})`,
          height: "50%",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.fullScreen}>
          <StarAnimation />
        </div>
        <Timer />
      </div>
      <Steps />
      <PaymentDetails />
    </div>
  );
};

export default Checkout;
