import React from 'react';
import styles from './caution3.module.scss';

const Caution3 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.sectionNumber}>04</p>
            <h3 className={styles.sectionTitle}>
                The Importance of Privacy: Safeguarding Autonomy, Security, and Democracy
            </h3>
            <p className={styles.sectionContent}>
                Just like your bank account, your crypto holdings should not be exposed to the general public.
            </p>
            <div className={styles.itemsContainer}>
                {
                    [
                        {
                            title: "Why should everyone be able to track where you earn your money and where it is spent?"
                        },
                        {
                            title: "You don't walk around showing everyone the balance of your bank account, so why should crypto be any different?"
                        },
                        {
                            title: "Not only is this intrusive, it's also dangerous."
                        },
                        {
                            title: "Having your wallets doxxed can make you a target for malicious actors."
                        }
                    ].map((info, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${index === 1 || index === 2 ? styles.itemLarge : styles.itemSmall}`}
                        >
                            <h4 className={styles.itemTitle}>{info.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Caution3;
