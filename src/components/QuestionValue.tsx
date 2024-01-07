import { Heading } from "@chakra-ui/react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function QuestionValue() {
  const value = useSelector((state: RootState) => state.question.question);
  return (
    <>
      <Heading>{value}</Heading>
    </>
  );
}
