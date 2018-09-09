import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={`section-wrapper ${styles.footer}`}>
    <div className={styles.footerText}>
      © 2018 MCT - Maria Teixeira. Made with{' '}
      <span role="img" aria-label="heart emoji">
        ❤️
      </span>
      <span> by</span> <strong>Jose Nunes</strong> (
      <a href="http://josenunes.xyz" target="_blank" rel="noopener noreferrer">
        josenunes.xyz
      </a>
      )
    </div>
  </div>
);

export default Footer;
