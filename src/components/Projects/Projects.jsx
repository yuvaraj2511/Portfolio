/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    const triggerPosition = 1800; 

    if (scrollY > triggerPosition) {
      controls.start({ opacity: 1, x: 0 });
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
      initial={{ opacity: 0, x: -20 }}
      className={styles.container}
      id="projects"
    >
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <motion.div
              key={id}
              className={styles.projectCardContainer}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: id * 0.3, duration: 0.9 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
