// import "E:\\React\\project\\tictac\\src\\Style\\Square.style.css"
// it doesn't matter if we import file here or on another app.js it will work same as classes are declared globally'

import React from 'react';

const Square = ({ value, onClick, iswinningsquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningsquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
