import React from "react";
import classNames from "classnames";
import styles from "./ButtonLoading.module.scss";

const ButtonLoading: React.FC<{ containerClass?: string; color?: string }> = ({
  containerClass = "",
  color = "#FFFFFF",
}) => {
  return (
    <span className={classNames(styles.button_loading, containerClass)}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default ButtonLoading;
