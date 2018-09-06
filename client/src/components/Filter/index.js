import "./index.css";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { toggleFilterOnSession } from "../../actions/filter";
import Dropdown from "./Dropdown";

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

const Filter = ({ dispatch, filters }) => (
  <div className="filters">
    {Object.keys(filters).map(filter => (
      <Dropdown
        key={filter}
        selectedAmount={filters[filter].filter(({ enabled }) => enabled).length}
        title={`${filterLabel(filter)}`}
      >
        <div>
          {filters[filter]
            .sort((a, b) => a.metric.localeCompare(b.metric))
            .map(({ metric, enabled }) => (
              <button
                className={`filters__dropdown-menu-item ${
                  enabled ? "filters__dropdown-menu-item--selected" : ""
                }`}
                key={metric}
                type="button"
                onClick={() =>
                  dispatch(
                    toggleFilterOnSession({ filter, metric, enabled }, filters)
                  )
                }
              >
                {metric}
              </button>
            ))}
        </div>
      </Dropdown>
    ))}
  </div>
);

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    age: PropTypes.array,
    income: PropTypes.array,
    livingEnvironment: PropTypes.array,
    sex: PropTypes.array
  }).isRequired
};

const mapStateToProps = state => ({
  filters: state.filter.filters,
  session: state.session.session
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
