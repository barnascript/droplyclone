import { BigButton } from "../../exports/mini_components";
import styles from "./Hero.module.scss";
import { graph } from "../../exports/images";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <h1 className={styles.header}>
          <b className={styles.unlocking}>Unlocking Efficiency</b>{" "}
          <b>and Fueling Growth:</b>{" "}
          <b className={styles.last_mile}>Your Last-Mile Success </b>Partner
        </h1>
        <p className={`subtitle ${styles.hero_text}`}>
          Droply isn&apos;t just another logistics solution; it&apos;s a
          game-changer. We&apos;ve developed a robust &quot;last-mile operating
          system&quot; that offers a range of operational and financial services
          tailored specifically for small-scale, on-demand logistics service
          providers.
        </p>
        <div className={styles.buttons}>
          <Link href="https://droply-merchant-dashboard.vercel.app/register">
            {" "}
            <BigButton
              button_text="Merchant Sign up"
              button_backgroundColor="var(--palatinate-blue)"
            />
          </Link>
          <Link href="/customer">
            <BigButton
              button_text="Make A Delivery"
              button_backgroundColor="var(--eerie-black)"
            />
          </Link>
        </div>
      </div>
      <div className={`${styles.dashboard_div}`}>
        <Image
          src={graph}
          alt="dashboard"
          className={`sw ${styles.dashboard}`}
        />
        <div className={styles.image_black_background}></div>
      </div>
    </div>
  );
};

export default Hero;
