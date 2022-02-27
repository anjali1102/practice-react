import React from "react";
import ReactDOM from "react-dom";
const list =[1, 2, 3, 4, 5];

function Lake({name}){
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({name}){
  return(
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function App(props){
  if(props.season==="summer"){
    return <Lake name="Jenny Lake" />;
  }else if(props.season==="winter"){
  return <SkiResort name="JHMR" /> 
  }
}



ReactDOM.render(<App season="summer" />, document.getElementById("root"));
