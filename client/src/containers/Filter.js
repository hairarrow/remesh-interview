import PropTypes from "prop-types";
import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { session } = this.props;
    console.log(session);
    return <div>Filter!</div>;
  }
}

export default Filter;
