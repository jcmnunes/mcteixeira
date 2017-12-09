import React, { Component } from 'react';
import PropsType from 'prop-types';
import Granim from 'granim';

export default class GranimComp extends Component {
  static propsType = {
    id: PropsType.string,
    name: PropsType.string,
    elToSetClassOn: PropsType.string,
    direction: PropsType.oneOf(
      'diagonal',
      'left-right',
      'top-bottom',
      'radial',
    ),
    isPausedWhenNotInView: PropsType.bool,
    opacity: PropsType.arrayOf(PropsType.number).isRequired,
    stateTransitionSpeed: PropsType.number,
    defaultStateName: PropsType.string,
    states: PropsType.object.isRequired,
  };

  static defaultProps = {
    id: `granim-canvas-${Math.random()
      .toString(36)
      .substring(2)}`,
    defaultStateName: 'default-state',
  };

  static get style() {
    return {
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
  }

  componentDidMount() {
    this.granim = new Granim(Object.assign({}, this.config, this.props));
  }

  get config() {
    // default
    return {
      element: `#${this.props.id}`,
      opacity: [1, 1],
      states: {
        [this.props.defaultStateName]: {
          gradients: [
            ['#EB3349', '#F45C43'],
            ['#FF8008', '#FFC837'],
            ['#4CB8C4', '#3CD3AD'],
            ['#24C6DC', '#514A9D'],
            ['#FF512F', '#DD2476'],
            ['#DA22FF', '#9733EE'],
          ],
          transitionSpeed: 2000,
        },
      },
    };
  }

  render() {
    const { id, style } = this.props;
    return <canvas id={id} style={style || GranimComp.style} />;
  }
}
