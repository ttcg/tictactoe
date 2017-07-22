import React, { Component } from 'react';

import { Squares } from './squares'
import { History } from './history'

export class Game extends Component {

  

  initiateGameState = () => {
      return {      
        numbers: [9, 9, 9, 9, 9, 9, 9, 9, 9],
        moves: [],
        winner: "",
        gameover: false,
        currentTurn: "X"
      }
  }

  state = this.initiateGameState();


  refreshClick = () => {
    this.setState(this.initiateGameState());
  }

  squareClick = (index) => {

    // process only if the current index of the square is empty
    // process only if the winner is not found yet
    if (this.state.numbers[index] === 9 
      && this.state.winner === "") {

      this.setState((prevState) => {
        prevState.numbers[index] = prevState.currentTurn === "X" ? 1 : 0;
        prevState.moves.push(`square ${index + 1} marked as ${prevState.currentTurn}.`);
        return { 
          numbers: prevState.numbers,
          currentTurn: prevState.currentTurn === "X" ? "O" : "X",
          moves: prevState.moves
        };
      }, this.checkWinningState);
    }
    
  }

  checkWinningState = () => {
    var foundWinner = calculateWinner(this.state.numbers);
    if (foundWinner) {
      this.setState((prevState) => {
      return {
        winner: prevState.currentTurn === "X" ? "O" : "X" // swap the current Turn again to get the real winner
      }});
    } else if (this.state.moves.length === 9) { // all turns done, no move to make
      this.setState({
        gameover: true
      })
    }
  }

  render() {
    const {
      numbers,
      moves,
      winner,
      gameover
    } = this.state;

    return (
      <div style={{"marginTop" : "30px"}}>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            
              <Squares numbers={numbers} squareClick={this.squareClick} />
              
              <History moves={moves} />  

          </div>        
        </div>
        <div className="text-center row" style={{"marginTop" : "30px"}}>
          {gameover &&
            <div className="alert alert-warning" role="alert">
              No more moves left.  Click on the 'Reset' button to restart the game.  
            </div>
          }
          {winner &&
            <div className="alert alert-success" role="alert">
              The winner is {winner}.  
            </div>
          }
          <button className="btn btn-success" onClick={this.refreshClick}>
            <i className="fa fa-refresh fa-2x" /> Reset
          </button>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[a] === squares[c] && squares[a] !== 9) {
      return true;
    }
  }
  return false;
}