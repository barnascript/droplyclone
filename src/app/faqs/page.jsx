"use client";

import styles from "./FaqPage.module.scss";
import { Faq } from "@/exports/mini_components";

const FaqPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.faqs_div}`}>
        <h3>Frequently Asked Questions</h3>
        <div className={styles.faqs}>
          <div className={styles.faq}>
            <Faq question="What is Droply?" />
          </div>
          <div className={styles.faq}>
            <Faq question="Who is Droply for?" />
          </div>
          <div className={styles.faq}>
            <Faq question="What are the documents needed to start using Droply?" />
          </div>
          <div className={styles.faq}>
            <Faq question="What features does Droply have?" />
          </div>
          <div className={styles.faq}>
            <Faq question="What can I do on Droply?" />
          </div>
          <div className={styles.faq}>
            <Faq question="Who can I speak to if I have questions?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
