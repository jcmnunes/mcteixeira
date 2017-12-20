/* eslint-disable max-len */
import React from 'react';
import { navigateTo } from 'gatsby-link';
import Navbar from '../components/Navbar';
import styles from './404.module.css';
import colors from '../assets/colors';

const NotFoundPage = () => (
  <div className={styles.wrapper}>
    <Navbar justLogo />
    <div className={styles.flask}>
      <div className={styles.background} />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 113 130"
        xmlSpace="preserve"
      >
        <g>
          <path
            fill="#fff"
            d="M0,0v130h112.084L111.75,0H0z M94.75,128C71,128,56,128,56,128s-14.873,0-38.623,0s-13.945-19.422-6.33-35.945S40,41.25,40,41.25V3h16h11v38.25c0,0,23.901,34.283,31.517,50.805S118.5,128,94.75,128z"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeWidth="5"
            strokeMiterlimit="10"
            d="M56,127.5c0,0-14.873,0-38.623,0s-13.695-19.172-6.08-35.695C18.912,75.283,40.5,41.25,40.5,41.25V2.5h-9H56h19.5h-8v38.75c0,0,23.651,34.033,31.267,50.555c7.615,16.523,19.733,35.695-4.017,35.695S56,127.5,56,127.5z"
          />
        </g>
      </svg>
      <div className={`${styles.bubble} ${styles.b0}`} />
      <div className={`${styles.bubble} ${styles.b1}`} />
      <div className={`${styles.bubble} ${styles.b2}`} />
      <div className={`${styles.bubble} ${styles.b3}`} />
      <div className={`${styles.bubble} ${styles.b4}`} />
      <div className={`${styles.bubble} ${styles.b5}`} />
      <div className={`${styles.bubble} ${styles.b6}`} />
      <div className={`${styles.bubble} ${styles.b7}`} />
      <div className={`${styles.bubble} ${styles.b8}`} />
      <div className={`${styles.bubble} ${styles.b9}`} />

      <div className={`${styles.swirl} ${styles.s0}`} />
      <div className={`${styles.swirl} ${styles.s1}`} />
      <div className={`${styles.swirl} ${styles.s2}`} />
      <div className={`${styles.swirl} ${styles.s3}`} />
      <div className={`${styles.swirl} ${styles.s4}`} />
      <div className={`${styles.swirl} ${styles.s5}`} />
    </div>
    <div className={styles.text}>
      <div className={styles.four}>404</div>
      <div className={styles.page}>PAGE NOT FOUND</div>
    </div>
    <div className={styles.link} onClick={() => navigateTo('/')}>
      Go back to homepage
    </div>
  </div>
);

export default NotFoundPage;
