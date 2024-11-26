import useGlobalContext from "@hooks/useGlobalContext";
import styles from "./index.module.scss";
import clx from "classnames";
import useBodyScrollLock from "@hooks/useBodyScrollLock";

const PageLoader = () => {
  const { isPageLoading } = useGlobalContext();
  useBodyScrollLock(isPageLoading);

  return (
    <div
      className={clx(styles.loader_container, {
        [styles.hidden]: !isPageLoading,
      })}
    >
      <div className={styles.loader}>
        <div style={{ "--i": 1 }}></div>
        <div style={{ "--i": 2 }}></div>
        <div style={{ "--i": 3 }}></div>
        <div style={{ "--i": 4 }}></div>
      </div>
    </div>
  );
};

export default PageLoader;
