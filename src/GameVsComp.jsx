import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameVsComp extends Component {
  constructor() {
    super();
    this.state = {
      player: "default1",
      computer: "default2",
      playerWins: 0,
      computerWins: 0,
      round: 1,
      divAnime: "hidden",
      divStatic: "visible"
    };
  }

  playGame(event) {
    let onClickValue = event.target.id;
    let computerChoice = ["rock", "paper", "scissors"];
    this.setState((prevState, _props) => {
      return {
        player: onClickValue,
        computer: computerChoice[Math.floor(Math.random() * 3)],
        round: prevState.round + 1,
        divAnime: "visible",
        divStatic: "hidden"
      };
    });

    setTimeout(() => {
      this.scoreCounter();
      this.setState({
        divAnime: "hidden",
        divStatic: "visible"
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
    let playerWinDiv = <div>Player wins</div>;
    let computerWinDiv = <div>Computer wins</div>;

    if (player == "default1") {
      return <div>Round: {round} Fight!</div>;
    }
    if (player == computer) {
      return <div>it's a tie</div>;
    }

    if (player == "rock") {
      if (computer == "scissors") {
        return playerWinDiv;
      } else {
        return computerWinDiv;
      }
    }
    if (player == "paper") {
      if (computer == "rock") {
        return playerWinDiv;
      } else {
        return computerWinDiv;
      }
    }
    if (player == "scissors") {
      if (computer == "paper") {
        return playerWinDiv;
      } else {
        return computerWinDiv;
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
            playerWins: prevState.playerWins + 1
          };
        });
        break;

      case "Computer wins":
        this.setState((prevState, _props) => {
          if (prevState.lastRound == "Loss") {
          }
          return {
            computerWins: prevState.computerWins + 1
          };
        });
        break;
    }
  }

  render() {
    let result = this.displayWinner();
    let playerWins = this.state.playerWins;
    let computerWins = this.state.computerWins;
    let divAnime = this.state.divAnime;
    let divStatic = this.state.divStatic;
    let player = this.state.player;
    let activeButton = () => {
      if (player == "default1") {
        return this.playGame.bind(this);
      } else {
        return null;
      }
    };

    return (
      <div className="gameDiv">
        <Link className="link" to="/GameVsAI">
          <img
            className="swaptocomp"
            src={`./assets/swaptoai.png`}
            height="100"
            width="100"
          ></img>
        </Link>
        <div className="counter">
          <img
            class="player-pic"
            src={`./assets/player.png`}
            height="120"
            width="120"
          ></img>
          <div className="player-counter">
            <p>{playerWins}</p>
            <h3>Player</h3>
          </div>
          <div className="colon">
            <h1>:</h1>
          </div>
          <div className="computer-counter">
            <p>{computerWins}</p>
            <h3>Random</h3>
          </div>
          <img
            className="ai-pic"
            src={`./assets/computer.png`}
            height="120"
            width="120"
          ></img>
        </div>

        <div className="result">
          <h2 style={{ visibility: divStatic }}>{result}</h2>
        </div>

        <div className="hands" style={{ visibility: divStatic }}>
          <img
            className="player-hand"
            src={`./assets/${this.state.player}.png`}
            height="220"
            width="220"
          ></img>
          <img
            className="vs"
            src="./assets/vs.png"
            height="110"
            width="120"
          ></img>
          <img
            class="computer-hand"
            src={`./assets/${this.state.computer}.png`}
            height="220"
            width="220"
          ></img>
        </div>

        <div className="anime" style={{ visibility: divAnime }}>
          <img
            class="player-hand"
            src={`./assets/anime.gif`}
            height="220"
            width="220"
          ></img>
          <img
            className="vs1"
            src="./assets/vs.png"
            height="110"
            width="120"
          ></img>
          <img
            className="computer-hand"
            src={`./assets/anime.gif`}
            height="220"
            width="220"
          ></img>
        </div>

        <div className="buttons">
          <button id="rock" onClick={activeButton()}>
            ROCK
          </button>
          <button id="paper" onClick={activeButton()}>
            PAPER
          </button>
          <button id="scissors" onClick={activeButton()}>
            SCISSORS
          </button>
        </div>
      </div>
    );
  }
}

export default GameVsComp;
