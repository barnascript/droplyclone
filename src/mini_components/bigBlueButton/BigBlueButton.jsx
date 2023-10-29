import styles from "./BigBlueButton.module.scss";

const BigBlueButton = ({ button_text }) => {
  return (
    <div className={styles.wrapper}>
      <button>{button_text}</button>
    </div>
  );
};

export default BigBlueButton;
