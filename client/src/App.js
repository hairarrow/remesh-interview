import React, { Component } from "react";
import { connect } from "react-redux";
import { reverseArray } from "./actions/reverseArray";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  reverseArray: () => dispatch(reverseArray())
});

class App extends Component {
  reverseArray = () => {
    this.props.reverseArray();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.reverseArray}>Test Action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
