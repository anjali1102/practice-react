import React from "react";
import ReactDOM from "react-dom";
const lakeList =[
  {id:"1", name:"Echo", trailhead: "Echo"},
  {id:"2", name:"Maud", trailhead: "Wrights"},
  {id:"3", name:"Velma", trailhead: "Bayview"}
];

function App({lakes}) {
  return (
    <div>
      {lakes.map(lake =>(
        <div>
          <h2>{lake.name}</h2>
          <p>Accessed by : {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
