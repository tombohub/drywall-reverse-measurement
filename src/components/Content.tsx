import { Box, Container, Text } from "@chakra-ui/react";
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
import QuestionCountdown from "./QuestionCountdown";

export default function Content() {
  const { isAnswerSubmitted, isGameOver, isCountdownRunning } = useGame();
  const isGameStarted = useSelector(
    (state: RootState) => state.game.isGameStarted
  );
  return (
    <>
      <Header />
      <Container>
        {!isGameStarted && <RulesInfoText />}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          marginX={"auto"}
          gap={2}
        >
          <br />
          {!isGameStarted && <StartGameButton />}
          {isGameStarted && !isGameOver && (
            <>
              <Text fontSize={"x-small"} color={"gray.400"}>
                If measurement is:
              </Text>
              <QuestionValue />
              <br />
              <Text fontSize={"x-small"} color={"gray.400"}>
                reverse measurement is:
              </Text>
              <MultiChoiceGroup />
            </>
          )}
          {isCountdownRunning && <QuestionCountdown />}
          {isAnswerSubmitted && !isGameOver && <AnswerResultDisplay />}
          {isGameOver && <ScoreInfo />}
          <br />
          {isGameOver && <NewGameButton />}
        </Box>
      </Container>
    </>
  );
}
