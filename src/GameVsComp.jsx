import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

const GameVsComp = () => {
  const [playerHand, setPlayerHand] = useState("default1");
  const [cpuHand, setCpuHand] = useState("default2");
  const [playerWins, setPlayerWins] = useState(0);
  const [cpuWins, setCpuWins] = useState(0);
  const [round, setRound] = useState(1);
  const [divAnime, setDivAnime] = useState("hidden");
  const [divStatic, setDivStatic] = useState("visible");

  const playGame = (event) => {
    let onClickValue = event.target.id;
    let cpuChoice = ["rock", "paper", "scissors"];
    setPlayerHand(onClickValue);
    setCpuHand(cpuChoice[Math.floor(Math.random() * 3)]);
    setRound(prevState => prevState + 1);
    setDivAnime("hidden");
    setDivStatic("visible");

    setTimeout(() => {
      {scoreCounter()};
      setDivAnime("hidden");
      setDivStatic("visible");
    }, 1200);

    setTimeout(() => {
      setPlayerHand("default1");
      setCpuHand("default2");
    }, 2500);
  };

  const displayWinner = () => {
    let player = playerHand; //try to refactor by using only playerHand
    let computer = cpuHand;
    let playerWinDiv = <div>Player wins</div>;
    let computerWinDiv = <div>Computer wins</div>;

    if (player == "default1") {
      return <div>Round: {round} Fight!</div>;
    }
    if (player == computer) {
      return <div>Draw! No winner</div>;
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
  };

  const scoreCounter = () => {
    let result = {displayWinner}
    switch (result.props.children) {
      case "Player wins":
        setPlayerWins(prevState => prevState + 1);
        break;

      case "Computer wins":
        setCpuWins(prevState => prevState + 1);
        break;
    }
  };

  const activeButton = () => {
    if (playerHand == "default1") {
      {playGame(event)}
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
          <p>{cpuWins}</p>
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
        <h2 style={{ visibility: divStatic }}>{displayWinner()}</h2>
      </div>

      <div className="hands" style={{ visibility: divStatic }}>
        <img
          className="player-hand"
          src={`./assets/${playerHand}.png`}
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
          src={`./assets/${cpuHand}.png`}
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
        <button id="rock" onClick={activeButton}>
          ROCK
        </button>
        <button id="paper" onClick={activeButton}>
          PAPER
        </button>
        <button id="scissors" onClick={activeButton}>
          SCISSORS
        </button>
      </div>
    </div>
  );
};

export default GameVsComp;
