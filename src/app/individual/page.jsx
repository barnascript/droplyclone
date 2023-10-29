import { GetInTouch, IndividualHero, IndividualBlocks } from "../../exports/components";
import styles from "./Individual.module.scss";

const WhyDroply = () => {
  return (
    <div className={styles.wrapper}>
      <IndividualHero />
      <IndividualBlocks />
      <GetInTouch />
    </div>
  );
};

export default WhyDroply;
