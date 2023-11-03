import styles from "./CustomerSignUp.module.scss";
import Image from "next/image";
import { barcode } from "../../exports/icons";
import Link from "next/link";

const CustomerSignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h5>Sign up as a Customer</h5>
        <p className={styles.instruction}>
          Scan the QR Code or click the URL to activate the service of Droply
        </p>
      </div>
      <div className={styles.barcode_div}>
        <p className={styles.whattodo}>1. Scan QR Code to sign up</p>
        <Image src={barcode} alt="barcode" />
      </div>
      <h5>or</h5>
      <div className={styles.signup_div}>
        <p className={styles.whattodo}>2. Sign up with URL</p>
        <Link href="https://droply.com/customer-sign-up/whatsapp/">
          https://droply.com/customer-sign-up/whatsapp/
        </Link>
      </div>
    </div>
  );
};

export default CustomerSignUp;
