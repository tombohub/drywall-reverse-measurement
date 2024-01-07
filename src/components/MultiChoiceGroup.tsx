import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import ChoiceButton from "./ChoiceButton";
import { useGame } from "../hooks";

export default function MultiChoiceGroup() {
  /**
   * Indicates if user has chose an answer
   */
  const [userAnswered, setUserAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const { answerOptions } = useGame();

  const resetRegularMeasurementDebounced = useDebouncedCallback(
    resetRegularMeasurement,
    1000
  );

  function resetRegularMeasurement() {}

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {answerOptions.map(option => (
          <ChoiceButton choice={option} />
        ))}
      </Box>
    </>
  );
}
