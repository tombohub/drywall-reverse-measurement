import { Heading } from "@chakra-ui/react";
import { useGame } from "../hooks";

export default function ScoreInfo() {
  const { currentScore, totalQuestions } = useGame();
  return (
    <>
      <Heading>Your score:</Heading>
      <Heading>
        {currentScore}/{totalQuestions}
      </Heading>
    </>
  );
}
