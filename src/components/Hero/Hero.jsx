/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&rsquo;m Yuvaraj</h1>
        <p className={styles.description}>
          Aspiring full-stack developer with a foundation in React, Spring Boot,
          MySQL, Python, Java and C++. Passionate about cybersecurity and AI, I
          bring a keen interest in exploring new technologies. Eager to
          contribute and learn in a dynamic team environment. Let&rsquo;s
          connect!
        </p>
        <a
          href="mailto:yuvaraj25112003@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mypic1.jpg")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles.circularZoom}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
