import React from 'react';
// import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import VisibilitySensor from 'react-visibility-sensor';
import CircularProgressbar from 'react-circular-progressbar';
import config from '../../../data/config.json';
import data from '../../../data/skills';
import styles from './Skills.module.css';

const Bar = ({ title, value }) => (
  <div className={styles.barContainer}>
    <div className={styles.title}>
      <h4>{title}</h4>
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

const Circle = ({ title, value }) => (
  <div className={styles.circle}>
    <CircularProgressbar percentage={value} className={styles.stat} />
    <h4>{title}</h4>
  </div>
);

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesSkills1: data.skills1.map(() => 0),
      valuesSkills2: data.skills2.map(() => 0),
    };
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({
        valuesSkills1: data.skills1.map(skill => skill.value),
        valuesSkills2: data.skills2.map(skill => skill.value),
      });
    } else {
      this.setState({
        valuesSkills1: data.skills1.map(() => 0),
        valuesSkills2: data.skills2.map(() => 0),
      });
    }
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onVisibilityChange} partialVisibility>
        <div className="flex-grid">
          <div className="col col1">
            <h3>Research</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Nullam
              quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            {data.skills1.map((skill, index) => (
              <Bar
                key={skill.key}
                title={skill.title}
                value={this.state.valuesSkills1[index]}
              />
            ))}
            <h3>Other</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Nullam
              quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
          </div>
          <div className="col col2">
            <h3>COMMUNICATION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis risus eget urna mollis ornare vel eu leo. Nullam quis risus
              eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
              Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <div>
              {data.skills2.map((skill, index) => (
                <Circle
                  key={skill.key}
                  title={skill.title}
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
