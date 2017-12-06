import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={styles.root}>
        <Link className={styles.link} to="test1" smooth>
          About
        </Link>
        <Link className={styles.link} to="test2" smooth>
          Achievements
        </Link>
        <Link className={styles.link} to="test3" smooth>
          Portfolio
        </Link>
        <Link className={styles.link} to="test4" smooth>
          Work
        </Link>
        <Link className={styles.link} to="#">
          Contact me
        </Link>
      </nav>
    );
  }
}

export default Navbar;
