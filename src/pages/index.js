import React from 'react';
import { Element } from 'react-scroll';
import Hero from '../components/Hero';
import styles from './index.module.css';

const IndexPage = () => (
  <div style={{ marginTop: '60px' }}>
    <Element name="home" className={styles.test}>
      <Hero />
    </Element>
    <Element name="about" className={styles.test}>
      <h1>ABOUT</h1>
    </Element>
    <Element name="achievements" className={styles.test}>
      <h1>ACHIEVEMENTS</h1>
    </Element>
    <Element name="work" className={styles.test}>
      <h1>WORK</h1>
    </Element>
    <Element name="skills" className={styles.test}>
      <h1>SKILLS</h1>
    </Element>
    <Element name="contactme" className={styles.test}>
      <h1>CONTACT ME</h1>
    </Element>
  </div>
);

export default IndexPage;
