import styles from "./BigButton.module.scss";

const BigBlackButton = ({ button_text, button_backgroundColor }) => {
  return (
    <div className={styles.wrapper}>
      <button style={{ backgroundColor: button_backgroundColor }}>
        {button_text}
      </button>
    </div>
  );
};

export default BigBlackButton;
