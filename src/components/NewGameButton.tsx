import { Button } from "@chakra-ui/react";
import { useAppDispatch } from "../store";
import { startNewGame } from "../store/gameSlice";

/**
 * Button which starts new game.
 * It appears after the game is over.
 */
export default function NewGameButton() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Button onClick={() => dispatch(startNewGame())}>New Game</Button>
    </>
  );
}
