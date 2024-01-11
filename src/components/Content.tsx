import { Box, Container, Text } from "@chakra-ui/react";
import MultiChoiceGroup from "./MultiChoiceGroup";
import QuestionValue from "./QuestionValue";
import Header from "./Header";
import NewGameButton from "./NewGameButton";
import StartGameButton from "./StartGameButton";
import RulesInfoText from "./RulesInfoText";
import AnswerResultDisplay from "./AnswerResultDisplay";
import ScoreInfo from "./ScoreInfo";
import QuestionCountdown from "./QuestionCountdown";
import { useAppSelector } from "../store";

export default function Content() {
  const questionStatus = useAppSelector(state => state.question.status);
  const gameStatus = useAppSelector(state => state.game.status);
  return (
    <>
      <Header />
      <Container>
        {gameStatus === "notStarted" && <RulesInfoText />}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          marginX={"auto"}
          gap={2}
        >
          <br />
          {gameStatus === "notStarted" && <StartGameButton />}
          {gameStatus === "started" && (
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
          {gameStatus === "started" && <QuestionCountdown />}
          {questionStatus === "answered" && gameStatus === "started" && (
            <AnswerResultDisplay />
          )}
          {gameStatus === "over" && <ScoreInfo />}
          <br />
          {gameStatus === "over" && <NewGameButton />}
        </Box>
      </Container>
    </>
  );
}
