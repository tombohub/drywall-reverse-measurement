import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/questionSlice";
import { gameActions } from "../store/gameSlice";
import { COUNTDOWN_SECONDS, createQuestion, TOTAL_QUESTIONS } from "../game";
import { useDebouncedCallback } from "use-debounce";
import { useEffect } from "react";
import { countdownActions } from "../store/countdownSlice";

export function useGame() {
  const dispatch = useDispatch();
  const debouncedStartNewQuestion = useDebouncedCallback(
    startNextQuestion,
    2000
  );
  const debouncedFinishGame = useDebouncedCallback(finishGame, 2000);

  /**
   * Total questions under the presumption state is used after the game starts
   */
  const totalQuestions = useSelector(
    (state: RootState) => state.game.totalQuestions
  );
  const currentScore = useSelector((state: RootState) => state.game.score);

  const currentQuestionNumber = useSelector(
    (state: RootState) => state.game.questionNumber
  );

  const currentQuestionValue = useSelector(
    (state: RootState) => state.question.question
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
   * True if question countdown is running
   */
  const isCountdownRunning = useSelector(
    (state: RootState) => state.countdown.isCountdownRunning
  );

  /**
   * Game status state
   */
  const gameStatus = useSelector((state: RootState) => state.game.status);

  /**
   * answer options offered as multi choice
   */
  const answerOptions = useSelector(
    (state: RootState) => state.question.answerOptions
  );

  const isAnswerSubmitted = useSelector(
    (state: RootState) => state.question.isAnswerSubmitted
  );

  const countdownSeconds = COUNTDOWN_SECONDS;

  /**
   * Sets a state for a new question.
   */
  function newQuestion() {
    const question = createQuestion();
    dispatch(questionActions.setNewQuestion(question));
  }

  /**
   * Starts a new game
   */
  function startNewGame() {
    // reset all states
    dispatch(gameActions.reset());
    dispatch(questionActions.reset());
    dispatch(countdownActions.reset());

    newQuestion();
    dispatch(gameActions.startNewGame());
    dispatch(countdownActions.startRunning());
  }

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
    dispatch(countdownActions.stopRunning());
    const isCorrectAnswer = answer ? correctAnswer === answer : false;
    dispatch(questionActions.setIsAnswerSubmitted(true));
    dispatch(questionActions.setIsAnswerCorrect(isCorrectAnswer));
    if (isCorrectAnswer) dispatch(gameActions.incrementScore());
    if (currentQuestionNumber < TOTAL_QUESTIONS) {
      debouncedStartNewQuestion();
    } else {
      debouncedFinishGame();
    }
  }

  return {
    /**
     * Start a new game
     */
    startNewGame,

    submitAnswer,

    gameStatus,

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
    totalQuestions,
    currentQuestionValue,
    countdownSeconds,
    isCountdownRunning,
  };
}
