import { GetInTouch, Hero, HomeFaq, MainBlock } from "@/exports/components";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_main_block}>
        <Hero />
        <MainBlock />
      </div>
      <HomeFaq />
      <GetInTouch />
    </div>
  );
};

export default Home;
