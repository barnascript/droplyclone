import styles from "./TextArea.module.scss";

const TextArea = ({ placeholder, id, label, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={`text ${styles.label}`}>
        {label}
        <textarea
          name={name}
          id={id}
          cols="30"
          rows="10"
          placeholder={placeholder}
          required
        ></textarea>
      </label>
    </div>
  );
};

export default TextArea;
