import styles from "./index.module.scss";

const PageLoader: React.FC<{ width?: number; height?: number }> = ({
  width = 100,
  height = 30,
}) => {
  return (
    <div className={styles.placeholder} style={{ width, height }}>
      <div
        className={styles.animated_background}
        style={{ width, height }}
      ></div>
    </div>
  );
};

export default PageLoader;
