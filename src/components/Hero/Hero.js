import React from 'react';
// import Granim from '../common/Granim';
import Particles from 'react-particles-js';
// import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

/**
 * Hero
 */
class Hero extends React.Component {
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
        {/* <Granim
          opacity={[0.3, 0.5]}
          direction="top-bottom"
          states={{
            'default-state': {
              gradients: [['#eee', '#4A4A4A'], ['#4A4A4A', '#eee']],
              transitionSpeed: 5000,
              loop: true,
            },
          }}
        /> */}
        <Particles
          width="100%"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 6,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#09c',
              },
              shape: {
                type: 'polygon',
                stroke: {
                  width: 0,
                  color: '#000',
                },
                polygon: {
                  nb_sides: 6,
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 80,
                random: false,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: '#ffffff',
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 8,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'grab',
                },
                onclick: {
                  enable: false,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            background: '#e6e6e6',
            maxHeight: '700px',
          }}
        />
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
          <button className={styles.btn}>About Me</button>
        </div>
      </div>
    );
  }
}

export default Hero;
