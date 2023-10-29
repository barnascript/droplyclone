import styles from "./MerchantPerks.module.scss";
import { MerchantPerk } from "../../exports/mini_components";

const MerchantPerks = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <h2>Why Choose Droply?</h2>
        <div className={styles.perks}>
          <div className={styles.perk}>
            <MerchantPerk
              title="End-to-End Efficiency"
              text="Droply isn't just a software platform; it's your all-in-one partner for streamlined business operations, from orders to delivery and customer support."
            />
          </div>
          <div className={styles.perk}>
            <MerchantPerk
              title="End-to-End Efficiency"
              text="Droply isn't just a software platform; it's your all-in-one partner for streamlined business operations, from orders to delivery and customer support."
            />
          </div>
          <div className={styles.perk}>
            <MerchantPerk
              title="End-to-End Efficiency"
              text="Droply isn't just a software platform; it's your all-in-one partner for streamlined business operations, from orders to delivery and customer support."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantPerks;
