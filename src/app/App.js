import React, { Component } from "react";
import "./App.less";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Timer } from "./Timer";
import { Calculator } from "./Calculator";
import { Header } from "./Header";

class App extends Component {
  navList = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "在线计算器",
      path: "/calculator",
    },
    {
      name: "在线倒计时器",
      path: "/timer",
    },
  ];

  render() {
    const { navList } = this;

    return (
      <div className="app">
        <BrowserRouter>
          <Header navList={navList} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/calculator" component={Calculator} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
