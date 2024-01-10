import { Box } from "@chakra-ui/react";
import AnswerOptionButton from "./AnswerOptionButton";
import { useAppSelector } from "../store";

export default function MultiChoiceGroup() {
  /**
   * answer options offered as multi choice
   */
  const answerOptions = useAppSelector(state => state.question.answerOptions);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {answerOptions.map(option => (
          <AnswerOptionButton answerOption={option} key={option} />
        ))}
      </Box>
    </>
  );
}
