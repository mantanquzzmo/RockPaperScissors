import React, { Component } from "react";

class GameVsComp extends Component {
  constructor() {
    super();
    this.state = {
      player: null,
      computer: null,
      playerWins: 0,
      computerWins: 0,
      longestStreak: 0
    };
  }

  playGame(event) {
    let computerChoice = ["rock", "paper", "scissors"];
    this.setState({
      player: event.target.id,
      computer: computerChoice[Math.floor(Math.random() * 3)]
    });
  }

  displayWinner() {
    let player = this.state.player;
    let computer = this.state.computer;
    if (player == computer) {
      return <div>it's a tie</div>;
    }
    if (player == "rock") {
      if (computer == "scissors") {
        return <div>Player wins</div>;
      } else {
        return <div>Computer wins</div>;
      }
    }
    if (player == "paper") {
      if (computer == "rock") {
        return <div>Player wins</div>;
      } else {
        return <div>Computer wins</div>;
      }
    }
    if (player == "scissors") {
      if (computer == "paper") {
        return <div>Player wins</div>;
      } else {
        return <div>Computer wins</div>;
      }
    }
  }

  render() {
    let result = this.displayWinner();
    return (
      <div>
        {this.state.player}
        <button id="rock" onClick={this.playGame.bind(this)}>
          Rock
        </button>
        <button id="paper" onClick={this.playGame.bind(this)}>
          Paper
        </button>
        <button id="scissors" onClick={this.playGame.bind(this)}>
          Scissors
        </button>
        {this.state.computer}
        {result}
      </div>
    );
  }
}

export default GameVsComp;
