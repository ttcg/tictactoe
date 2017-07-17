import React, { Component } from 'react';

import { Squares } from './squares'
import { History } from './history'

export class Game extends Component {

  

  initiateGameState = () => {
      return {      
        numbers: [9, 9, 9, 9, 9, 9, 9, 9, 9],
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
console.log(index);

    this.setState((prevState) => {
      prevState.numbers[index] = prevState.currentTurn === "X" ? 1 : 0;
      return { 
        numbers: prevState.numbers,
        currentTurn: prevState.currentTurn === "X" ? "O" : "X"
       };
    });
    
    
  }

  render() {
    //this.setState({ numbers:  });
    const {
      numbers
    } = this.state;

    return (
      <div>
        <div className="row text-center">
          <div className="col-md-offset-3 col-md-6" style={{border: "1px solid red"}}>
            
              <Squares numbers={numbers} squareClick={this.squareClick} />
              
              <History />  
          </div>        
        </div>
        <div className="text-center row">
          <button className="btn btn-success" onClick={this.refreshClick}>
            <i className="fa fa-refresh fa-2x" /> Reset
          </button>
        </div>
      </div>
    );
  }
}

