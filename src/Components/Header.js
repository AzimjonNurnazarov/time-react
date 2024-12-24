import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  state = {
    hour: this.props.hour || 0,
    minute: this.props.minute || 0,
    second: this.props.second || 0,
  };

  componentDidMount() {
    setInterval(() => {
      const { hour, minute, second } = this.state;
      this.setState((state) => {
        return { second: second - 1 };
      });

      if (second === 0) {
        this.setState((state) => {
          return { minute: minute - 1, second: 59 };
        });
      } else if (minute === 0) {
        this.setState((state) => {
          return { hour: hour - 1, minute: 59 };
        });
      }
    }, 100);
  }

  render() {
    const { hour, second, minute } = this.state;

    return (
      <div className="header">
        {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute}{" "}
        : {second < 10 ? "0" + second : second}
      </div>
    );
  }
}

export default Header;
