import "./App.css";
import { Player } from "./components/Player/Player.jsx";

function App() {
  return (
    <>
      <main>
        <h1>Tic-Tac-Toe</h1>

        <div id="gameContainer">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
