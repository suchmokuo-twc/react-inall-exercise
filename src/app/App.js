import React, { Component } from "react";
import "./App.less";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { Timer } from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/timer" component={Timer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
