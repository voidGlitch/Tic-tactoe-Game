import React, { useState } from 'react';
import Board from './components/Board';
import History from './Components/History';
import StatusMessage from './Components/StatusMessage';
import { calculateWinner } from './helpers';

import './Style/root.scss';

const NEWGAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEWGAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  console.log('history', history);

  const { winner, winningsquare } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveto = move => {
    setCurrentMove(move);
  };
  const newgame = () => {
    setHistory(NEWGAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningsquare={winningsquare}
      />
      <button type="button" onClick={newgame}>
        Start new Game{' '}
      </button>
      <History history={history} moveto={moveto} currentMove={currentMove} />
    </div>
  );
};

export default App;
