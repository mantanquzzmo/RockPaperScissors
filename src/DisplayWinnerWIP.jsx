// work in progress
import React from 'react'
import { playerHand } from "./GameVsComp"
import cpuHand from "./GameVsComp"
import round from "./GameVsComp"

const Log = () => {
console.log(playerHand)
}
// const DisplayWinner = () => {
//   let playerWinDiv = 'Player wins';
//   let computerWinDiv ='Computer wins';

//   if (playerHand == "default1") {
//     return <div>Round: {round} Fight!</div>
//   }
//   if (playerHand == cpuHand) {
//     return 'Draw! No winner'
//   }

//   if (playerHand == "rock") {
//     if (cpuHand == "scissors") {
//       return playerWinDiv;
//     } else {
//       return computerWinDiv;
//     }
//   }
//   if (playerHand == "paper") {
//     if (cpuHand == "rock") {
//       return playerWinDiv;
//     } else {
//       return computerWinDiv;
//     }
//   }
//   if (playerHand == "scissors") {
//     if (cpuHand == "paper") {
//       return playerWinDiv;
//     } else {
//       return computerWinDiv;
//     }
//   }
// };

// export default DisplayWinner
export { Log }
export default Log