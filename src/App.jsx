import Styles from "./App.module.css";
import { Player } from "./components/Player/Player.jsx";
import { GameBoard } from "./components/GameBoard/GameBoard.jsx";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const { gameContainer, players, highlightPlayer } = Styles;

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <>
      <main>
        <h1>Tic-Tac-Toe</h1>

        <div id={gameContainer}>
          <ol id={players} className={highlightPlayer}>
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
