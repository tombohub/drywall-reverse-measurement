import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setIsGameStartedTrue } from "../store/gameSlice";

export default function StartGameButton() {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(setIsGameStartedTrue())}>Start</Button>
    </>
  );
}
