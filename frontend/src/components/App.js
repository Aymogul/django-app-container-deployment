import React, { Component } from 'react';
import logo from '../img/hng9.png';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aymogul Django App</h1>
        </header>
        <p className="App-intro">
          This is a subset task on DevOps completed by <b>Aymogul</b>
        </p>
      </div>
    );
  }
}

export default App;
