import React from "react";
import styles from "../styles/linkcard.module.css";

interface LinkCardProps {
  href: string;
  name: string;
  id: string;
}
const LinkCard = ({ name, href, id }: LinkCardProps) => {
  return (
    <a href={href} className={styles.card} id={id}>
      {name}
    </a>
  );
};

export default LinkCard;
