import { filterSession } from "./session";

export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
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
  dispatch(createFilters(users));
};
