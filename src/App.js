import React from "react";
import Board from "./components/Board";
import "./styles/root.scss";

export default function App() {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
      <h5>Coded by Rishav Bharti</h5>
    </div>
  );
}
