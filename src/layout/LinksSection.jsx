import React from "react";
import LinkCard from "../components/LinkCard";
import styles from "../styles/linkSection.module.css";

const LinksSection = () => {
  const links = [
    {
      name: "Twitter Link",
      href: "https://twitter.com/E2LA__",
      id: "twiterLink",
      externalRoute: true,
    },
    {
      name: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
      externalRoute: true,
    },
    {
      name: "Zuri Books",
      href: "https://books.zuri.team",
      id: "books",
      externalRoute: true,
    },
    {
      name: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=sheddy",
      id: "book__python",
      externalRoute: true,
    },
    {
      name: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
      externalRoute: true,
    },
    {
      name: "Design Books",
      href: "https://books.zuri.team/design-rules",
      id: "book__design",
      externalRoute: true,
    },
    {
      name: "Contact Me",
      href: "/contact",
      id: "contact",
      externalRoute: false,
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          {links.map((i) => {
            return (
              <LinkCard
                key={i.id}
                href={i.href}
                name={i.name}
                id={i.id}
                externalRoute={i.externalRoute}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
