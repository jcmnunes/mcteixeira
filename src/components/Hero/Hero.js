import React from 'react';
import Particles from 'react-particles-js';
import { scroller } from 'react-scroll';
import config from '../../../data/config.json';
import particles from '../../../data/particlesjs-config.json';
import Button from '../common/Button';
import styles from './Hero.module.css';

/**
 * Hero
 */
class Hero extends React.Component {
  static goToAbout() {
    scroller.scrollTo('about', {
      smooth: 'easeInOutQuint',
      offset: config.scrollOffset,
    });
  }

  constructor(props) {
    super(props);
    this.state = { textVisible: false };
  }

  componentDidMount() {
    this.setState({ textVisible: true });
  }

  render() {
    const { textVisible } = this.state;
    return (
      <div className={styles.root}>
        <Particles
          width="100%"
          height="100vh"
          params={particles}
          canvasClassName={`${styles.hero} ${styles.canvas}`}
        />
        <div className={styles.hero} />
        <div className={`${styles.heroText} ${textVisible && styles.visible}`}>
          <div className={styles.header}>
            HELLO<br />
            MY NAME IS<br />
            MARIA TEIXEIRA<br />
          </div>
          <div className={styles.text}>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </div>
          <div className={styles.btn}>
            <Button small onClick={Hero.goToAbout}>
              ABOUT ME
            </Button>
            <Button onClick={Hero.goToAbout}>ABOUT ME</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
