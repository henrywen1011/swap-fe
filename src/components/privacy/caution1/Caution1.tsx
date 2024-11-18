import React from 'react';
import styles from './caution1.module.scss';

const Caution1 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.sectionNumber}>02</p>
            <h3 className={styles.sectionTitle}>
                Every step of your blockchain footprint is public
            </h3>
            <p className={styles.sectionContent}>
                All transactions are recorded and can be accessed publicly using tools like blockchain scanners.
            </p>
            <div className={styles.itemsContainer}>
                {
                    [
                        {
                            title: "Your Wallet Should Stay Safe",
                            text: "Once your crypto wallet address is known, your balance and every activity related to your assets holdings can be traced."
                        },
                        {
                            title: "Permanent Monitoring",
                            text: "For example, if Joe sends 1 BTC to Mary, this transaction is permanently recorded on the blockchain using their wallet addresses."
                        },
                        {
                            title: "Avoid Being Stalked",
                            text: "This makes the network pseudonymous and anyone who knows Joe's wallet address can see a full record of every transaction they ever make on the network."
                        }
                    ].map((info, index) => (
                        <div key={index} className={styles.item}>
                            <p className={styles.itemNumber}>0{index + 1}</p>
                            <h4 className={styles.itemTitle}>{info.title}</h4>
                            <p className={styles.itemText}>{info.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Caution1;
