import React, { Component } from "react";

class GameVsAI extends Component {
  constructor() {
    super();
    let startingArray = ["rock", "paper", "scissors"]
    this.state = {
      player: "default1",
      computer: "default2",
      playerWins: 0,
      computerWins: 0,
      round: 1,
      lastRound: "Draw",
      winLastHand: startingArray,
      loseLastHand: startingArray,
      drawLastHand: startingArray
    };
  }

  playGame(event) {
    let id = event.target.id;
    this.setState((prevState, _props) => {
      switch (this.state.lastRound) {
        case "Win":
          prevState.winLastHand.push(id);
          break;
        case "Loss":
          prevState.loseLastHand.push(id);
          break;
        case "Draw":
          prevState.drawLastHand.push(id);
          break;
      }
    });
    this.setState((prevState, _props) => {
      return {
        player: id,
        computer: this.aiGenerator(this.state.lastRound),
        round: prevState.round + 1
      };
    });
    setTimeout(() => {
      this.scoreCounter();
      this.setState({
        anime: "hidden",
        anime2: "visible"
      });
    }, 1);
  }

  aiGenerator() {
    let wonLastHand = this.state.winLastHand;
    this.aiConverter(wonLastHand);
    let lostLastHand = this.state.loseLastHand;
    this.aiConverter(lostLastHand);
    let drewLastHand = this.state.drawLastHand;
    this.aiConverter(drewLastHand);
    switch (this.state.lastRound) {
      case "Win":
        return wonLastHand[Math.floor(Math.random() * wonLastHand.length)];

      case "Loss":
        return lostLastHand[Math.floor(Math.random() * lostLastHand.length)];

      case "Draw":
        return drewLastHand[Math.floor(Math.random() * drewLastHand.length)];
    }
  }

  aiConverter(array) {
    array.forEach(function(item, i) {
      if (item == "rock") array[i] = "paper";
      if (item == "paper") array[i] = "scissors";
      if (item == "scissors") array[i] = "rock";
    });
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
        this.setState((prevState, _props) => {
          if (prevState.lastRound == "Win") {
          }
          return {
            lastRound: "Win",
            playerWins: prevState.playerWins + 1
          };
        });
        break;

      case "Computer wins":
        this.setState((prevState, _props) => {
          if (prevState.lastRound == "Loss") {
          }
          return {
            lastRound: "Loss",
            computerWins: prevState.computerWins + 1
          };
        });
        break;

      case "it's a tie":
        this.setState((prevState, _props) => {
          if (prevState.lastRound == "Draw")
            return {
              lastRound: "Draw"
            };
        });
        break;
    }
  }

  render() {
    let result = this.displayWinner();
    let playerWins = this.state.playerWins;
    let computerWins = this.state.computerWins;
    let aiIQ =
      this.state.loseLastHand.length +
      this.state.winLastHand.length +
      this.state.drawLastHand.length;
    let bindButton = () => {
      return this.playGame.bind(this);
    };

    return (
      <div class="gameDiv">
        <div class="counter">
          <img
            class="player-pic"
            src={`./assets/player.png`}
            height="120"
            width="120"
          ></img>
          <div class="player-counter">
            <p>{playerWins}</p>
            <h3>Player</h3>
          </div>
          <div class="colon">
            <h1>:</h1>
          </div>
          <div class="computer-counter">
            <p>{computerWins}</p>
            <h3>"AI"</h3>
          </div>
          <img
            class="ai-pic"
            src={`./assets/ai.png`}
            height="120"
            width="120"
          ></img>
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

export default GameVsAI;
