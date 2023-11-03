import styles from "./Select.module.scss";

const Select = ({ placeholder, id, label }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={`text ${styles.label}`}>
        {label}
        <input type="text" />
      </label>
    </div>
  );
};

export default Select;
