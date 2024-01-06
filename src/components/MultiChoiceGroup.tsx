import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { answerChoicesAtom, regularMeasurementAtom } from "../store/store";
import { useAtom } from "jotai";
import { randomRegularMeasurement } from "../drywall";
import { useDebouncedCallback } from "use-debounce";
import ChoiceButton from "./ChoiceButton";

export default function MultiChoiceGroup() {
  /**
   * Indicates if user has chose an answer
   */
  const [userAnswered, setUserAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [choicesList] = useAtom(answerChoicesAtom);
  const [regularMeasurement, setRegularMeasurement] = useAtom(
    regularMeasurementAtom
  );
  const resetRegularMeasurementDebounced = useDebouncedCallback(
    resetRegularMeasurement,
    1000
  );

  function resetRegularMeasurement() {
    setRegularMeasurement(randomRegularMeasurement());
  }

  return (
    <>
      {String(isCorrectAnswer)}
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {choicesList.map(choice => (
          <ChoiceButton choice={choice} />
        ))}
      </Box>
    </>
  );
}
