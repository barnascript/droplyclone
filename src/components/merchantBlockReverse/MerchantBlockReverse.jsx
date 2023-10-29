import { MerchantBlockContent } from "../../exports/mini_components";
import styles from "./MerchantBlockReverse.module.scss";

const MerchantBlock = ({
  image,
  title,
  subtitle,
  text,
  subtitle2,
  text2,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`sw ${styles.container}`}>
        <img src={image} alt={title} />
        <div className={styles.block}>
          <MerchantBlockContent
            title={title}
            subtitle={subtitle}
            text={text}
            subtitle2={subtitle2}
            text2={text2}
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantBlock;
