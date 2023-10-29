import styles from "./SectionText.module.scss";
import {
  BigBlueButton,
  BigButton,
  Button,
} from "../../exports/mini_components";

const SectionText = ({
  category,
  title,
  texta,
  textb,
  extraPaddingLeft,
  paddingRight,
  paddingBottom,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        paddingLeft: extraPaddingLeft,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
      }}
    >
      <div className={styles.heading}>
        <p className={styles.category}>{category}</p>
        <h5 className={styles.title}>{title}</h5>
      </div>
      <p>
        {texta}
        <br />
        <br /> {textb}
      </p>

      <BigButton
        button_text="Learn More"
        button_backgroundColor="var(--palatinate-blue)"
      />
    </div>
  );
};

export default SectionText;
