import styles from "./GetInTouch.module.scss";
import { Button } from "../../exports/mini_components";

const GetInTouch = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <h6>Got any more questions?</h6>
        <Button
          button_bgColor="white"
          button_text="More FAQs"
          height="51px"
          paddingInline="40px"
          button_color="var(--palatinate-blue)"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
