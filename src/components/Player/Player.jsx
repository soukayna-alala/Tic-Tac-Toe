import styles from "./Player.module.css";
import { useState } from "react";

export function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const { player, namePlayer, playerSymbol } = styles;

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setIsEditing();
  }

  let editablePlayerName = <span className={namePlayer}>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} />;
  }
  return (
    <li>
      <span className={player}>
        {editablePlayerName}
        <span className={playerSymbol}>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
