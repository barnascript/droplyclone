import styles from "./Merchant.module.scss";
import {
  MerchantHero,
  MerchantPerks,
  MerchantBlocks,
  GetInTouch,
  Navbar,
} from "../../exports/components";

//merchant page
const Merchant = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <MerchantHero />
      <MerchantPerks />
      <MerchantBlocks />
      <GetInTouch />
    </div>
  );
};

export default Merchant;
