import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Parent />
        </header>
      </div>
    );
  }
}

export default App;
