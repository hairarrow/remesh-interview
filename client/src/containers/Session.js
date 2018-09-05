import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/fetchData";

const mapDispatchToProps = dispatch => ({ dispatch, getData });

class Session extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getData());
  }

  render() {
    return <div>Session</div>;
  }
}

const mapStateToProps = ({ session }) => ({ session });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
