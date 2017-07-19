import React, { Component } from 'react';
import logo from './images/tictactoe.png';
import './App.css';

import {Game} from './components/game'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header App">
          <img src={logo} className="logo" alt="logo" />
          <h3>Tic Tac Toe App</h3>
        </div>        
        <div className="container">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
