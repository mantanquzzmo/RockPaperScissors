import React from "react";
import ReactDOM from "react-dom";
import GameVsAI from "./GameVsAI";

const StartingPage = () => {
  return (
    <>
      <GameVsAI />
    </>
  );
};

ReactDOM.render(<StartingPage />, document.getElementById("app"));
