import { Text } from "@chakra-ui/react";
import { useCountdown } from "../hooks";
export default function QuestionCountdown() {
  const seconds = useCountdown();
  return (
    <>
      <Text fontSize={"3xl"}>{seconds}</Text>
    </>
  );
}
