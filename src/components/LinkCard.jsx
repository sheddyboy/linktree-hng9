import React from "react";
import styles from "../styles/linkcard.module.css";

const LinkCard = ({ name, href, id }) => {
  return (
    <a href={href} className={styles.card} id={id}>
      {name}
    </a>
  );
};

export default LinkCard;
