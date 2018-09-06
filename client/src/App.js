import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Session from "./containers/Session";

const App = () => (
  <div className="app-container">
    <div className="container">
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/session" component={Session} />
        </div>
      </Router>
    </div>
  </div>
);

export default App;
