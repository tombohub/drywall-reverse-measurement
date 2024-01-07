import { Button } from "@chakra-ui/react";
import { useGame } from "../hooks";

export default function StartGameButton() {
  const game = useGame();
  return (
    <>
      <Button onClick={game.startNewGame}>Start</Button>
    </>
  );
}
