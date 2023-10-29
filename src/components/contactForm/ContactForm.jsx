import {
  BigButton,
  Input,
  Location,
  Select,
  TextArea,
} from "../../exports/mini_components";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.locations}>
        <Location
          title="Our Headquarters"
          city="Lagos, Nigeria"
          heading="Address:"
          text="24, Alagbado Close, Ijaye
        Okota Estate near ikotun-ekpene road."
        />
        <Location
          title="Other Offices"
          city="Abuja, Nigeria"
          heading="Address:"
          text="24, Alagbado Close, Ijaye
        Okota Estate near ikotun-ekpene road."
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
              <Select label="Phone Number" placeholder="000 000 000" />
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
