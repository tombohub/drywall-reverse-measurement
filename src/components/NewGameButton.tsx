import { Button } from "@chakra-ui/react";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { createNewQuestion } from "../store/questionSlice";

/**
 * Button which starts new game.
 * It appears after the game is over.
 */
export default function NewGameButton() {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(createNewQuestion())}>New Game</Button>
    </>
  );
}
