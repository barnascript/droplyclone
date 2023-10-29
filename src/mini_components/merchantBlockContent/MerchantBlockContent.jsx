import { BigButton } from "../../exports/mini_components";
import styles from "./MerchantBlockContent.module.scss";

const MerchantBlockContent = ({
  title,
  subtitle,
  text,
  subtitle2,
  text2,
  button_backgroundColor,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <p>
          <span>{subtitle}</span>
          {text}
        </p>
        <p>
          <span>{subtitle2}</span>
          {text2}
        </p>
      </div>
      <BigButton
        button_text="Get Started"
        button_backgroundColor={button_backgroundColor}
      />
    </div>
  );
};

export default MerchantBlockContent;
