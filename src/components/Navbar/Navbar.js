import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import config from '../../../data/config.json';
import { Logo } from '../icons';
import Burger from '../common/Burger';
import styles from './Navbar.module.css';

const Navbar = ({ justLogo }) => (
  <div className={`${styles.root} ${justLogo && styles.justLogo}`}>
    <Link
      className={styles.logo}
      to="home"
      smooth="easeInOutQuint"
      offset={config.scrollOffset}
      spy
      hashSpy
    >
      <Logo size={100} />
    </Link>
    {!justLogo && (
      <nav className={styles.nav}>
        <Link
          className={styles.link}
          to="home"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
          spy
          hashSpy
        >
          <span className={styles.linkText}>HOME</span>
        </Link>
        <Link
          className={styles.link}
          to="about"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
          spy
          hashSpy
        >
          <span className={styles.linkText}>ABOUT</span>
        </Link>
        <Link
          className={styles.link}
          to="achievements"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
          spy
          hashSpy
        >
          <span className={styles.linkText}>ACHIEVEMENTS</span>
        </Link>
        <Link
          className={styles.link}
          to="work"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
          spy
          hashSpy
        >
          <span className={styles.linkText}>WORK</span>
        </Link>
        <Link
          className={styles.link}
          to="skills"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
          spy
          hashSpy
        >
          <span className={styles.linkText}>SKILLS</span>
        </Link>
        <Link
          className={styles.link}
          to="contactme"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
          spy
          hashSpy
        >
          <span className={styles.linkText}>CONTACT ME</span>
        </Link>
        <Burger />
      </nav>
    )}
  </div>
);

Navbar.defaultProps = {
  justLogo: false,
};

Navbar.propTypes = {
  justLogo: PropTypes.bool,
};

export default Navbar;
