import styles from "./Player.module.css";

export function Player({ name, symbol }) {
  const { player, playerName, playerSymbol } = styles;

  return (
    <li>
      <span className={player}>
        <span className={playerName}>{name}</span>
        <span className={playerSymbol}>{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
