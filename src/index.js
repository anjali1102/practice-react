import React from "react";
import ReactDOM from "react-dom";
const list =[1, 2, 3, 4, 5];

function App({items}) {
  return (
    <div>
      {items.map(item =>(
        <li key={item.toString()}>{item}</li>
      ))}
    </div>
  );
}

ReactDOM.render(<App items={list} />, document.getElementById("root"));
