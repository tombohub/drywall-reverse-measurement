import { Button } from "@chakra-ui/react";
import { startNewGame } from "../store/gameSlice";
import { useAppDispatch } from "../store";
export default function StartGameButton() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Button onClick={() => dispatch(startNewGame())}>Start</Button>
    </>
  );
}
