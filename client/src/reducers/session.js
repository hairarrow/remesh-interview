import * as SessionActions from "../actions/session";

export default (
  state = {
    session: [],
    filters: []
  },
  action
) => {
  switch (action.type) {
    case SessionActions.REQUEST_SESSION:
    case SessionActions.RECEIVE_SESSION:
      return {
        ...state,
        session: action.session
      };
    case SessionActions.RECEIVE_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };
    case SessionActions.RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case SessionActions.RECEIVE_VOTES:
      return {
        ...state,
        votes: action.votes
      };
    case SessionActions.RECEIVE_USERS:
      return {
        ...state,
        users: action.users
      };
    case SessionActions.FILTER_SESSION:
      return { ...state };
    default:
      return state;
  }
};
