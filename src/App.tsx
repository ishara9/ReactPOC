import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Player 1",
      score: 0,
    },
    tags: [
      { id: 1, name: "Sports", quanity: 10 },
      { id: 2, name: "Run", quanity: 20 },
    ],
  });

  function handleClick(): void {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Bob",
        score: game.player.score + 1,
      },
      tags: game.tags.map((tag) =>
        tag.id === 1 ? { ...tag, quanity: tag.quanity + 1 } : tag
      ),
    });
  }

  return (
    <>
      <h1>Player Name: {game.player.name}</h1>
      <h2>Score: {game.player.score}</h2>
      <h3>Tags</h3>
      <ul>
        {game.tags.map((tag) => (
          <li key={tag.id}>
            {tag.name} - {tag.quanity}
          </li>
        ))}
      </ul>
      <Button onClick={() => handleClick()}>
        <h1>Update Score!</h1>
      </Button>
    </>
  );
}

export default App;
