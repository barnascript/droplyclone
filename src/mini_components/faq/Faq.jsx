"use client";
import styles from "./Faq.module.scss";
import { arrow_down_light } from "../../exports/icons";
import { useState } from "react";
import Image from "next/image";

const Faq = ({
  question,
  pointa,
  pointb,
  pointc,
  pointd,
  title1,
  title2,
  pointy,
  pointz,
}) => {
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
        <div className={styles.answer} onClick={() => setToggleFaq(!toggleFaq)}>
          <div className={styles.first}>
            <span>{title1}</span>
            <ul>
              <li>{pointa}</li>
              <li>{pointb}</li>
              <li>{pointc}</li>
              <li>{pointd}</li>
            </ul>
          </div>
          <div className={styles.second}>
            <span>{title2}</span>
            <ul>
              <li>{pointy}</li>
              <li>{pointz}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
