import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { userType, usersType } from "../types";

// import Questions from "../components/Question";

class Questions extends Component {
  render() {
    const { session } = this.props;
    console.log(session);
    return <div>Foo!</div>;
  }
}

Questions.defaultProps = {
  session: []
};

Questions.propTypes = {
  session: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      messages: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          questionId: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          creator: userType.isRequired,
          votes: usersType.isRequired
        })
      )
    })
  )
  // dispatch: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({ session: state.fetchData.session });
// const mapDispatchToProps = dispatch => ({ dispatch });

export default Questions;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Questions);
