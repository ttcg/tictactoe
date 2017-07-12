import React, { Component } from 'react';

import { Squares } from './squares'
import { History } from './history'

export class Game extends Component {

  state = {
    winner: "",
    gameover: false
  }


  refreshClick = () => {
    console.log("in refresh click");
  }

  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-md-offset-3 col-md-6" style={{border: "1px solid red"}}>
            
              <Squares />
              
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

