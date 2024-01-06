import { Box } from "@chakra-ui/react";
import MultiChoiceGroup from "./MultiChoiceGroup";
import QuestionValue from "./QuestionValue";
import Header from "./Header";
import NewGameButton from "./NewGameButton";

export default function Content() {
  return (
    <>
      <Header />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginX={"auto"}
        width={"100vw"}
        gap={2}
      >
        <QuestionValue />
        <MultiChoiceGroup />
        <NewGameButton />
      </Box>
    </>
  );
}
