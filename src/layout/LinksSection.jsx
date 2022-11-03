import React from "react";
import LinkCard from "../components/LinkCard";
import styles from "../styles/linkSection.module.css";

const LinksSection = () => {
  const links = [
    {
      name: "Twitter Link",
      href: "https://twitter.com/E2LA__",
      id: "twiterLink",
    },
    { name: "Zuri Team", href: "https://training.zuri.team/", id: "btn__zuri" },
    { name: "Zuri Books", href: "https://books.zuri.team", id: "books" },
    {
      name: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=sheddy",
      id: "book__python",
    },
    {
      name: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
    },
    {
      name: "Design Books",
      href: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          {links.map((i) => {
            return (
              <LinkCard key={i.id} href={i.href} name={i.name} id={i.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
