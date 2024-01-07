import { Button } from "@chakra-ui/react";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { setNewQuestion } from "../store/questionSlice";
import { useGame } from "../hooks";

/**
 * Button which starts new game.
 * It appears after the game is over.
 */
export default function NewGameButton() {
  const game = useGame();
  return (
    <>
      <Button onClick={game.startNewGame}>New Game</Button>
    </>
  );
}
