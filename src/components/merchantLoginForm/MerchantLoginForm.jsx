import styles from "./MerchantLoginForm.module.scss";
import { BigBlueButton, Input, Password } from "@/exports/mini_components";

const MerchantLoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h5>Welcome Back</h5>
        <div className={styles.inputs}>
          <Input
            label="Email Address"
            placeholder="hello@acmelogistics.com"
            type="email"
          />
          <Password />
        </div>
        <div className={styles.button}>
          <BigBlueButton button_text="Login" href="/merchant" width="100%" />
        </div>
        <div>
          By clicking &quotLog In&quot you agree to Droply&aposs{" "}
          <span>Privacy policy</span> and <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default MerchantLoginForm;
