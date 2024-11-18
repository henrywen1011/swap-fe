import StarAnimation from "./heroBg/heroBg";
import styles from "./Hero.module.scss";
import SwapForm from "./swapform/SwapForm";
import formBg from "../../../assets/formBg.png"

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.bgContainer}>
                <StarAnimation />
            </div>
            <div className={styles.imageContainer}>
                <img src={formBg} alt="" className={styles.image} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Trade Crypto Privacy First Cross Chain</h1>
                <p className={styles.description}>
                    Swap directly from your wallet. Break the links between sender and recipient. Restore your privacy.
                </p>
            </div>
            <div className={styles.formContainer}>
                <SwapForm />
            </div>
        </div>
    );
};

export default Hero;
