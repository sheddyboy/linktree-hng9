import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <img src="/Zuri.Internship_Logo.png" alt="zuri logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src="/I4G.png" alt="i4g logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
