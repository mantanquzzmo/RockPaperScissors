import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

const GameVsAi = () => {
  const [playerHand, setPlayerHand] = useState("default1")
  const [cpuHand, setCpuHand] = useState("default2");
  const [playerWins, setPlayerWins] = useState(0);
  const [cpuWins, setCpuWins] = useState(0);
  const [round, setRound] = useState(1);
  const [divAnime, setDivAnime] = useState(["hidden", "visible"]);
  const [lastRound, setLastRound] = useState("Draw")
  const [wonLastHand, setWonLastHand] = useState(["rock", "paper", "scissors"])
  const [lostLastHand, setLostLastHand] = useState(["rock", "paper", "scissors"])
  const [drewLastHand, setDrewLastHand] = useState(["rock", "paper", "scissors"])

  const playGame = (event) => {
      switch (lastRound) {
        case "Win":
          setWonLastHand(prevState => prevState.push(aiConverter(event.target.id)))
          break;
        case "Loss":
          setLostLastHand(prevState => prevState.push(aiConverter(event.target.id)))
          break;
        case "Draw":
          setDrewLastHand(prevState => prevState.push(aiConverter(event.target.id)))
          break;
      }
    };

    setPlayerHand(event.target.id)
    setCpuHand(aiGenerator(lastRound))
    setRound(prevState => prevState + 1)
    setDivAnime(["visible", "hidden"])

    setTimeout(() => {
      scoreCounter();
      setDivAnime(["hidden", "visible"])
      ;
    }, 1200);

    setTimeout(() => {
      setPlayerHand("default1")
      setCpuHand("default2")
    }, 2500);
  

  const aiGenerator = () => {
    switch (lastRound) {
      case "Win":
        return wonLastHand[Math.floor(Math.random() * wonLastHand.length)];

      case "Loss":
        return lostLastHand[Math.floor(Math.random() * lostLastHand.length)];

      case "Draw":
        return drewLastHand[Math.floor(Math.random() * drewLastHand.length)];
    }
  }

  const aiConverter = (input) => {
    if (input == "rock") {
      return "paper";
    } else if (input == "paper") {
      return "scissors";
    } else if (input == "scissors") {
      return "rock";
    }
  }

  const displayWinner = () => {
    let playerWinDiv = <div>Player wins</div>;
    let computerWinDiv = <div>Computer wins</div>;

    if (playerHand == "default1") {
      return <div>Round: {round} Fight!</div>;
    }
    if (playerHand == cpuHand) {
      return <div>it's a tie</div>;
    }

    if (playerHand == "rock") {
      if (cpuHand == "scissors") {
        return playerWinDiv;
      } else {
        return computerWinDiv;
      }
    }
    if (playerHand == "paper") {
      if (cpuHand == "rock") {
        return playerWinDiv;
      } else {
        return computerWinDiv;
      }
    }
    if (playerHand == "scissors") {
      if (cpuHand == "paper") {
        return playerWinDiv;
      } else {
        return computerWinDiv;
      }
    }
  }
  let result = displayWinner()

  const scoreCounter = () => {
    switch (document.getElementById("1").children[0].textContent) {
      case "Player wins":
        setLastRound("Win")
        setPlayerWins(prevState => prevState + 1)
        break;

      case "Computer wins":
            setLastRound("Loss")
            setCpuWins(prevState => prevState + 1)
        break;

      case "it's a tie":
        setLastRound("Draw")
        break;
    }
  }

  let aiIQ =
  lostLastHand.length +
  wwnLastHand.length +
  drewLastHand.length -
  9;

  render() {
    let divAnime = this.state.divAnime;
    let divStatic = this.state.divStatic;
    let player = this.state.player;
    let activateButton = () => {
      if (player == "default1") {
        return this.playGame.bind(this);
      } else {
        return null;
      }
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
            calculated: {aiIQ}
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
          <button id="rock" onClick={activateButton()}>
            ROCK
          </button>
          <button id="paper" onClick={activateButton()}>
            PAPER
          </button>
          <button id="scissors" onClick={activateButton()}>
            SCISSORS
          </button>
        </div>
      </div>
    );
  }
}

export default GameVsAI;