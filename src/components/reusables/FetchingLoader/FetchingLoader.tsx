import styles from "./index.module.scss";

const FetchingLoader: React.FC<{ width?: number; height?: number }> = ({
  width = 100,
  height = 30,
}) => {
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FetchingLoader;
