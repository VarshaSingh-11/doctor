import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              If you are looking for the best physiotherapist in Gurgaon, without a doubt, you should visit the Physio Health Plus physiotherapy clinic in Gurgaon. Physio health plus has started by Dr. Amit Kumar in 2005, who has vast Experience in Physiotherapy, Chiropractic, Osteopathy, and Neuro Physiotherapy.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              The main aim of Dr. Amit is to provide the best physiotherapy in Gurgaon to all patients so that patients get the best physiotherapist in Gurgaon and the best Chiropractor in Gurgaon in their journey of recovery.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              At physio health plus, whenever we hire a physiotherapist or Chiropractor, there are certain conditions we put so that we always choose the best physiotherapists and chiropractors. Physio Health plus is known for providing the best physiotherapy in Gurgaon.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
