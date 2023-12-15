/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <motion.li
          whileHover={{ scale: 1.1 }} // Add scale animation on hover
          className={styles.link}
        >
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yuvaraj25112003@gmail.com">yuvaraj25112003@gmail.com</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className={styles.link}
        >
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/yuvaraj-t-708141169/">linkedin.com/yuvaraj-t</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className={styles.link}
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/yuvaraj2511">github.com/yuvaraj2511</a>
        </motion.li>
      </ul>
    </footer>
  );
};
