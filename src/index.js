import React from "react";
import ReactDOM from "react-dom";
const lakeList = ["Hindon Nadi", "Mansarovar lake", "Bangla sahib sarovar"];

function App({lakes}) {
  return (
    <ul>
      {lakes.map((lake) => (
        <li>{lake}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));

