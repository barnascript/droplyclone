"use client";

import styles from "./FaqPage.module.scss";
import { Faq } from "@/exports/mini_components";
import axios from "axios";
import { useEffect, useState } from "react";

const FaqPage = () => {
  const [faqdata, setFaqData] = useState([]);
  useEffect(() => {
    function getFaqs() {
      axios
        .get("https://droply-api-a4cf30ebf224.herokuapp.com/v1/faqs/")
        .then((response) => setFaqData(response.data));
    }

    getFaqs();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.faqs_div}`}>
        <h3>Frequently Asked Questions</h3>
        <div className={styles.faqs}>
          {faqdata?.map((datum) => (
            <div className={styles.faq}>
              <Faq question={datum.question} answer={datum.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
