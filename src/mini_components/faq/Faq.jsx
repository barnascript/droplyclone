"use client";
import styles from "./Faq.module.scss";
import { arrow_down_light } from "../../exports/icons";
import { useState } from "react";
import Image from "next/image";

const Faq = ({ question, answer }) => {
  const [toggleFaq, setToggleFaq] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.question_div}
        onClick={() => setToggleFaq(!toggleFaq)}
      >
        <p className={`subtitle ${styles.question}`}>{question}</p>
        <Image src={arrow_down_light} alt="arrow_down_light" />
      </div>
      {toggleFaq && (
        <p className={styles.answer} onClick={() => setToggleFaq(!toggleFaq)}>
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faq;
