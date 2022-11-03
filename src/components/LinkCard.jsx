import React from "react";
import styles from "../styles/linkcard.module.css";
import { Link } from "react-router-dom";

const LinkCard = ({ name, href, id, externalRoute }) => {
  return (
    <>
      {!externalRoute && (
        <Link to={href} className={styles.card} id={id}>
          {name}
        </Link>
      )}
      {externalRoute && (
        <a href={href} className={styles.card} id={id}>
          {name}
        </a>
      )}
    </>
  );
};

export default LinkCard;
