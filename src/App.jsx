import "./App.css";
import { Player } from "./components/Player/Player.jsx";
import { GameBoard } from "./components/GameBoard/GameBoard.jsx";

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
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
