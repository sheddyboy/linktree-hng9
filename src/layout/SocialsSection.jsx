import React from "react";
import styles from "../styles/socialsSection.module.css";

const SocialsSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="https://slack.com/">
            <img src="/slack.png" alt="slack" />
          </a>
          <a href="https://github.com/sheddyboy">
            <img src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
