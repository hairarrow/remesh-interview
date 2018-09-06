import { RECEIVE_FILTERS } from "../actions/filter";

export default (
  state = { users: [], filters: {}, activeFilters: {} },
  action
) => {
  switch (action.type) {
    case RECEIVE_FILTERS:
      return { ...state, filters: action.filters };
    default:
      return state;
  }
};
