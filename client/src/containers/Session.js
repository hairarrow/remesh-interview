import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/fetchData";
import { sessionType } from "../types";

import Questions from "./Questions";
import Filter from "./Filter";

class Session extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getData());
  }

  organizeSession = ({ questions, messages, users, votes }) =>
    [...questions].map(q =>
      Object.assign({}, q, {
        messages: [...messages]
          .filter(({ questionId }) => questionId === q.id)
          .map(({ creatorId, ...msg }) => ({
            ...msg,
            creator: [...users].filter(({ id }) => id === creatorId)[0],
            votes: [...votes]
              .filter(
                ({ questionId, messageId }) =>
                  questionId === q.id && messageId === msg.id
              )
              .map(({ id, userId }) =>
                Object.assign(
                  {},
                  { id },
                  [...users].filter(user => user.id === userId)[0]
                )
              )
          }))
      })
    );

  render() {
    const { session } = this.props;
    const { questions } = session;
    const organizedSession = questions && this.organizeSession(session);
    return (
      <div>
        <Filter session={session} />
        <Questions session={organizedSession} />
      </div>
    );
  }
}

Session.defaultProps = {
  session: {
    votes: [],
    messages: [],
    users: [],
    questions: []
  }
};

Session.propTypes = {
  session: sessionType,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ session: state.fetchData.session });
const mapDispatchToProps = dispatch => ({ dispatch, getData });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
