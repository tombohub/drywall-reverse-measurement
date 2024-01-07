import { Box } from "@chakra-ui/react";
import MultiChoiceGroup from "./MultiChoiceGroup";
import QuestionValue from "./QuestionValue";
import Header from "./Header";
import NewGameButton from "./NewGameButton";
import StartGameButton from "./StartGameButton";
import { RootState } from "../store";
import { useSelector } from "react-redux";

export default function Content() {
  const isGameStarted = useSelector(
    (state: RootState) => state.game.isGameStarted
  );
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
        {!isGameStarted && <StartGameButton />}
        {isGameStarted && (
          <>
            <QuestionValue />
            <MultiChoiceGroup />
          </>
        )}
        <NewGameButton />
      </Box>
    </>
  );
}
