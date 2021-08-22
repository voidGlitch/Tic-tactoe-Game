import React from 'react';
// const message = winner
//     ? `Winner is ${winner}`
//     : `Next player is ${current.isXNext ? 'X' : 'O'}`;

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMoveLeft && `X and O tied`}
    </h2>
  );
};

export default StatusMessage;
