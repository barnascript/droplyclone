import { MerchantBlock, MerchantBlockReverse } from "../../exports/components";
import styles from "./MerchantBlocks.module.scss";
import { complete, delivery, graph, insurance } from "../../exports/images";

const MerchantBlocks = ({
  image,
  title,
  subtitle,
  text,
  subtitle2,
  text2,
  backgroundColor,
}) => {
  return (
    <div className={styles.wrapper}>
      <MerchantBlock
        image={complete}
        title="Complete Business Management"
        subtitle="End-to-End Efficiency: "
        text="Droply understands that growth often requires capital. We offer access to various financing options, addressing expansion, marketing, and other business needs. Our integration with financial institutions simplifies securing the necessary capital."
        subtitle2="Flexible EV Supply & Financing: "
        text2="Manage your business from one place. Droply allows you to streamline your business operations, end to end."
        backgroundColor="white"
        button_backgroundColor="var(--palatinate-blue)"
      />
      <MerchantBlockReverse
        image={delivery}
        title="Access to Financing"
        subtitle="Fueling Growth: "
        text="Droply streamlines your business from order to delivery, empowering you in inventory control and customer support."
        subtitle2="Real-Time Insights: "
        text2="Transition to electric vehicles effortlessly with Droply's tailored financing, saving money and reducing your carbon footprint, Enjoy flexible repayment aligned with your revenue stream, easing your business financing."
        button_backgroundColor="black"
      />
      <MerchantBlock
        image={insurance}
        title="Comprehensive Insurance: "
        subtitle="Insurance Coverage: "
        text="Droply offers protection for goods in transit and personal injury/health, ensuring peace of mind for your business.
        Peace of Mind: Focus on growing your business with Droply's insurance, allowing you to pursue your goals without worry."
        backgroundColor="white"
        button_backgroundColor="var(--palatinate-blue)"
      />
      <MerchantBlockReverse
        image={graph}
        title="User-Friendly Interface"
        subtitle="Intuitive Design: "
        text="We believe that powerful tools should also be easy to use. Droply boasts an intuitive, user-friendly interface that requires minimal training. Get started quickly and efficiently."
        subtitle2="Mobile Accessibility: "
        text2="Manage your business on the go with our mobile responsive web application. Stay connected and in control, no matter where you are."
        button_backgroundColor="black"
      />
    </div>
  );
};

export default MerchantBlocks;
