import React from "react";
import styles from "../styles/profileSection.module.css";

const ProfileSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <img
            id="profile__img"
            className={styles.profileImg}
            src="/72614183.jpg"
            alt="profile"
          />
          <h1 className={styles.twitter} id="twitter">
            @E2LA__
          </h1>
          <p id="slack">Sheddy</p>
          <img
            className={styles.shareButton}
            src="/_Avatar share button.png"
            alt="share"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
