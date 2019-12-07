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
      anime: "hidden",
      anime2: "visible"
    };
  }

  // animate() {
  //   if (this.state.anime == "hidden") {
  //     return "visible"
  //   } else {
  //     return "visible"
  //   }
  //   }

  playGame(event) {
    this.setState({
      anime: "visible",
      anime2: "hidden"
    });
    let computerChoice = ["rock", "paper", "scissors"];
    this.state.round++;
    this.setState({
      player: event.target.id,
      computer: computerChoice[Math.floor(Math.random() * 3)]
    });
    setTimeout(() => {
      this.scoreCounter();
      this.setState({
        anime: "hidden",
        anime2: "visible"
      });
    }, 1200);

    setTimeout(() => {
      this.setState({
        player: "default1",
        computer: "default2"
      });
    }, 2500);
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
        this.state.playerWins++;
        break;

      case "Computer wins":
        this.state.computerWins++;
        break;
    }
  }

  render() {
    let result = this.displayWinner();
    let playerWins = this.state.playerWins;
    let computerWins = this.state.computerWins;
    let anime = this.state.anime;
    let anime2 = this.state.anime2;
    let bindButton = () => {
      return this.playGame.bind(this);
    };
    if (result == "Player wins") {
      this.state.playerWins++;
    } else if (result == "Computer wins") {
      this.state.computerWins++;
    }

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
          <h2 style={{ visibility: anime2 }}>{result}</h2>
        </div>

        <div class="hands" style={{ visibility: anime2 }}>
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

        <div class="anime" style={{ visibility: anime }}>
          <img
            class="player-hand"
            src={`./assets/anime.gif`}
            height="220"
            width="220"
          ></img>
          <img class="vs" src="./assets/vs.png" height="110" width="120"></img>
          <img
            class="computer-hand"
            src={`./assets/anime.gif`}
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
