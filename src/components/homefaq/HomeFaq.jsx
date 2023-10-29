import styles from "./HomeFaq.module.scss";
import { BigButton, Button, Faq } from "../../exports/mini_components";

const HomeFaq = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <h5>Frequently Asked Questions</h5>

        <div className={styles.faqs}>
          <Faq question="Who is Droply?" />
          <Faq question="Who is Droply?" />
        </div>

        <div className={styles.button}>
          <BigButton
            button_text="More FAQs"
            button_backgroundColor="var(--palatinate-blue)"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
