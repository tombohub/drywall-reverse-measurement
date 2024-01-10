import { Heading } from "@chakra-ui/react";
import { useAppSelector } from "../store";

export default function ScoreInfo() {
  const totalQuestions = useAppSelector(state => state.game.totalQuestions);
  const currentScore = useAppSelector(state => state.game.score);
  return (
    <>
      <Heading>Your score:</Heading>
      <Heading>
        {currentScore}/{totalQuestions}
      </Heading>
    </>
  );
}
