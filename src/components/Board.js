import React, { useState, useEffect } from "react";
import Square from "./Square";
import "../styles/root.scss";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  // console.log('Board Re-render')

  const handleSquareClick = (position) => {

    if (board[position]) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        // console.log(`Square : ${square}, Position: ${pos} \n`);
        if (pos === position) {
          return isXNext ? "X" : "0";
        }
        return square;
      });
    });
    // console.log([...board])
    setIsXNext((prev) => !prev);
  };

  const renderSquare = (position) => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
