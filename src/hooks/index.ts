import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setNewQuestion } from "../store/questionSlice";
import gameSlice, { setIsGameStartedTrue } from "../store/gameSlice";
import { createQuestion } from "../game";
export function useGame() {
  const dispatch = useDispatch();

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

  /**
   * Start a new game
   */
  function startNewGame() {
    const question = createQuestion();

    dispatch(setNewQuestion(question));
    dispatch(setIsGameStartedTrue());
  }

  return {
    /**
     * Start a new game
     */
    startNewGame,

    /**
     * True of game has started
     */
    isGameStarted,

    /**
     * answer options offered as multi choice
     */
    answerOptions,
  };
}
