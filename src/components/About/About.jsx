/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPosition = 200;

    if (scrollY > triggerPosition) {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      className={styles.container}
      id="about"
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <motion.li
            className={styles.aboutItem}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -70 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&rsquo;m a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </motion.li>
          <motion.li
            className={styles.aboutItem}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 70 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </motion.li>
          <motion.li
            className={styles.aboutItem}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -70 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};
