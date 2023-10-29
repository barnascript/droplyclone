import styles from "./Input.module.scss";

const Input = ({ type, placeholder, id, label }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={`text ${styles.label}`}>
        {label}
        <input type={type} placeholder={placeholder} id={id} required />
      </label>
    </div>
  );
};

export default Input;
