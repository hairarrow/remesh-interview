import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
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
          onClick={this.toggleOpen}
        >
          {title}
        </button>
        {isOpen && children}
      </div>
    );
  }
}

export default Dropdown;
