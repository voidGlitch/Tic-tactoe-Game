import React from 'react';

const History = ({ history, moveto, currentMove }) => {
  return (
    <div>
      <ul>
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}
                type="button"
                onClick={() => moveto(move)}
              >
                {move === 0 ? 'go to game start' : `go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
