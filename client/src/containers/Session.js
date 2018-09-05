import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/session";
import { sessionType } from "../types";

import Questions from "./Questions";
import Filter from "./Filter";

class Session extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getData());
  }

  render() {
    const { session } = this.props;
    const { questions, users } = session;
    const organizedSession = questions && this.organizeSession(session);
    return (
      <div>
        <Filter users={users} />
        <Questions session={organizedSession} />
      </div>
    );
  }
}

Session.defaultProps = {
  session: {
    questions: []
  }
};

Session.propTypes = {
  session: sessionType,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ session: state.session.session });
const mapDispatchToProps = dispatch => ({ dispatch, getData });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
