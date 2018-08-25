import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import colors from '../../../assets/colors';
import styles from './Date.module.css';

const Date = ({ date }) => (
  <div className={styles.date}>
    <Icon icon="calendar" color={colors.text40} spin={false} />
    <span className={styles.dateText}>{date}</span>
  </div>
);

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
