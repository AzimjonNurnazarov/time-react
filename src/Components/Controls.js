import React, { Component } from "react";
import "./style.css";

class Timer extends Component {
  state = {
    hours: 12, // boshlang'ich soat
    minutes: 60, // boshlang'ich minut
    seconds: 0, // boshlang'ich sekund
    isRunning: false, // taymerning ishlayotganligini kuzatadi
  };

  timerInterval = null;

  handleStart = () => {
    if (!this.state.isRunning && this.getTotalSeconds() > 0) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(() => {
        this.setState((prevState) => {
          let { hours, minutes, seconds } = prevState;

          if (seconds === 0) {
            if (minutes === 0) {
              if (hours === 0) {
                clearInterval(this.timerInterval); // vaqt tugaganda to'xtatadi
                return { isRunning: false };
              } else {
                hours--;
                minutes = 59;
                seconds = 59;
              }
            } else {
              minutes--;
              seconds = 59;
            }
          } else {
            seconds--;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);
    }
  };

  handleStop = () => {
    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };

  handleReset = () => {
    clearInterval(this.timerInterval);
    this.setState({ hours: 12, minutes: 60, seconds: 0, isRunning: false });
  };

  getTotalSeconds = () => {
    const { hours, minutes, seconds } = this.state;
    return hours * 3600 + minutes * 60 + seconds;
  };

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="timer">
        <h1>
          {hours < 10 ? "0" + hours : hours} :{" "}
          {minutes < 10 ? "0" + minutes : minutes} :{" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
        <Controls
          onStart={this.handleStart}
          onStop={this.handleStop}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    const { onStart, onStop, onReset } = this.props;

    return (
      <div className="controls">
        <button className="controls-button start" onClick={onStart}>
          Start
        </button>
        <button className="controls-button stop" onClick={onStop}>
          Stop
        </button>
        <button className="controls-button reset" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
