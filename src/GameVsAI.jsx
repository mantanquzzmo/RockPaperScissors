import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameVsAI extends Component {
  constructor() {
    super();

    this.state = {
      player: "default1",
      computer: "default2",
      playerWins: 0,
      computerWins: 0,
      round: 1,
      divAnime: "hidden",
      divStatic: "visible",
      lastRound: "Draw",
      winLastHand: ["rock", "paper", "scissors"],
      loseLastHand: ["rock", "paper", "scissors"],
      drawLastHand: ["rock", "paper", "scissors"]
    };
  }

  playGame(event) {
    let playerClick = event.target.id;
    this.setState({
      divAnime: "visible",
      divStatic: "hidden"
    });
    this.setState((prevState, _props) => {
      switch (this.state.lastRound) {
        case "Win":
          prevState.winLastHand.push(this.aiConverter(playerClick));
          break;
        case "Loss":
          prevState.loseLastHand.push(this.aiConverter(playerClick));
          break;
        case "Draw":
          prevState.drawLastHand.push(this.aiConverter(playerClick));
          break;
      }
    });
    this.setState((prevState, _props) => {
      return {
        player: playerClick,
        computer: this.aiGenerator(this.state.lastRound),
        round: prevState.round + 1
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

  aiGenerator() {
    let wonLastHand = this.state.winLastHand;
    let lostLastHand = this.state.loseLastHand;
    let drewLastHand = this.state.drawLastHand;
    switch (this.state.lastRound) {
      case "Win":
        return wonLastHand[Math.floor(Math.random() * wonLastHand.length)];

      case "Loss":
        return lostLastHand[Math.floor(Math.random() * lostLastHand.length)];

      case "Draw":
        return drewLastHand[Math.floor(Math.random() * drewLastHand.length)];
    }
  }

  aiConverter(input) {
    if (input == "rock") {
      return "paper";
    } else if (input == "paper") {
      return "scissors";
    } else if (input == "scissors") {
      return "rock";
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
      this.state.drawLastHand.length - 9;
    let divAnime = this.state.divAnime;
    let divStatic = this.state.divStatic;
    let bindButton = () => {
      return this.playGame.bind(this);
    };

    return (
      <div className="gameDiv">
        <Link className="link" to="/GameVsComp">
          <img
            className="swaptocomp"
            src={`./assets/swaptocomp.png`}
            height="100"
            width="100"
          ></img>
        </Link>
        <div className="counter">
          <img
            className="player-pic"
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
            <h3>"AI"</h3>
          </div>

          <img
            className="ai-pic"
            src={`./assets/ai.png`}
            height="120"
            width="120"
          ></img>
        </div>
        <div className="aicount" style={{ visibility: divStatic }}>
          <h4>
            Player moves <br />
            calculated:
            {aiIQ}
          </h4>
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
            className="computer-hand"
            src={`./assets/${this.state.computer}.png`}
            height="220"
            width="220"
          ></img>
        </div>

        <div className="anime" style={{ visibility: divAnime }}>
          <img
            className="player-hand"
            src={`./assets/anime.gif`}
            height="220"
            width="220"
          ></img>
          <img class="vs1" src="./assets/vs.png" height="110" width="120"></img>
          <img
            className="computer-hand"
            src={`./assets/anime.gif`}
            height="220"
            width="220"
          ></img>
        </div>

        <div className="buttons">
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
