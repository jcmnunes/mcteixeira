import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import VisibilitySensor from 'react-visibility-sensor';
import config from '../../../data/config.json';
import colors from '../../assets/colors';
import styles from './Achievements.module.css';

import content from '../../content/achievements.json';

const { heading, achievements } = content;

const Stat = ({ value, title, desc }) => (
  <div className={styles.statRoot}>
    <div className={styles.value}>
      <AnimatedNumber
        component="span"
        value={value}
        style={{
          transition: '0.8s ease-out',
          fontSize: 56,
          fontWeight: 700,
          transitionProperty: 'background-color, color, opacity',
        }}
        frameStyle={perc =>
          perc === 100 ? {} : { backgroundColor: colors.blue80 }
        }
        duration={config.numberAnimDuration}
        stepPrecision={0}
      />
    </div>
    <div className={styles.title}>{title}</div>
    <div className={styles.desc}>{desc}</div>
  </div>
);

Stat.propTypes = {
  value: PropTypes.number.isRequired,
};

/**
 * Achievements component
 */
class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: Object.keys(achievements).map(() => 0) };
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({
        values: Object.keys(achievements).map(key => achievements[key].value),
      });
    } else {
      this.setState({ values: Object.keys(achievements).map(() => 0) });
    }
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onVisibilityChange} partialVisibility>
        <div className="section-wrapper">
          <div className={styles.achievements}>
            <h1>{heading}</h1>
          </div>
          <div className={styles.stats}>
            {Object.keys(achievements).map((key, index) => (
              <Stat
                key={achievements[key].title}
                value={this.state.values[index]}
                title={achievements[key].title}
                desc={achievements[key].description}
              />
            ))}
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Achievements;
