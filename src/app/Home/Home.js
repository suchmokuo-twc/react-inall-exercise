import React from "react";
import "./Home.less";
import calculatorImage from "../../images/calculator.png";
import timerImage from "../../images/timer.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-banner"></div>
      <div className="home-menu">
        <div className="home-menu-item">
          <img src={calculatorImage} alt="calculator" />
          <Link to="/calculator">计算器</Link>
        </div>

        <div className="home-menu-item">
          <img src={timerImage} alt="timer" />
          <Link to="/timer">倒计时器</Link>
        </div>
      </div>
    </div>
  );
};
