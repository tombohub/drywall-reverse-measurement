import { Box } from "@chakra-ui/react";
import AnswerOptionButton from "./AnswerOptionButton";
import { useGame } from "../hooks";

export default function MultiChoiceGroup() {
  /**
   * Indicates if user has chose an answer
   */
  const { answerOptions } = useGame();

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {answerOptions.map(option => (
          <AnswerOptionButton answerOption={option} />
        ))}
      </Box>
    </>
  );
}
