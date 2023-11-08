import { barcode } from "../../exports/images";
import styles from "./IndividualHero.module.scss";
import Image from "next/image";
import { BigBlueButton } from "../../exports/mini_components";

const Individual = () => {
  return (
    <div className={` sw ${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <div className={styles.text_div}>
          <div className={styles.hero_text}>
            <h1>
              Send and receive parcels anywhere in Nigeria right from Whatsapp
            </h1>
            <p className={`subtitle ${styles.welcome_message}`}>
              Welcome to Droply, your ultimate solution for streamlined and
              hassle-free last-mile delivery.
            </p>

            <BigBlueButton
              height="51px"
              paddingInline="40px"
              button_color="white"
              button_text="Sign up for free"
              href="https://wa.link/8vdbse"
            />
          </div>
        </div>
      </div>

      <Image src={barcode} alt="barcode" className={styles.barcode} />
    </div>
  );
};

export default Individual;
