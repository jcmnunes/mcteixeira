import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';
import styles from './Icon.css';

/**
 *
 * @author    José Nunes <jnunes@dodoc.com>
 * @copyright 2017 doDOC
 */

const Icon = ({ icon, size, spin, sty, disabled, color }) => (
  <svg
    style={sty}
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.svg} ${spin && styles.spin}`}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 16 16"
    opacity={disabled ? 0.5 : 1}
  >
    <path fill={color || 'currentColor'} d={icons[icon]} />
  </svg>
);

Icon.defaultProps = {
  size: 16,
  spin: false,
  sty: {},
  disabled: false,
};

/**
 * Specifies the expected values for props.
 *
 * @property {string} icon - String that asserts which icon will render.
 * @property {number} size - Size of icon.
 * @property {boolean} spin - Flag that asserts if icon spin or not.
 * @property {object} sty - styles object.
 */
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  spin: PropTypes.bool,
  sty: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Icon;
