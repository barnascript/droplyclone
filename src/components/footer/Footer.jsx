import { logo_white } from "../../exports/icons";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.logo_and_address}>
          <Image src={logo_white} alt="logo" />
          <div className={styles.address}>
            <h6>Our Headquarters – Lagos, Nigeria</h6>
            <span>Sterling Towers, 20 Marina, Lagos</span>
            <span>Email: support@usedroply.com</span>
          </div>
        </div>
        <div className={styles.links}>
          <Link href="/about">About Us</Link>
          <Link href="/">Why Droply?</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className={styles.links}>
          <Link href="/individual">Droply for Individuals</Link>
          <Link href="/individual">individuals Login</Link>
          <Link href="/merchant">Droply for Businesses</Link>
          <Link href="/merchant">Merchant Login</Link>
        </div>
        <div className={styles.links}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookies">Cookie Settings</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
      <span className={`sw ${styles.copyright}`}>© 2023 Droply, All rights reserved.</span>
    </div>
  );
};

export default Footer;
