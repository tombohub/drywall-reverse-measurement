import { Box } from "@chakra-ui/react";
import MultiChoiceGroup from "./MultiChoiceGroup";
import QuestionValue from "./QuestionValue";
import Header from "./Header";
import NewGameButton from "./NewGameButton";
import StartGameButton from "./StartGameButton";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import RulesInfoText from "./RulesInfoText";
import { useGame } from "../hooks";
import AnswerResultDisplay from "./AnswerResultDisplay";
import ScoreInfo from "./ScoreInfo";

export default function Content() {
  const { isAnswerSubmitted } = useGame();
  const isGameStarted = useSelector(
    (state: RootState) => state.game.isGameStarted
  );
  return (
    <>
      <Header />
      {!isGameStarted && <RulesInfoText />}
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
        {isAnswerSubmitted && <AnswerResultDisplay />}
        <NewGameButton />
        <ScoreInfo />
      </Box>
    </>
  );
}
