import React from 'react';
import Lightbox from 'react-image-lightbox';
// import PropTypes from 'prop-types';
import styles from './Work.module.scss';

const images = [
  '//lorempixel.com/1500/500',
  '//lorempixel.com/1000/1000',
  '//lorempixel.com/800/1200',
  '//lorempixel.com/500/1500',
];

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div
          className={styles.thumbnail}
          onClick={() => this.setState({ isOpen: true })}
        >
          <img src="http://lorempixel.com/960/700" alt="" />
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
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
