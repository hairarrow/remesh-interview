import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { toggleFilterOnSession } from "../actions/filter";

const filterLabel = filter => {
  switch (filter) {
    case "sex":
      return "gender";
    case "livingEnvironment":
      return "living";
    default:
      return filter;
  }
};

const Filter = ({ dispatch, filters, session }) => (
  <div>
    {Object.keys(filters).map(filter => (
      <div key={filter}>
        <div>
          {filterLabel(filter)}
          {filters[filter].filter(({ enabled }) => enabled).length}
        </div>
        <div>
          {filters[filter].map(({ metric, enabled }) => (
            <button
              key={metric}
              type="button"
              onClick={() =>
                dispatch(
                  toggleFilterOnSession({ filter, metric, enabled }, filters)
                )
              }
              style={{ background: enabled ? "green" : "inherit" }}
            >
              {metric}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  filters: state.filter.filters,
  session: state.session.session
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
