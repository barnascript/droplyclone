import {
  GetInTouch,
  IndividualHero,
  IndividualBlocks,
  Navbar,
} from "../../exports/components";
import styles from "./Individual.module.scss";

const WhyDroply = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <IndividualHero />
      <IndividualBlocks />
      <GetInTouch />
    </div>
  );
};

export default WhyDroply;
