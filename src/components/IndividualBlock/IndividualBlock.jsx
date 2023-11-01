import styles from "./IndividualBlock.module.scss";
import { SectionTextTwo } from "../../exports/mini_components";
import Image from "next/image";
const IndividualBlock = ({
  image,
  backgroundColor,
  title,
  content,
  button_text,
  direction,
  contentDirection,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor, direction: direction }}
    >
      <Image src={image} alt={title} />
      <div className={styles.section_content}>
        <SectionTextTwo
          title={title}
          content={content}
          button_text={button_text}
          contentDirection={contentDirection}
          href="https://wa.link/8vdbse"
        />
      </div>
    </div>
  );
};

export default IndividualBlock;
