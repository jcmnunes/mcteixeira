import React from 'react';
// import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import VisibilitySensor from 'react-visibility-sensor';
import CircularProgressbar from 'react-circular-progressbar';
import config from '../../../data/config.json';
import data from '../../../data/skills';

import content from '../../content/skills.json';
import styles from './Skills.module.css';

const { skill1, skill2 } = content;
const chart1 = skill1.chart;
const chart2 = skill2.chart;

const Bar = ({ text, value }) => (
  <div className={styles.barContainer}>
    <div className={styles.title}>
      <h4>{text}</h4>
      <div>
        <AnimatedNumber
          component="span"
          value={value}
          style={{
            transition: '0.8s ease-out',
            fontSize: 14,
            fontWeight: 400,
            transitionProperty: 'background-color, color, opacity',
          }}
          duration={config.numberAnimDuration}
          stepPrecision={0}
        />%
      </div>
    </div>
    <div className={styles.bar}>
      <div className={styles.scale} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const Circle = ({ text, value }) => (
  <div className={styles.circle}>
    <CircularProgressbar percentage={value} className={styles.stat} />
    <h4>{text}</h4>
  </div>
);

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesSkills1: Object.keys(chart1).map(() => 0),
      valuesSkills2: Object.keys(chart2).map(() => 0),
    };
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({
        valuesSkills1: Object.keys(chart1).map(key => chart1[key].value),
        valuesSkills2: Object.keys(chart2).map(key => chart2[key].value),
      });
    } else {
      this.setState({
        valuesSkills1: Object.keys(chart1).map(() => 0),
        valuesSkills2: Object.keys(chart2).map(() => 0),
      });
    }
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onVisibilityChange} partialVisibility>
        <div className="flex-grid">
          <div className="col col1">
            <h3>{skill1.heading}</h3>
            <p>{skill1.text}</p>
            {Object.keys(chart1).map((key, index) => (
              <Bar
                key={key}
                text={chart1[key].text}
                value={this.state.valuesSkills1[index]}
              />
            ))}
            <h3>{content.otherSkills.heading}</h3>
            <p>{content.otherSkills.text}</p>
          </div>
          <div className="col col2">
            <h3>{skill2.heading}</h3>
            <p>{skill2.text}</p>
            <div>
              {Object.keys(chart2).map((key, index) => (
                <Circle
                  key={key}
                  text={chart2[key].text}
                  value={this.state.valuesSkills2[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

// Skills.defaultProps = {
//   firstName: 'John',
// };

// Skills.propTypes = {
//   firstName: PropTypes.string.isRequired,
// };

export default Skills;
