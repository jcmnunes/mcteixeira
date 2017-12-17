import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';
import colors from '../../../assets/colors';
import styles from './Button.module.css';

/**
 * Button wrapper
 */
export const Btn = ({
  kind, small, medium, ...props 
}) => {
  const classes = `${styles.btn} ${kind} ${small} ${medium}`;
  return <button {...props} className={classes} />;
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderLoading() {
    const { kind, small, medium } = this.props;
    let color = colors.text;
    if (kind === 'primary') {
      color = '#FFF';
    }
    if (small) {
      return <LoadingIndicator color={color} small />;
    }
    if (medium) {
      return <LoadingIndicator color={color} medium />;
    }
    return <LoadingIndicator color={color} />;
  }

  renderChildren() {
    const { loading, children } = this.props;
    return (
      <div className={styles.btnTxt}>
        {loading ? this.renderLoading() : children}
      </div>
    );
  }

  render() {
    const {
      kind, loading, disabled, small, medium, ...props 
    } = this.props;
    return (
      <Btn
        {...props}
        kind={kind && styles[kind]}
        disabled={loading || disabled}
        small={small && styles.small}
        medium={medium && styles.medium}
      >
        {this.renderChildren()}
      </Btn>
    );
  }
}

Button.defaultProps = {
  type: null,
  kind: null,
  loading: false,
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  kind: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
