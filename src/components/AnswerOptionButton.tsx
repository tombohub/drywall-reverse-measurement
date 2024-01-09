import { Button } from "@chakra-ui/react";
import { useGame } from "../hooks";
import { useEffect, useState } from "react";
import InchesDisplay from "./InchesDisplay";

interface AnswerOptionButtonProps {
  /**
   * option value offered to user as an answer choice
   */
  answerOption: number;
}

/**
 * Answer option in form of a button.
 * Clicking on button user submits his answer
 */
export default function AnswerOptionButton(props: AnswerOptionButtonProps) {
  const {
    submitAnswer,
    isAnswerSubmitted,
    correctAnswer,
    currentQuestionNumber,
  } = useGame();

  /**
   * True if this option is the one player clicked
   */
  const [isClicked, setIsClicked] = useState(false);

  /**
   * Reset isClicked to false after each question.
   * Otherwise it stays isClicked as true
   */
  useEffect(() => {
    setIsClicked(false);
  }, [currentQuestionNumber]);

  /**
   * True if this option is correct answer
   */
  const isCorrectOption = correctAnswer === props.answerOption;

  /**
   * After player selects option make button red if it's incorrect or green if it's correct answer. If it's incorrect correct option will be green and selected option red. Rest of the button to remain unchanged
   * @returns color scheme for chakra ui button
   */
  const colorScheme = () => {
    if (isAnswerSubmitted) {
      if (isCorrectOption) return "green";
      if (!isCorrectOption && isClicked) return "red";
    }
    return undefined;
  };

  function handleOnClick() {
    submitAnswer(null);
    // submitAnswer(props.answerOption);
    setIsClicked(true);
  }

  return (
    <>
      <Button onClick={handleOnClick} colorScheme={colorScheme()}>
        <InchesDisplay measurement={props.answerOption} />
      </Button>
    </>
  );
}
