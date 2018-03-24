import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoContainer from './modules/container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ToDo List with React and Mobx</h1>
        </header>
        <TodoContainer/>
      </div>
    );
  }
}

export default App;
