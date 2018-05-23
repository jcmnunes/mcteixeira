import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import GLink, { navigateTo } from 'gatsby-link';
import config from '../../../data/config.json';
import { Logo, Home } from '../icons';
import Burger from '../common/Burger';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.renderHomeLink = this.renderHomeLink.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderHomeLink() {
    const { pathname } = this.props;

    if (pathname === '/') {
      return (
        <Link
          className={styles.logo}
          to="home"
          smooth="easeInOutQuint"
          offset={config.scrollOffset}
        >
          <Logo size={100} />
        </Link>
      );
    }

    return (
      <GLink to="/" className={styles.logo}>
        <Logo size={100} />
      </GLink>
    );
  }

  renderMenu() {
    const { justLogo, pathname } = this.props;

    if (pathname === '/') {
      if (!justLogo) {
        return (
          <nav className={styles.nav}>
            <Burger />
          </nav>
        );
      }
    }

    if (!justLogo) {
      return (
        <GLink className={`${styles.nav} ${styles.home}`} to="/">
          <Home />
        </GLink>
      );
    }

    return null;
  }

  render() {
    const { justLogo } = this.props;

    return (
      <div className={`${styles.root} ${justLogo && styles.justLogo}`}>
        {this.renderHomeLink()}

        {this.renderMenu()}
      </div>
    );
  }
}

Navbar.defaultProps = {
  justLogo: false,
};

Navbar.propTypes = {
  justLogo: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
};

export default Navbar;
