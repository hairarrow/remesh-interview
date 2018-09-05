import { filterSession } from "./session";

export const ADD_FILTER_TO_SESSION = "ADD_FILTER_TO_SESSION";
export const addFilterToSession = filters => ({
  type: ADD_FILTER_TO_SESSION,
  filters
});

export const REMOVE_FILTER_FROM_SESSION = "REMOVE_FILTER_FROM_SESSION";
export const removeFilterFromSession = filters => ({
  type: REMOVE_FILTER_FROM_SESSION,
  filters
});

export const ADD_FILTER_TO_QUESTION = "ADD_FILTER_TO_QUESTION";
export const addFilterToQuestion = messages => ({
  type: ADD_FILTER_TO_QUESTION,
  messages
});

export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
});

export const MAKE_FILTERS = "MAKE_FILTERS";
export const makeFilters = () => ({
  type: MAKE_FILTERS
});

export const toggleFilterOnSession = (FILTER, filters) => dispatch => {
  const { filter, metric, enabled } = FILTER;
  const updateMetric = [...filters[filter]].map(
    fi =>
      fi.metric === metric
        ? {
            ...fi,
            enabled: !enabled
          }
        : { ...fi }
  );
  dispatch(updateFilters({ ...filters, [filter]: updateMetric }));
};

const updateFilters = filters => dispatch => {
  dispatch(receiveFilters(filters));
  dispatch(filterSession());
};

const createFilters = users => dispatch => {
  const { id, ...userModel } = users[0];
  const filters = Object.keys(userModel)
    .map(metrics => ({
      [metrics]: [...new Set(users.map(u => u[metrics]))].map(metric => ({
        metric,
        enabled: false
      }))
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});
  dispatch(receiveFilters(filters));
};

export const getFilters = users => dispatch => {
  dispatch(makeFilters());
  dispatch(createFilters(users));
};
