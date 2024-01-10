import { Heading } from "@chakra-ui/react";
import InchesDisplay from "./InchesDisplay";
import { useAppSelector } from "../store";

export default function QuestionValue() {
  const currentQuestionValue = useAppSelector(state => state.question.question);

  if (!currentQuestionValue) return "no question yet";

  return (
    <>
      <Heading>
        <InchesDisplay measurement={currentQuestionValue} />
      </Heading>
    </>
  );
}
