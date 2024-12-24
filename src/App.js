/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Controls from "./Components/Controls";
import Timer from "./Components/Controls";

export class App extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="container">
        
        <Controls />
      </div>
    );
  }
}

export default App;
