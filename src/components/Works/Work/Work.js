import React from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';

import Icon from '../../common/Icon';
import ArrowButton from '../../common/ArrowButton';
import Date from '../../common/Date';

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
    const route = data.fields.slug;

    return (
      <div className={styles.work}>
        <div className={styles.thumbnail}>
          <img src={data.frontmatter.thumbnail} alt="" />
          <div className={styles.backdrop} />
          <div className={styles.links}>
            <div onClick={() => this.setState({ isOpen: true })}>
              <Icon icon="image" />
            </div>
            <div onClick={() => navigateTo(route)}>
              <Icon icon="link" />
            </div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={data.frontmatter.images[photoIndex].image}
            nextSrc={
              data.frontmatter.images[(photoIndex + 1) % data.frontmatter.images.length].image
            }
            prevSrc={
              data.frontmatter.images[
                (photoIndex + data.frontmatter.images.length - 1) % data.frontmatter.images.length
              ].image
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + data.frontmatter.images.length - 1) %
                  data.frontmatter.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % data.frontmatter.images.length,
              })
            }
          />
        )}

        <h4>{data.header}</h4>
        <Date date={data.frontmatter.date} />
        <p>{data.excerpt}</p>
        <ArrowButton action={() => navigateTo(route)} text="read more" />
      </div>
    );
  }
}

Work.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Work;
