// import "E:\\React\\project\\tictac\\src\\Style\\Square.style.css"
// it doesn't matter if we import file here or on another app.js it will work same as classes are declared globally'

import React from 'react';

const Square = ({ value, onClick, iswinningsquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${iswinningsquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
