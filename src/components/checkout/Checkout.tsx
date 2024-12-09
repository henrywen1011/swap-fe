import styles from "./Checkout.module.scss";
import formBg from "@assets/formBg.png";
import StarAnimation from "../home/hero/heroBg/heroBg";
import PaymentDetails from "./paymentdetails/PaymentDetails";
import Steps from "./steps/Steps";

const Checkout = () => {
  return (
    <div className={styles.container}>
      {/* <div
        className={styles.background}
        style={{
          background: `url(${formBg})`,
          height: "50%",
          backgroundSize: "cover",
        }}
      >
        <Steps />
        <Timer />
      </div> */}
      <div className={styles.fullScreen}>
        <StarAnimation />
      </div>

      <PaymentDetails />
    </div>
  );
};

export default Checkout;
