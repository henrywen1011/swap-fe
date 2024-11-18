import React from 'react';
import styles from './caution2.module.scss';

const Caution2 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.sectionNumber}>03</p>
            <h3 className={styles.sectionTitle}>
                Transparency is for those who carry out public duties and exercise public power. Privacy is for everyone else.
            </h3>
            <p className={styles.sectionContent}>
                No one has encapsulated the digital dilemma between privacy and order more eloquently than the journalist and former attorney Glenn Greenwald.
            </p>
            <div className={styles.itemsContainer}>
                {
                    [
                        { title: "Stealth Mode" },
                        { title: "No Wallet Connect" },
                        { title: "Multi-Chain" }
                    ].map((info, index) => (
                        <div key={index} className={styles.item}>
                            <h4 className={styles.itemTitle}>{info.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Caution2;
