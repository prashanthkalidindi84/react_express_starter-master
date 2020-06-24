import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stocks from './components/stocks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stock Details</h1>
        </header>
        <Stocks />
      </div>
    );
  }
}

export default App;
