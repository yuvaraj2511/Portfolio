/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPosition = 950; 
   
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
      id="experience"
    >
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <motion.div
                key={id}
                className={styles.skill}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: id * 0.1, duration: 0.6 }}
              >
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </motion.div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <motion.li
                key={id}
                className={styles.historyItem}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: (skills.length + id) * 0.1, duration: 0.6 }}
              >
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
};
