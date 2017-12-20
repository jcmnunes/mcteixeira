import React from 'react';
import { Portal } from 'react-portal';
import { Link } from 'react-scroll';
import config from '../../../../data/config.json';
import styles from './Burger.module.css';

class MenuPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return (
      this.state.mounted && (
        <Portal node={document && document.getElementById('menu-root')}>
          <div>{this.props.children}</div>
        </Portal>
      )
    );
  }
}

/**
 * Burger component
 */
export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggleMenuState = this.toggleMenuState.bind(this);
  }

  toggleMenuState() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        <div
          className={`${styles.navTrigger} ${active && styles.active}`}
          onClick={this.toggleMenuState}
        >
          <i />
          <i />
          <i />
        </div>
        <MenuPortal>
          <div className={`${styles.menu} ${active && styles.active}`}>
            <Link
              onClick={this.toggleMenuState}
              className={styles.link}
              to="home"
              smooth="easeOutQuad"
              offset={config.scrollOffset}
            >
              <span className={styles.linkText}>HOME</span>
            </Link>
            <Link
              onClick={this.toggleMenuState}
              className={styles.link}
              to="about"
              smooth="easeOutQuad"
              offset={config.scrollOffset}
            >
              <span className={styles.linkText}>ABOUT</span>
            </Link>
            <Link
              onClick={this.toggleMenuState}
              className={styles.link}
              to="achievements"
              smooth="easeOutQuad"
              offset={config.scrollOffset}
            >
              <span className={styles.linkText}>ACHIEVEMENTS</span>
            </Link>
            <Link
              onClick={this.toggleMenuState}
              className={styles.link}
              to="work"
              smooth="easeOutQuad"
              offset={config.scrollOffset}
            >
              <span className={styles.linkText}>WORK</span>
            </Link>
            <Link
              onClick={this.toggleMenuState}
              className={styles.link}
              to="skills"
              smooth="easeOutQuad"
              offset={config.scrollOffset}
            >
              <span className={styles.linkText}>SKILLS</span>
            </Link>
            <Link
              onClick={this.toggleMenuState}
              className={styles.link}
              to="contactme"
              smooth="easeOutQuad"
              offset={config.scrollOffset}
            >
              <span className={styles.linkText}>CONTACT ME</span>
            </Link>
          </div>
        </MenuPortal>
        <MenuPortal>
          <div className={`${styles.backdrop} ${active && styles.active}`} />
        </MenuPortal>
      </div>
    );
  }
}
