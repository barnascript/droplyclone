"use client";
import styles from "./Faq.module.scss";
import { arrow_down_light } from "../../exports/icons";
import { useState } from "react";
import Image from "next/image";

const Faq = ({ question }) => {
  const [toggleFaq, setToggleFaq] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.question_div} onClick={() => setToggleFaq(!toggleFaq)}>
        <p className={`subtitle ${styles.question}`}>{question}</p>
        <Image src={arrow_down_light} alt="arrow_down_light" />
      </div>
      {toggleFaq && (
        <p className={styles.answer} onClick={() => setToggleFaq(!toggleFaq)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel nulla illo officiis doloremque veritatis
          temporibus quo nemo odio ipsam natus nesciunt veniam blanditiis aliquid? Molestias quaerat, quibusdam nisi
          autem eos, et veritatis enim, placeat vitae tempora dignissimos? Magnam, at. Atque, modi repellendus
          voluptatem a nesciunt corrupti eligendi ea mollitia?
        </p>
      )}
    </div>
  );
};

export default Faq;
