import {
  type RootState,
  type AppDispatch,
  useAppSelector,
  useAppDispatch,
} from "../store";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/questionSlice";
import { gameActions } from "../store/gameSlice";
import { COUNTDOWN_SECONDS, createQuestion, TOTAL_QUESTIONS } from "../game";
import { useDebouncedCallback } from "use-debounce";
import { countdownActions } from "../store/countdownSlice";

export function useGame() {
  const dispatch = useDispatch();
  const debouncedStartNewQuestion = useDebouncedCallback(
    startNextQuestion,
    2000
  );
  const debouncedFinishGame = useDebouncedCallback(finishGame, 2000);

  const currentQuestionNumber = useAppSelector(
    state => state.game.questionNumber
  );

  /**
   * Current question correct answer
   */
  const correctAnswer = useAppSelector(state => state.question.correctAnswer);

  /**
   * Start next question.
   * Not meant for initial question.
   * Initial question is created within {@link startNewGame} function
   */
  function startNextQuestion() {
    // reset needed states
    dispatch(questionActions.reset());
    dispatch(countdownActions.reset());

    newQuestion();
    dispatch(gameActions.incrementQuestionNumber());
    dispatch(countdownActions.startRunning());
  }

  function finishGame() {
    dispatch(gameActions.finishGame());
  }
  /**
   *Answers the current question
   */
  function submitAnswer(answer: number | null) {
    // if answer is null player didn't answer in countdown time.
    if (isCorrectAnswer) dispatch(gameActions.incrementScore());
    if (currentQuestionNumber < TOTAL_QUESTIONS) {
      debouncedStartNewQuestion();
    } else {
      debouncedFinishGame();
    }
  }

  return {
    submitAnswer,
  };
}
