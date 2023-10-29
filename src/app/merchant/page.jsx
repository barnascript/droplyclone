import styles from "./Merchant.module.scss";
import { Navbar, MerchantHero, MerchantPerks, MerchantBlocks, GetInTouch, Footer } from "../../exports/components";

const Merchant = () => {
  return (
    <div className={styles.wrapper}>
      <MerchantHero />
      <MerchantPerks />
      <MerchantBlocks />
      <GetInTouch />
    </div>
  );
};

export default Merchant;
