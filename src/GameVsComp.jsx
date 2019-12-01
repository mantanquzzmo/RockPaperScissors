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
        this.state.playerWins++;
        return <div>Player wins</div>;
      } else {
        this.state.computerWins++;
        return <div>Computer wins</div>;
        
      }
    }
    if (player == "paper") {
      if (computer == "rock") {
        this.state.playerWins++;
        return <div>Player wins</div>;
      } else {
        this.state.computerWins++;
        return <div>Computer wins</div>;
      }
    }
    if (player == "scissors") {
      if (computer == "paper") {
        this.state.playerWins++;
        return <div>Player wins</div>;
      } else {
        this.state.computerWins++;
        return <div>Computer wins</div>;
      }
    }
  }

  render() {
    let result = this.displayWinner();
    let playerWins = this.state.playerWins;
    let computerWins = this.state.computerWins;
    if (result == 'Player wins') {
      this.state.playerWins++;
      } else if (result == 'Computer wins') {
      this.state.computerWins++;
      }
    
    return (
      <div className="gameDiv">
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
        {playerWins}
        {computerWins}
      </div>
    );
  }
}

export default GameVsComp;
