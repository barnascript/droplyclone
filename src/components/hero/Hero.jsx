import { BigButton } from "../../exports/mini_components";
import styles from "./Hero.module.scss";
import { graph } from "../../exports/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={` ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <h1 className={styles.header}>Unlocking Efficiency and Fueling Growth: Your Last-Mile Success Partner</h1>
        <p className={`subtitle ${styles.hero_text}`}>
          Droply isn't just another logistics solution; it's a game-changer. We've developed a robust "last-mile
          operating system" that offers a range of operational and financial services tailored specifically for
          small-scale, on-demand logistics service providers.
        </p>
        <div className={styles.buttons}>
          <BigButton button_text="Merchant Sign up" button_backgroundColor="var(--palatinate-blue)" />
          <BigButton button_text="Change this text" button_backgroundColor="var(--eerie-black)" />
        </div>
      </div>
      <div className={` ${styles.dashboard_div}`}>
        <Image src={graph} alt="dashboard" className={`sw ${styles.dashboard}`} />
        <div className={styles.image_black_background}></div>
      </div>
    </div>
  );
};

export default Hero;
