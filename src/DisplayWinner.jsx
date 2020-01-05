import React from "react";

export const DisplayWinner = ({playerHand, cpuHand, round}) => {
    let playerWinDiv = <div>Player wins</div>;
    let computerWinDiv = <div>Computer wins</div>;

    if (playerHand == "default1") {
      return <div>Round: {round} Fight!</div>;
    }
    if (playerHand == cpuHand) {
      return <div>Draw! No winner</div>;
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


