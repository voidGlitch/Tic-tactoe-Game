import React, { useState } from 'react';
// eslint-disable-next-line import/extensions
import Square from './Square.js';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXnext] = useState(false);

  console.log(board);
  const handleSquareClick = position => {
    if (board[position]) {
      return;
    }

    setBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return Square;
      });
    });
    setIsXnext(prev => !prev);
  };

  const renderSquare = position => {
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
        {/* <Square value={board[0]} onClick = {()=>{
          handleSquareClick(0)
        } instead of writing all this 
        }/> */}

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
