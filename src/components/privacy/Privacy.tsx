import styles from './privacy.module.scss';
import Button from "../reusables/Button";
import privacyBg from "../../assets/privacyBg.svg";
import Globe from "../home/provisions/darkEarthSun/DarkEarthSun";
import Caution1 from "./caution1/Caution1";
import Caution2 from "./caution2/Caution2";
import Caution3 from "./caution3/Caution3";
import CButton from '../reusables/CButton';
import { BUTTON_TYPES } from '../../costants/types';

const Privacy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div
                    style={{ background: `url(${privacyBg})` }}
                    className={styles.background}
                />
                <h2 className={styles.heading}>
                    We're all going to think hard about privacy.
                </h2>
                <p className={styles.description}>
                    Bank accounts provide a high degree of personal privacy. With crypto, if your wallet address becomes known, your balance and all your crypto activities are known and traceable
                </p>
                <CButton primary type={BUTTON_TYPES.PILLED} gradient>
                    WHY PRIVACY MATTERS
                </CButton>
            </div>
            <div className={styles.whyMatters}>
                <h2 className={styles.title}>WHY PRIVACY MATTERS</h2>
                <div className={styles.globeContainer}>
                    <Globe />
                </div>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.section}>
                    <p className={styles.sectionNumber}>01</p>
                    <h3 className={styles.sectionTitle}>YOUR CRYPTO. KEEP IT PRIVATE</h3>
                    <p className={styles.sectionContent}>
                        When buying a coffee at Starbucks, you probably do not want to share your bank account balance with the cashier. Crypto has a signature feature of transparency, as the underlying blockchain networks serve as public ledgers, enabling anyone to have access to all the transactions happening on the network. The blockchain is immutable, public and permanent, whether it's MultiversX, Ethereum or BNB Chain.
                    </p>
                </div>
                <Caution1 />
                <Caution2 />
                <Caution3 />
                <div className={styles.section}>
                    <p className={styles.sectionNumber}>05</p>
                    <h3 className={styles.finalSectionTitle}>
                        Protecting Our Wallets & Transactions
                    </h3>
                    <p className={styles.sectionContent}>
                        By safeguarding privacy, we protect individuals from these risks, ensuring their physical, emotional, and financial well-being.
                    </p>
                    <div className={styles.highlightBox}>
                        <h4 className={styles.highlightTitle}>
                            Safeguarding Individual Autonomy
                        </h4>
                        <p className={styles.highlightContent}>
                            Privacy empowers individuals with the essential right to exercise autonomy over their personal lives. It allows individuals to make choices free from external coercion or judgment. By preserving privacy, we respect the uniqueness and diversity of individuals, fostering a society that values personal freedom and self-determination.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.whyMatters}>
                <div className={styles.globeContainer}>
                    <Globe />
                </div>
            </div>
        </div>
    );
};

export default Privacy;
