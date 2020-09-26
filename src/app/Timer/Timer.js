import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Timer.less";

export class Timer extends Component {
  state = {
    time: "",
    remainSeconds: 0,
    status: Timer.STATUS.START,
  };

  timer = null;

  get timeSetting() {
    const { time } = this.state;

    return parseInt(time, 10);
  }

  setTime(time) {
    this.setState({ time });
  }

  setRemainSeconds(remainSeconds) {
    this.setState({ remainSeconds });
  }

  setStatus(status) {
    this.setState({ status });
  }

  onTimeSettingChange = (event) => {
    const { status } = this.state;

    if (status === Timer.STATUS.END) {
      this.setStatus(Timer.STATUS.START);
    }

    this.setTime(event.target.value);
  };

  onStartClick = () => {
    const { timeSetting } = this;

    if (Number.isNaN(timeSetting) || timeSetting < 0) {
      alert("输入错误");
      return;
    }

    this.startRunning(timeSetting);
  };

  startRunning(timeSetting) {
    this.setStatus(Timer.STATUS.RUNNING);
    this.setRemainSeconds(timeSetting);

    this.timer = setInterval(() => {
      let { remainSeconds } = this.state;

      if (--remainSeconds <= 0) {
        clearInterval(this.timer);
        this.setStatus(Timer.STATUS.END);
        return;
      }

      this.setRemainSeconds(remainSeconds);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  screenRender() {
    const { status, remainSeconds } = this.state;

    return (
      <div className="timer-screen">
        {status === Timer.STATUS.START
          ? "Start"
          : status === Timer.STATUS.END
          ? "End"
          : status === Timer.STATUS.RUNNING
          ? `${remainSeconds} Seconds`
          : null}
      </div>
    );
  }

  timerRender() {
    const { time, status } = this.state;
    const { onTimeSettingChange, onStartClick } = this;
    const startBtnDisabled = status === Timer.STATUS.RUNNING;

    return (
      <div className="timer">
        <div className="timer-setting">
          <label htmlFor="timer-time">设置时间</label>
          <input id="timer-time" onChange={onTimeSettingChange} value={time} />
          <button onClick={onStartClick} disabled={startBtnDisabled}>
            Start
          </button>
        </div>
        {this.screenRender()}
      </div>
    );
  }

  render() {
    return (
      <div className="timer-container">
        <h1>在线倒计时器</h1>
        {this.timerRender()}
        <Link to="/">回到主页</Link>
      </div>
    );
  }

  static STATUS = {
    START: "start",
    RUNNING: "running",
    END: "end",
  };
}
