import { Box, Container, Text } from "@chakra-ui/react";
import MultiChoiceGroup from "./MultiChoiceGroup";
import QuestionValue from "./QuestionValue";
import Header from "./Header";
import NewGameButton from "./NewGameButton";
import StartGameButton from "./StartGameButton";
import RulesInfoText from "./RulesInfoText";
import { useGame } from "../hooks";
import AnswerResultDisplay from "./AnswerResultDisplay";
import ScoreInfo from "./ScoreInfo";
import QuestionCountdown from "./QuestionCountdown";

export default function Content() {
  const { isAnswerSubmitted, gameStatus } = useGame();

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
              <QuestionCountdown />
            </>
          )}
          {isAnswerSubmitted && gameStatus === "started" && (
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
