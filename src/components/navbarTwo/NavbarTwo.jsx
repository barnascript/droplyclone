import { logo } from "../../exports/icons";
import styles from "./NavbarTwo.module.scss";
import Image from "next/image";

const NavbarTwo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default NavbarTwo;
