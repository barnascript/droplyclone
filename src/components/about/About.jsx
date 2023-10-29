import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <h3>About Droply</h3>
      <p className={styles.text}>
        Did you know that in Nigeria, a whopping 75% of the population relies on
        informal logistics services? These services are known for their
        resilience, adaptability, and ability to meet diverse transportation
        needs instantly and affordably. <br /> <br />
        Many private individuals in Nigeria invest their own resources, often
        relying on family support and personal savings, to acquire and maintain
        vehicles for these logistics services. Among them, owner-drivers make up
        about 15% of the workforce. <br /> <br />
        Despite the prevalence of this informal, on-demand logistics sector,
        there's a significant challenge – inefficiency and limited scalability.
        This is precisely where Droply steps in to make a difference. <br />
        <br />
        Launched in 2023, Droply was created to unlock efficiency and fuel
        growth. Our robust “last-mile operating system” (or LMOS) offers a
        variety of operational and financial services for small-scale on-demand
        logistics service providers.
      </p>
    </div>
  );
};

export default About;
