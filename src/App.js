import React from "react";
//first rule of react a component must always return a single element as you can see there is empty<>
   {/* or it is just a <React.Fragment> */}
 {/* it looks like html but it is js6 and below is reacts syntax */}
const app = () =>{
 return ( <>

  <h1>Welcome to React Parcel Micro App!</h1>
  <p>Hard to get more minimal than this React app.</p>
  <p> hey there</p>
  <center>its center</center>
</>
 )
};
export default app;

//to run this command simply write npm run start 
// to stop the script ctrl+c