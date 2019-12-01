import React, { Component } from "react";

class GameVsComp extends Component {
  constructor() {
    super();
    this.state = {
      player: 0,
      computer: 0,
      playerWins: 0, 
      computerWins: 0, 
      longestStreak: 0, 
    }
  }

  handleClick(event) {
    this.setState({
      player: event.target.id
    })
  }

  render() {
    return (
    
    <div>{this.state.player}
    <button id="rock" onClick={this.handleClick.bind(this)}>
      Rock
    </button>
    <button id="paper" onClick={this.handleClick.bind(this)}>
      Rock
    </button>
    <button id="scissors" onClick={this.handleClick.bind(this)}>
      Rock
    </button>
    </div>
    )
  }
}

export default GameVsComp;
