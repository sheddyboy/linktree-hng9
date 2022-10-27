import React, { useState } from "react";
import styles from "../styles/profileSection.module.css";

const ProfileSection = () => {
  const [profileOverlay, setProfileOverlay] = useState<boolean>(false);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <a
            href="#profile"
            className={styles.profileWrapper}
            onMouseEnter={() => {
              setProfileOverlay((prevState) => !prevState);
            }}
            onMouseLeave={() => {
              setProfileOverlay((prevState) => !prevState);
            }}
          >
            <img
              id="profile__img"
              className={styles.profileImg}
              src="/72614183.jpg"
              alt="profile"
            />
            {profileOverlay && (
              <div className={styles.profileOverlay}>
                <img src="/Icon (3).png" alt="camera" />
              </div>
            )}
          </a>
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
