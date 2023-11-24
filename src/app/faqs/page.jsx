"use client";

import styles from "./FaqPage.module.scss";
import { Faq } from "@/exports/mini_components";
import { Navbar } from "@/exports/components";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "../../components/a";

const FaqPage = () => {
  const [faqdata, setFaqData] = useState(data);
  // useEffect(() => {
  //   function getFaqs() {
  //     axios
  //       .get("https://droply-api-a4cf30ebf224.herokuapp.com/v1/faqs/")
  //       .then((response) => setFaqData(response.data));
  //   }

  //   getFaqs();
  // }, []);

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={`sw ${styles.faqs_div}`}>
        <h3>Frequently Asked Questions</h3>
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
      </div>
    </div>
  );
};

export default FaqPage;
