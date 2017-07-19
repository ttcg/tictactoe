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
    console.log("in refresh click");

    this.setState(this.initiateGameState());
  }

  squareClick = (index) => {

    // process only if the current index of the square is empty
    if (this.state.numbers[index] === 9) {

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
    console.log(calculateWinner(this.state.numbers));
  }

  render() {
    //this.setState({ numbers:  });
    const {
      numbers,
      moves
    } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            
              <Squares numbers={numbers} squareClick={this.squareClick} />
              
              <History moves={moves} />  
          </div>        
        </div>
        <div className="text-center row" style={{"marginTop" : "30px"}}>
          <button className="btn btn-success" onClick={this.refreshClick}>
            <i className="fa fa-refresh fa-2x" /> Reset
          </button>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  console.log(squares);
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] && squares[a] !== 9) {
      console.log(squares[a]);
      return true;
    }
  }
  return false;
}