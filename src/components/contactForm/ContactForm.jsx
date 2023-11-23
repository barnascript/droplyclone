"use client";

import { useEffect, useState } from "react";
import {
  BigButton,
  Input,
  Location,
  Select,
  TextArea,
} from "../../exports/mini_components";
import styles from "./ContactForm.module.scss";
import data from "./data";
import { Icon } from "../../exports/components";
import { arrow_down_light } from "@/exports/icons";

const ContactForm = () => {
  const [countries, setCountries] = useState(data);
  const [selectChange, setSelectChange] = useState(data[0].phone);
  const [inputChange, setInputChange] = useState(selectChange);

  const handleSelectChange = (e) => {
    setSelectChange(e.target.value);
    setInputChange(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputChange(e.target.value);
    setSelectChange(e.target.value);
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.locations}>
        <Location
          title="Our Headquarters"
          city="Lagos, Nigeria"
          heading="Address:"
          text="Sterling Towers, 20 Marina Road, Lagos."
        />

        <Location
          title="Contact Details"
          heading="Email:"
          text="hello@droply.com"
          display="none"
        />
      </div>
      <div className={styles.getintouch}>
        <div className={styles.header}>
          <h6>Get in touch</h6>
          <p className={styles.instruction}>
            Complete the sign up form below to create an account with Droply
          </p>
        </div>
        <form>
          <div className={styles.name_phone_number}>
            <div className={styles.name}>
              <Input
                type="text"
                id="name"
                placeholder="Rhoda Kayode"
                label="Your Name"
              />
            </div>
            <div className={styles.phone_number}>
              <select onChange={handleSelectChange} value={selectChange}>
                {countries.map((country) => (
                  <>
                    <option key={country.name} value={country.phone}>
                      {country.flag}
                      {country.name}
                    </option>
                  </>
                ))}
              </select>
              <Image
                src="../assets/arrow_down_light.svg"
                alt="arrow_down"
                className={styles.arrow}
              />

              <div>
                <Icon width={20} height={20} icon={arrow_down_light} />
              </div>

              <input
                type="tel"
                value={inputChange}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Input
            type="email"
            id="email"
            placeholder="rhoda@frydodo.org"
            label="Email Address"
          />
          <TextArea placeholder="Enter your message" label="Label" />
          <BigButton
            button_text="Send Message"
            button_backgroundColor="var(--palatinate-blue)"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
