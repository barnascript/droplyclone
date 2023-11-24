"use client";

import { eye } from "@/exports/icons";
import styles from "./Password.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const Password = ({ type, placeholder, id, label }) => {
  const [togglePassword, setTogglePasssword] = useState(false);

  useEffect(() => {
    const onTogglePassword = () => {
      console.log(document.querySelector(".password_field"));
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={`text ${styles.label}`}>
        Password
        <input
          type="password"
          placeholder="*************"
          id={id}
          required
          className={styles.password_field}
        />
        <div className={styles.eye_div}>
          <Image src={eye} alt="toggle password" />
        </div>
      </label>
    </div>
  );
};

export default Password;
