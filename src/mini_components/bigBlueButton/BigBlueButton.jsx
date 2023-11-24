import styles from "./BigBlueButton.module.scss";
import Link from "next/link";

const BigBlueButton = ({ button_text, href, width }) => {
  return (
    <Link href={href} className={styles.wrapper}>
      <button style={{ width: width }}>{button_text}</button>
    </Link>
  );
};

export default BigBlueButton;
