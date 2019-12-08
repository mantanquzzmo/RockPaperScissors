import React, { Component } from "react";

class GameVsComp extends Component {
  constructor() {
    super();
    this.state = {
      player: "default1",
      computer: "default2",
      playerWins: 0,
      computerWins: 0,
      round: 1,
      lastRound: "Win",
      winLastHand: ["rock", "paper", "scissors"],
      loseLastHand: ["rock", "paper", "scissors"],
      drawLastHand: ["rock", "paper", "scissors"]
    };
  }

  playGame(event) {
    let computerChoice = ["rock", "paper", "scissors"];
    this.state.round++;
    this.setState({
      player: event.target.id,
      computer: this.aiGenerator(this.state.lastRound)
    });
    setTimeout(() => {
      this.scoreCounter();
      this.setState({
        anime: "hidden",
        anime2: "visible"
      });
    }, 1);
    console.log(this.state.winLastHand)
  }

  aiGenerator() {
    let wonLastHand = this.state.winLastHand
    let lostLastHand = this.state.loseLastHand
    let drewLastHand = this.state.drawLastHand
    switch (this.state.lastRound) {
      case "Win":
        return wonLastHand[Math.floor(Math.random() * wonLastHand.length)]
      
      case "Loss":
        return lostLastHand[Math.floor(Math.random() * lostLastHand.length)]

      case "Draw":
        return drewLastHand[Math.floor(Math.random() * drewLastHand.length)]
    }
  }

  displayWinner() {
    let player = this.state.player;
    let computer = this.state.computer;
    let round = this.state.round;

    if (player == "default1") {
      return <div>Round: {round} Fight!</div>;
    }
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

  scoreCounter() {
    let result = this.displayWinner();
    switch (result.props.children) {
      case "Player wins":
        this.state.playerWins++
        this.setState(function(prevState, props) {
          if (prevState.lastRound == "Win") {
          }
        return {lastRound: "Win",
                winLastHand: [...prevState.winLastHand, this.state.player]}})
        break;

      case "Computer wins":
        this.state.computerWins++;
        this.setState(function(prevState, props) {
          if (prevState.lastRound == "Loss") {
          }
        return {lastRound: "Loss",
                loseLastHand: [...prevState.loseLastHand, this.state.player]}})
        break;
        
      case "it's a tie":
        this.setState(function(prevState, props) {
          if (prevState.lastRound == "Draw") {
          }
        return {lastRound: "Draw",
                drawLastHand: [...prevState.drawLastHand, this.state.player]}})
        break;
    }
  }


  render() {
    let result = this.displayWinner();
    let playerWins = this.state.playerWins;
    let computerWins = this.state.computerWins;
    let bindButton = () => {
      return this.playGame.bind(this);
    };

    return (
      <div class="gameDiv">
        <div class="counter">
          <div class="player-counter">
            <p>{playerWins}</p>
            <h3>Player</h3>
          </div>
          <div class="colon">
            <h1>:</h1>
          </div>
          <div class="computer-counter">
            <p>{computerWins}</p>
            <h3>Computer</h3>
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
