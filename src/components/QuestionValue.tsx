import { Heading } from "@chakra-ui/react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import InchesDisplay from "./InchesDisplay";
import { useGame } from "../hooks";

export default function QuestionValue() {
  const { currentQuestionValue } = useGame();

  if (!currentQuestionValue) return "no question yet";

  return (
    <>
      <Heading>
        <InchesDisplay measurement={currentQuestionValue} />
      </Heading>
    </>
  );
}
