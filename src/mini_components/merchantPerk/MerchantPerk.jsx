import styles from "./MerchantPerk.module.scss";

const MerchantPerk = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <h6>{title}</h6>
        <p className={` p-default ${styles.text}`}>{text}</p>
      </div>
    </div>
  );
};

export default MerchantPerk;
