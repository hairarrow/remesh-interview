import PropTypes from "prop-types";
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
    const { title, selectedAmount, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div
        className="filters__menu-item-container"
        onMouseLeave={isOpen ? this.toggleOpen : undefined}
      >
        <button
          type="button"
          className={`filters__menu-item ${
            selectedAmount > 0 ? "filters__menu-item--has-selected" : ""
          }`}
          onMouseEnter={!isOpen ? this.toggleOpen : undefined}
        >
          {title}
          <span className="filters__menu-selected-count">{selectedAmount}</span>
        </button>
        <ReactCSSTransitionGroup
          className="filters__dropdown-menu"
          transitionName="dropdown-menu"
          transitionLeaveTimeout={300}
          transitionEnterTimeout={300}
        >
          {isOpen && <div className="filters__dropdown-menu">{children}</div>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  selectedAmount: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default Dropdown;
