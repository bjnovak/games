import './App.css';
import phaserGame from "./PhaserGame";
import HelloWorldScene from "./scenes/HelloWorldScene";
function App() {

  const handleClick = () => {
    const scene = phaserGame.scene.keys.helloworld;
    scene.createEmitter();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: '#8cff00'}}>Games</h1>
      </header>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
