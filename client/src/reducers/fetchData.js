import { REQUEST_SESSION, RECEIVE_SESSION } from "../actions/fetchData";

export default (
  state = {
    session: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SESSION:
    case RECEIVE_SESSION:
      return Object.assign({}, state, {
        session: action.session
      });
    default:
      return state;
  }
};
