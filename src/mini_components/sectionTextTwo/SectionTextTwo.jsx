import styles from "./SectionTextTwo.module.scss";
import { BigBlueButton } from "../../exports/mini_components";

const SectionTextTwo = ({
  title,
  content,
  button_text,
  contentDirection,
  href,
}) => {
  return (
    <div className={styles.wrapper} style={{ direction: contentDirection }}>
      <h5>{title}</h5>
      <p>{content}</p>
      <BigBlueButton button_text={button_text} href={href} />
    </div>
  );
};

export default SectionTextTwo;
