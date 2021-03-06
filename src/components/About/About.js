import React from 'react';
import profile from '../../../images/profile.jpg';

import styles from './About.module.css';

import content from '../../content/about.json';

/**
 * Hero
 */
const About = () => (
  <div className="flex-grid">
    <div className="col col1">
      <p>
        <span className={styles.profileContainer}>
          <img className={styles.profile} src={profile} alt="profile" />
        </span>
        {content.paragraph1}
      </p>
      <h3>{content.heading1}</h3>
      <p>{content.paragraph2}</p>
    </div>
    <div className="col col2">
      <h3>{content.heading2}</h3>
      <p>{content.paragraph3}</p>
    </div>
  </div>
);

export default About;
