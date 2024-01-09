import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOTAL_QUESTIONS } from "../game";

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
   * New game always start with question number 1
   */
  questionNumber: 1,
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

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
