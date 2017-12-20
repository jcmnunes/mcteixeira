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
    >
      <Logo size={100} />
    </Link>
    {!justLogo && (
      <nav className={styles.nav}>
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
