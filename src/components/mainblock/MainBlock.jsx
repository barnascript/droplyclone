import { SectionText } from "../../exports/mini_components";
import styles from "./MainBlock.module.scss";
import { bike, business } from "../../exports/images";
import Image from "next/image";

const MainBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div id="why-droply" className={`sw ${styles.container}`}>
        <div className={styles.mission}>
          <span className={`subtitle ${styles.title}`}>Our Mission</span>
          <span className={` specialH2 ${styles.specialH2}`}>
            To elevate the logistics landscape in Nigeria, empowering businesses and individuals alike to thrive in this
            dynamic and growing sector.
          </span>
        </div>
        <div className={styles.main_block}>
          <h3>Why Droply?</h3>
          <div className={styles.blocks}>
            <div className={styles.block_one}>
              <div className={styles.section_text}>
                <SectionText
                  category="For Businesses"
                  title="Complete Business Management"
                  texta="   For last-mile companies, Droply provides you with an operating system to
            manage your entire business from one central place. You can manage
            everything from your riders to your orders, deliveries, and payments.
            Droply has got you covered!"
                  textb="Beyond managing your business, Droply provides you with access to
            financing to expand your business, access electric vehicles, insure your
            goods and provide your riders with insurance."
                />
              </div>
              <Image src={bike} alt="bike" className={styles.bike} />
            </div>
            <div className={styles.block_two}>
              <Image src={business} alt="business" className={styles.business} />

              <div className={styles.section_text}>
                <SectionText
                  category="For Individuals"
                  title="Access A Variety of Last-Mile Businesses"
                  texta="   Do you need to make a delivery? Simply send a message to us on WhatsApp, and the nearest and most affordable rider will come to you!"
                  textb="A rider within our ecosystem will be assigned to come and pick up your package."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
