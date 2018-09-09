import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import colors from '../../../assets/colors';
import styles from './ArrowButton.module.css';

const Text = ({ text, direction }) => (
  <span
    className={`
      ${styles.text} 
      ${direction === 'r' ? styles.r : styles.l}
    `}
  >
    {text}
  </span>
);

const IconRenderer = ({ arrowIcon }) => <Icon icon={arrowIcon} color={colors.text} spin={false} />;

const ArrowButton = ({ action, text, direction }) => {
  const arrowIcon = direction === 'r' ? 'arrowRight' : 'arrowLeft';

  const renderButton = () => {
    if (direction === 'r') {
      return (
        <React.Fragment>
          <Text text={text} direction={direction} />
          <IconRenderer arrowIcon={arrowIcon} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <IconRenderer arrowIcon={arrowIcon} />
        <Text text={text} direction={direction} />
      </React.Fragment>
    );
  };

  return (
    <div className={styles.root} onClick={action}>
      {renderButton()}
    </div>
  );
};

ArrowButton.defaultProps = {
  direction: 'r',
};

ArrowButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default ArrowButton;
