import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useCountdown from "@bradgarropy/use-countdown";
import { useGame } from "../hooks";
export default function QuestionCountdown() {
  const { countdownSeconds, submitAnswer } = useGame();
  const [countdownComplete, setCountdownComplete] = useState(false);
  const countdown = useCountdown({
    seconds: countdownSeconds,
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
