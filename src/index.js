import React from "react";
import ReactDOM from "react-dom";


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
  return(
    <div>
      {props.season==="summer"?(
        <Lake name="Jenny Lake" />
      ):props.season==="winter" ? (
        <SkiResort name="JHMR" /> 
      ):(
        <h1>
          Come Back winter or summer !
        </h1>
      )}
    </div>
  );
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
