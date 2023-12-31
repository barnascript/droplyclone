import styles from "./MerchantHero.module.scss";
import { merchant_bg } from "../../exports/images";
import { BigBlueButton } from "../../exports/mini_components";
import Image from "next/image";

const MerchantHero = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={merchant_bg} alt="hero" />
      <div className={`sw ${styles.hero_text}`}>
        <div className={styles.heading}>
          <h1>For Last-Mile Delivery Businesses</h1>
          <p className={`subtitle ${styles.description}`}>
            The Droply last-mile operating system is the solution you have been
            waiting for.
          </p>
        </div>
        <BigBlueButton
          button_text="Get Started"
          href="https://droply-merchant-dashboard.vercel.app/register"
        />
      </div>
    </div>
  );
};

export default MerchantHero;
