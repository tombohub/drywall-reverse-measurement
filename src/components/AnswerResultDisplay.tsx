import { useGame } from "../hooks";
import { Text } from "@chakra-ui/react";

/**
 * After each submitted answer shows if the answer is correct or wrong
 */
export default function AnswerResultDisplay() {
  const { isAnswerCorrect } = useGame();
  return (
    <>
      {isAnswerCorrect && <Text>Correct!</Text>}
      {!isAnswerCorrect && <Text>Wrong...</Text>}
    </>
  );
}
