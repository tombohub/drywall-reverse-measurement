import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/questionSlice";
import { gameSliceActions } from "../store/gameSlice";
import { createQuestion } from "../game";
import { useDebouncedCallback } from "use-debounce";
export function useGame() {
  const dispatch = useDispatch();
  const debouncedStartNewRound = useDebouncedCallback(startNewRound, 2000);

  const currentRoundNumber = useSelector(
    (state: RootState) => state.game.roundNumber
  );
  /**
   * Current question correct answer
   */
  const correctAnswer = useSelector(
    (state: RootState) => state.question.correctAnswer
  );

  const isAnswerCorrect = useSelector(
    (state: RootState) => state.question.isAnswerCorrect
  );

  /**
   * True if game has started
   */
  const isGameStarted = useSelector(
    (state: RootState) => state.game.isGameStarted
  );

  /**
   * answer options offered as multi choice
   */
  const answerOptions = useSelector(
    (state: RootState) => state.question.answerOptions
  );

  const isAnswerSubmitted = useSelector(
    (state: RootState) => state.question.isAnswerSubmitted
  );

  function newQuestion() {
    const question = createQuestion();

    dispatch(questionActions.setNewQuestion(question));
  }
  /**
   * Starts a new game
   */
  function startNewGame() {
    newQuestion();
    dispatch(gameSliceActions.setIsGameStartedTrue());
  }

  function startNewRound() {
    dispatch(questionActions.reset());
    newQuestion();
    dispatch(gameSliceActions.incrementRounNumber());
  }

  /**
   *Answers the current question
   */
  function submitAnswer(answer: number) {
    dispatch(questionActions.setIsAnswerSubmitted(true));
    dispatch(questionActions.setIsAnswerCorrect(correctAnswer === answer));
    debouncedStartNewRound();
  }

  return {
    /**
     * Start a new game
     */
    startNewGame,

    submitAnswer,

    /**
     * True of game has started
     */
    isGameStarted,

    /**
     * answer options offered as multi choice
     */
    answerOptions,

    /**
     * Current question correct answer
     */
    correctAnswer,

    isAnswerSubmitted,

    isAnswerCorrect,

    currentRoundNumber,
  };
}
