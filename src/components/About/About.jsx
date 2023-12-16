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
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("hero/mypic1.jpg")}
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
              <h3>Aspiring Full-Stack Developer</h3>
              <p>
                Passionate about crafting seamless user experiences through
                technologies like React, Spring Boot, MySQL and programming languages
                such as Java, Python, and C++.
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
              <h3>Cybersecurity and AI Enthusiast</h3>
              <p>
                Excited by the realms of cybersecurity and artificial intelligence,
                I actively explore the latest trends and advancements.
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
              <h3>Eager Learner and Team Contributor</h3>
              <p>
                Always eager to contribute and learn in a dynamic team environment.
                Let’s connect and build something amazing together!
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};
