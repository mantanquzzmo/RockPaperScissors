import React, { Component } from "react";

class GameVsComp extends Component {
  constructor() {
    super();
    this.state = {
      player: "rock",
      computer: "rock",
      playerWins: 0,
      computerWins: 0,
      firstRound: 0,
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
      if (this.state.firstRound == 0) {
        this.state.firstRound++;
        return <div>Let's play!</div>
      } else {
        return <div>it's a tie</div>;
      }
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
    let bindButton = () => { 
      return this.playGame.bind(this)}
    if (result == "Player wins") {
      this.state.playerWins++;
    } else if (result == "Computer wins") {
      this.state.computerWins++;
    }

    return (
      <div class="gameDiv">
        <div class="counter">
          <div class="player-counter">
            <h1>Player Score</h1>
            <p>{playerWins}</p>
          </div>
          <div class="computer-counter">
            <h1>Computer Score</h1>
            <br></br>
            <p>{computerWins}</p>
          </div>
        </div>

        <div class="result">
          <h2>{result}</h2>
        </div>

        <div class="hands">
          <img
            class="player-hand"
            src={`./assets/${this.state.player}.png`}
            height="220"
            width="220"
          ></img>
          <img class="vs" src="./assets/vs.png" height="110" width="120"></img>
          <img
            class="computer-hand"
            src={`./assets/${this.state.computer}.png`}
            height="220"
            width="220"
          ></img>
        </div>

        <div class="buttons">
          <button id="rock" onClick={bindButton()}>
            ROCK
          </button>
          <button id="paper" onClick={bindButton()}>
            PAPER
          </button>
          <button id="scissors" onClick={bindButton()}>
            SCISSORS
          </button>
        </div>
      </div>
    );
  }
}

export default GameVsComp;
