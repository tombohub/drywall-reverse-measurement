import { Text } from "@chakra-ui/react";
import { useGame } from "../hooks";

export default function ScoreInfo() {
  const { currentScore } = useGame();
  return (
    <>
      <Text>{currentScore}</Text>
    </>
  );
}
