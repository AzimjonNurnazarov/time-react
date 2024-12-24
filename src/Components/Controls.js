import React, { Component } from "react";
import "./style.css";

class Timer extends Component {
  state = {
    hours: 12, // boshlang'ich soatlar
    minutes: 60, // boshlang'ich minutlar
    seconds: 0, // boshlang'ich sekundlar
  };

  // Timer intervalni saqlash uchun
  timerInterval = null;

  // Komponent mount qilinganida intervalni ishga tushiruvchi metod
  componentDidMount() {
    this.startTimer(); 
  }

  // Komponentni unmount qilganida intervalni to'xtatish uchun metod
  componentWillUnmount() {
    this.clearTimer();
  }

  // Start qilish uchun metod
  startTimer = () => {
    this.clearTimer(); // oldingi intervalni tozalash
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => {
        let { hours, minutes, seconds } = prevState;

        // Sekund tugagach, minutlarni kamaytirish
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              return { hours: 0, minutes: 0, seconds: 0 }; // Vaqt tugadi
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

        // Yangi holatni qaytarish
        return { hours, minutes, seconds };
      });
    }, 1000); // har bir sekundda bir martta ishlaydi
  };

  // Intervalni to'xtatish uchun metod
  clearTimer = () => {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  };

  // Timerni reset qilish metod
  resetTimer = () => {
    this.clearTimer(); // Intervalni to'xtatish
    this.setState({
      hours: 12,
      minutes: 60,
      seconds: 0,
    });
    this.startTimer(); // Keyin yana intervalni ishga tushirish
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
        <div className="controls">
          <button onClick={this.startTimer} className="start">
            Start
          </button>
          <button onClick={this.clearTimer} className="stop">
            Stop
          </button>
          <button onClick={this.resetTimer} className="reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
