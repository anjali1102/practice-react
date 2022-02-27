import './App.css';

function Lake({name}){
  return <h1>{name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Lake name="lake1"/>
      <Lake name="lake2"/>
      <Lake name="lake3"/>
    </div>
  );
}export default App;
