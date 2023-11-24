"use client";

import styles from "./HomeFaq.module.scss";
import { BigButton, Button, Faq } from "../../exports/mini_components";
import data from "../../components/b";
import { useState } from "react";

const HomeFaq = () => {
  const [faqdata, setFaqData] = useState(data);

  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <h5>Frequently Asked Questions</h5>

        <div className={styles.faqs}>
          {faqdata.map((datum) => (
            <div className={styles.faq} key={datum.id}>
              <Faq
                question={datum.question}
                title1={datum.answer.title1}
                title2={datum.answer.title2}
                pointa={datum.answer.first && datum.answer.first.pointa}
                pointb={datum.answer.first && datum.answer.first.pointb}
                pointc={datum.answer.first && datum.answer.first.pointc}
                pointd={datum.answer.first && datum.answer.first.pointd}
                pointy={datum.answer.second && datum.answer.second.pointy}
                pointz={datum.answer.second && datum.answer.second.pointz}
              />
            </div>
          ))}
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
