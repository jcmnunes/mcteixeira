import React from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Icon from '../common/Icon';
import colors from '../../assets/colors';
import styles from './Work.module.css';

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
    const { data } = this.props;
    return (
      <div className={styles.work}>
        <div className={styles.thumbnail}>
          <img src={data.thumb} alt="" />
          <div className={styles.backdrop} />
          <div className={styles.links}>
            <div onClick={() => this.setState({ isOpen: true })}>
              <Icon icon="image" />
            </div>
            <div onClick={() => navigateTo(data.page)}>
              <Icon icon="link" />
            </div>
          </div>
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

        <h4>{data.header}</h4>
        <div className={styles.date}>
          <Icon icon="calendar" color={colors.text40} spin={false} />
          <span className={styles.dateText}>{data.date}</span>
        </div>
        <p>{data.text}</p>
        <div className={styles.readmore} onClick={() => navigateTo(data.page)}>
          <span className={styles.text}>read more</span>
          <Icon icon="arrowRight2" color={colors.text} spin={false} />
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Work;
