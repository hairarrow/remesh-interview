import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  }

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div
        className="filters__menu-item-container"
        onMouseLeave={isOpen ? this.toggleOpen : undefined}
      >
        <button
          type="button"
          className="filters__menu-item"
          onMouseEnter={!isOpen ? this.toggleOpen : undefined}
        >
          {title}
        </button>
        <ReactCSSTransitionGroup
          className="filters__dropdown-menu"
          transitionName="dropdown-menu"
          transitionLeaveTimeout={300}
          transitionEnterTimeout={300}
        >
          {isOpen && <div className="filters__dropdown-menu">{children}</div>}
        </ReactCSSTransitionGroup>
        {/* <div className="filters__dropdown-menu">{children}</div> */}
      </div>
    );
  }
}

export default Dropdown;
