import { createSlice } from "@reduxjs/toolkit";
import { TOTAL_QUESTIONS, createQuestion } from "../game";
import { AppThunk } from "./store";
import { questionActions } from "./questionSlice";
import { countdownActions } from "./countdownSlice";

interface InitialState {
  status: "notStarted" | "started" | "over";

  /**
   * Keeps track of the score
   */
  score: number;
  totalQuestions: number;
  questionNumber: number;
}

const initialState: InitialState = {
  status: "notStarted",

  score: 0,
  totalQuestions: TOTAL_QUESTIONS,
  /**
   * Game has multiple question.
   * Start with zero so when we start game we increment number
   */
  questionNumber: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startNewGame: state => {
      if (state.status === "notStarted" || state.status === "over") {
        state.status = "started";
      }
    },
    incrementScore: state => {
      state.score += 1;
    },
    incrementQuestionNumber: state => {
      state.questionNumber = state.questionNumber + 1;
    },
    finishGame: state => {
      if (state.status !== "over") {
        state.status = "over";
      }
    },

    reset: () => initialState,
  },
});

export const startNewQuestion = (): AppThunk => (dispatch, getState) => {
  const question = createQuestion();

  dispatch(questionActions.reset());

  dispatch(questionActions.newQuestion(question));
  dispatch(gameActions.incrementQuestionNumber());
};

export const startNewGame = (): AppThunk => (dispatch, getState) => {
  dispatch(gameActions.reset());
  dispatch(countdownActions.reset());

  dispatch(gameActions.startNewGame());
  dispatch(startNewQuestion());
};

export const submitAnswer =
  (answer: number): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    if (answer === state.question.correctAnswer) {
      dispatch(gameActions.incrementScore());
    }
    dispatch(questionActions.submitAnswer(answer));

    if (state.game.questionNumber < state.game.totalQuestions) {
      // NOTE: time logic present, maybe decouple in future
      // wait 2 seconds before new question
      setTimeout(() => {
        dispatch(startNewQuestion());
      }, 2000);
    } else {
      setTimeout(() => {
        dispatch(gameActions.finishGame());
      }, 2000);
    }
  };

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
