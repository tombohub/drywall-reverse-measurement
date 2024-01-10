import { Text } from "@chakra-ui/react";
import { useAppSelector } from "../store";

/**
 * After each submitted answer shows if the answer is correct or wrong
 */
export default function AnswerResultDisplay() {
  const isAnswerCorrect = useAppSelector(
    state => state.question.isAnswerCorrect
  );
  return (
    <>
      {isAnswerCorrect && <Text>Correct!</Text>}
      {!isAnswerCorrect && <Text>Wrong...</Text>}
    </>
  );
}
