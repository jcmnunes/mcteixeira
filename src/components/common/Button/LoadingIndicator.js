import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadingIndicator.module.scss';

/**
 * Renders a spinner to display in buttons.
 */
const LoadingIndicator = ({ medium, small, color }) => (
  <div
    className={`
      ${styles.spinner}
      ${medium && styles.medium}
      ${small && styles.small}
    `}
  >
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
    <div style={{ background: color }} />
  </div>
);

LoadingIndicator.defaultProps = {
  medium: false,
  small: false,
  color: '#000',
};

LoadingIndicator.propTypes = {
  medium: PropTypes.bool,
  small: PropTypes.bool,
  color: PropTypes.string,
};

export default LoadingIndicator;
