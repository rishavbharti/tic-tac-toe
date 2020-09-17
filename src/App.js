import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner([...board]);

  let message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? `X` : `O`}`;

  if (!board.includes(null) && !winner) {
    message = "It's a tie!";
  }

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        // console.log(`Square : ${square}, Position: ${pos} \n`);
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });
    // console.log([...board])
    setIsXNext((prev) => !prev);
  };

  return (
    <div className="app">
      <h2>TIC TAC TOE</h2>
      <p>{message}</p>
      <Board board={board} handleSquareClick={handleSquareClick} />
      <button
        onClick={() => setBoard(Array(9).fill(null))}
        className="new-game-btn"
      >
        New Game
      </button>
      <h5>Coded by Rishav Bharti</h5>
    </div>
  );
}
