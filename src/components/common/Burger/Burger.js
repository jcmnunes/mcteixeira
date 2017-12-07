import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Burger.module.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const menuRoot = document.getElementById('menu-root');
    menuRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const menuRoot = document.getElementById('menu-root');
    menuRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

/**
 * Burger component
 */
class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggleMenuState = this.toggleMenuState.bind(this);
  }

  toggleMenuState() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div>
        <div
          className={`${styles.navTrigger} ${this.state.active &&
            styles.active}`}
          onClick={this.toggleMenuState}
        >
          <i />
          <i />
          <i />
        </div>
        <Menu>
          <div
            className={`${styles.menu} ${this.state.active && styles.active}`}
          >
            <p>Test</p>
            <p>Test2</p>
            <p>Test3</p>
          </div>
        </Menu>
      </div>
    );
  }
}

export default Burger;
