import { useState } from "react";
import copy from "@assets/copy.svg";
import styles from "./copy.module.scss"; // Import the CSS module

const Copy = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className={styles.copyContainer}>
      <img
        className={styles.copyIcon}
        src={copy}
        alt="copy"
        onClick={handleCopy}
      />
      {copied && <span className={styles.copyTooltip}>Copied!</span>}
    </div>
  );
};

export default Copy;
