import styles from "./IndividualBlocks.module.scss";
import { SectionContent } from "../../exports/components";
import { seamless, secure, whatsapp } from "../../exports/images";

const IndividualBlocks = () => {
  return (
    <div className={` ${styles.wrapper}`}>
      <div className={` ${styles.content_wrapper_one}`}>
        <div className={`sw ${styles.content}`}>
          <SectionContent
            image={seamless}
            title="Seamless Access to a Diverse Bouquet of Logistics Services"
            content="Droply serves as your one-stop destination for accessing a wide array of logistics businesses, all under a single platform. Say goodbye to the hassle of dealing with multiple delivery providers; with Droply, you have access to a comprehensive network of logistics services that can handle everything from parcel deliveries to specialized cargo shipments."
            button_text="Make A Delivery"
          />
        </div>
      </div>
      <div className={` ${styles.content_wrapper_two}`}>
        <div className={`sw ${styles.content}`}>
          <SectionContent
            image={whatsapp}
            title="User-Friendly Accessibility"
            content="We understand the importance of convenience in the digital age. With Droply, you can easily make delivery requests through two convenient channels: our user-friendly web platform or the ubiquitous WhatsApp. It's as simple as sending a message or a few clicks away on our website, ensuring that you have effortless access to our services whenever and wherever you need them."
            button_text="Make A Delivery"
            direction="rtl"
            contentDirection="ltr"
          />
        </div>
      </div>
      <div className={` ${styles.content_wrapper_three}`}>
        <div className={`sw ${styles.content}`}>
          <SectionContent
            image={secure}
            title="Secure Transit for Your Goods"
            content="At Droply, we prioritize the safety of your valuable shipments. That's why we provide insurance coverage for your goods while they are in transit. You can rest easy knowing that your items are protected against unforeseen circumstances, giving you peace of mind throughout the delivery process."
            button_text="Make A Delivery"
          />
        </div>
      </div>
      <div className={` ${styles.content_wrapper_four}`}>
        <div className={`sw ${styles.setion_contents}`}>
          <SectionContent
            image={whatsapp}
            title="Reliable and Efficient Service"
            content="Reliability and efficiency are at the core of what we do. Droply is committed to ensuring that our delivery partners operate optimally and ensure that your goods reach their destination on time and in pristine condition. Our robust operating system is designed to optimize routes, minimize delays, and provide real-time tracking, so you're always in the know about the status of your deliveries via our delivery partners."
            button_text="Make A Delivery"
            direction="rtl"
            contentDirection="ltr"
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualBlocks;
