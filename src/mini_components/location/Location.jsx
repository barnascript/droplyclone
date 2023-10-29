import styles from "./Location.module.scss";

const Location = ({ title, city, text, heading, display }) => {
  return (
    <div className={styles.wrapper}>
      <p className={`subtitle ${styles.title}`}>{title}</p>
      <p className={styles.city}>{city}</p>
      <div className={styles.address}>
        <b>{heading} </b>
        {text}
      </div>
      <div className={styles.line} style={{ display: display }}></div>
    </div>
  );
};

export default Location;
