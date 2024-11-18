import styles from './Provisions.module.scss';
import Providers from "./providers/Providers";
import ProvidersList from "./providerslist/ProvidersList";

const Provision = () => {

    return (
        <div className={styles.provisionContainer}>
            <h3 className={styles.title}>WE PROVIDE</h3>
            <ProvidersList />
            <Providers />
        </div>
    );
};

export default Provision;
