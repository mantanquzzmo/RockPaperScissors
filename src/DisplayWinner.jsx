import React from "react";

export const DisplayWinner = ({ playerHand, cpuHand, round, divAnime }) => {
  let playerWinDiv = (
    <div className="result" id="1">
      <h2 style={{ visibility: divAnime[1] }}>
        <div>Player wins</div>
      </h2>
    </div>
  );
  let computerWinDiv = (
    <div className="result" id="1">
      <h2 style={{ visibility: divAnime[1] }}>
        <div>Computer wins</div>
      </h2>
    </div>
  );

  if (playerHand == "default1") {
    return (
      <div className="result" id="1">
        <h2 style={{ visibility: divAnime[1] }}>
          <div>Round: {round} Fight!</div>
        </h2>
      </div>
    );
  }
  if (playerHand == cpuHand) {
    return (
      <div className="result" id="1">
        <h2 style={{ visibility: divAnime[1] }}>
          <div>Draw! No winner</div>
        </h2>
      </div>
    );
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
};
