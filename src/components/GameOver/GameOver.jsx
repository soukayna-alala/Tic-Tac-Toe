import Styles from "./GameOver.module.css";

export function GameOver({ winner }) {
  const { gameOver } = Styles;

  return (
    <div id={gameOver}>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> It&apos;s a draw</p>}

      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
