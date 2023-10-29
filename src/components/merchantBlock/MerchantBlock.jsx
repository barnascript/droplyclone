import { MerchantBlockContent } from "../../exports/mini_components";
import styles from "./MerchantBlock.module.scss";

const MerchantBlock = ({
  image,
  title,
  subtitle,
  text,
  subtitle2,
  text2,
  backgroundColor,
  button_backgroundColor,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`sw ${styles.container}`}>
        <div className={styles.block}>
          {" "}
          <MerchantBlockContent
            title={title}
            subtitle={subtitle}
            text={text}
            subtitle2={subtitle2}
            text2={text2}
            button_backgroundColor={button_backgroundColor}
          />
        </div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default MerchantBlock;
