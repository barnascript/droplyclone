import styles from "./Merchant.module.scss";
import {
  MerchantHero,
  MerchantPerks,
  MerchantBlocks,
  GetInTouch,
} from "../../exports/components";

//merchant page
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
