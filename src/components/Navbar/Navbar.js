import React from 'react';
import { Link } from 'react-scroll';
import { Logo } from '../icons';
import Burger from '../common/Burger';
import styles from './Navbar.module.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <Logo size={100} />
        <nav className={styles.nav}>
          <Link
            className={styles.link}
            to="home"
            smooth="easeInOutQuint"
            offset={-60}
            spy
          >
            <span className={styles.linkText}>HOME</span>
          </Link>
          <Link
            className={styles.link}
            to="about"
            smooth="easeInOutQuint"
            offset={-60}
            spy
          >
            <span className={styles.linkText}>ABOUT</span>
          </Link>
          <Link
            className={styles.link}
            to="achievements"
            smooth="easeInOutQuint"
            offset={-60}
            spy
          >
            <span className={styles.linkText}>ACHIEVEMENTS</span>
          </Link>
          <Link
            className={styles.link}
            to="work"
            smooth="easeInOutQuint"
            offset={-60}
            spy
          >
            <span className={styles.linkText}>WORK</span>
          </Link>
          <Link
            className={styles.link}
            to="skills"
            smooth="easeInOutQuint"
            offset={-60}
            spy
          >
            <span className={styles.linkText}>SKILLS</span>
          </Link>
          <Link
            className={styles.link}
            to="contactme"
            smooth="easeInOutQuint"
            offset={-60}
            spy
          >
            <span className={styles.linkText}>CONTACT ME</span>
          </Link>
          <Burger />
        </nav>
      </div>
    );
  }
}

export default Navbar;
