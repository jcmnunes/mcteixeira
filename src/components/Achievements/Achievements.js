import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import config from '../../data/config.json';
import styles from './Achievements.module.scss';

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
          perc === 100 ? {} : { backgroundColor: '#ffeb3b' }
        }
        duration={3000}
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
    this.state = { value: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ value: 120 });
  }

  render() {
    return (
      <div className="section-wrapper">
        <div className={styles.achievements} onClick={this.handleClick}>
          <h1>My achievements</h1>
        </div>
        <div className={styles.stats}>
          {config.achievements.map(({ value, title, desc }) => (
            <Stat key={title} value={value} title={title} desc={desc} />
          ))}
        </div>
      </div>
    );
  }
}

export default Achievements;
