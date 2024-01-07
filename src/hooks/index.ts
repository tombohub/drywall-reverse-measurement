import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/questionSlice";
import { gameActions } from "../store/gameSlice";
import { createQuestion, TOTAL_QUESTIONS } from "../game";
import { useDebouncedCallback } from "use-debounce";
export function useGame() {
  const dispatch = useDispatch();
  const debouncedStartNewRound = useDebouncedCallback(startNewRound, 2000);

  const currentScore = useSelector((state: RootState) => state.game.score);

  const currentQuestionNumber = useSelector(
    (state: RootState) => state.game.questionNumber
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
    dispatch(gameActions.setIsGameStartedTrue());
  }

  function startNewRound() {
    dispatch(questionActions.reset());
    newQuestion();
    dispatch(gameActions.incrementQuestionNumber());
  }

  function finishGame() {}
  /**
   *Answers the current question
   */
  function submitAnswer(answer: number) {
    const isCorrectAnswer = correctAnswer === answer;
    dispatch(questionActions.setIsAnswerSubmitted(true));
    dispatch(questionActions.setIsAnswerCorrect(isCorrectAnswer));
    if (isCorrectAnswer) dispatch(gameActions.incrementScore());
    if (currentQuestionNumber < TOTAL_QUESTIONS) {
      debouncedStartNewRound();
    } else {
      finishGame();
    }
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

    currentQuestionNumber,
    currentScore,
  };
}
