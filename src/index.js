import React from "react";
import ReactDOM from "react-dom";
import GameVsComp from "./GameVsComp";

const StartingPage = () => {
  return (
    <>
      <h2>RockPaperScissors</h2>
      <GameVsComp />
    </>
  );
};

ReactDOM.render(<StartingPage />, document.getElementById("app"));
