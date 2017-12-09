import React from 'react';
import Lightbox from 'react-image-lightbox';
// import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import VisibilitySensor from 'react-visibility-sensor';
import Icon from '../common/Icon';
import config from '../../data/config.json';
import colors from '../../assets/colors';
import styles from './Work.module.scss';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      value: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({ value: 142 });
    } else {
      this.setState({ value: 0 });
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { data } = this.props;
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility>
        <div className={styles.work}>
          <div
            className={styles.thumbnail}
            onClick={() => this.setState({ isOpen: true })}
          >
            <img src={data.thumb} alt="" />
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={data.images[photoIndex]}
              nextSrc={data.images[(photoIndex + 1) % data.images.length]}
              prevSrc={
                data.images[
                  (photoIndex + data.images.length - 1) % data.images.length
                ]
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + data.images.length - 1) % data.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % data.images.length,
                })
              }
            />
          )}
          <div className={styles.title}>
            <h4>Aliquam eratac</h4>
            <div className={styles.likesContainer}>
              <Icon icon="heart" color="black" spin={false} />
              <span className={styles.likes}>
                <AnimatedNumber
                  component="span"
                  value={this.state.value}
                  style={{
                    transition: '0.8s ease-out',
                    fontSize: 16,
                    fontWeight: 400,
                    transitionProperty: 'background-color, color, opacity',
                  }}
                  frameStyle={perc =>
                    perc === 100 ? {} : { backgroundColor: colors.blue80 }
                  }
                  duration={config.numberAnimDuration}
                  stepPrecision={0}
                />
              </span>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

// Work.defaultProps = {
//   firstName: 'John',
// };

// Work.propTypes = {
//   firstName: PropTypes.string.isRequired,
// };

export default Work;
