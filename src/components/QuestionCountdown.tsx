import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useCountdown from "@bradgarropy/use-countdown";
import { useGame } from "../hooks";
import { useAppSelector } from "../store";
export default function QuestionCountdown() {
  const secondsStart = useAppSelector(state => state.countdown.secondsStart);
  const { submitAnswer } = useGame();
  const [countdownComplete, setCountdownComplete] = useState(false);
  const countdown = useCountdown({
    seconds: secondsStart,
    autoStart: true,
    onCompleted: () => setCountdownComplete(true),
  });

  useEffect(() => {
    if (countdownComplete) {
      submitAnswer(null);
      setCountdownComplete(false);
    }
  }, [countdownComplete, submitAnswer]);

  return (
    <>
      <Text fontSize={"3xl"}>{countdown.seconds}</Text>
    </>
  );
}
