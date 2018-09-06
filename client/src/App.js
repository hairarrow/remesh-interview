import React, { Component } from "react";
import Session from "./containers/Session";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: true
    };
    this.toggleSession = this.toggleSession.bind(this);
  }

  toggleSession() {
    this.setState(({ showSession }) => ({ showSession: !showSession }));
  }

  render() {
    const { showSession } = this.state;
    return (
      <div className="app-container">
        <div className="container">{showSession && <Session />}</div>
      </div>
    );
  }
}

export default App;
