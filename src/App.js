// import React from "react";
// // eslint-disable-next-line import/extensions
// import Board from "./Components/Board.js";

// import "./Style/root.scss"
// // //first rule of react a component must always return a single element as you can see there is empty<>
// //    {/* or it is just a <React.Fragment> */}
// //  {/* it looks like html but it is js6 and below is reacts syntax */}
// const app = () =>{
//  return (
// <div className="app">
//   <h1>TIC TAC TOE Game</h1>
//   <Board />
// </div>
//  )
// };
// export default app;

// to run this command simply write npm run start 
// to stop the script ctrl+c

import React from 'react';
import Board from './Components/Board';

import './Style/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  );
};

export default App;
