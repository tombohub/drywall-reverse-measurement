import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  status: "notStarted" | "started" | "over";
  questionNumber: number;
  totalQuestions: number;
  /**
   * Keeps track of the score
   */
  score: number;
}

const initialState: InitialState = {
  status: "notStarted",

  /**
   * Game has multiple question.
   * New game always start with question number 1
   */
  questionNumber: 1,
  totalQuestions: 0,
  score: 0,
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

    incrementQuestionNumber: state => {
      state.questionNumber += 1;
    },
    incrementScore: state => {
      state.score += 1;
    },
    finishGame: state => {
      if (state.status !== "over") {
        state.status = "over";
      }
    },
    setTotalQuestions: (state, action: PayloadAction<number>) => {
      state.totalQuestions = action.payload;
    },
    reset: () => initialState,
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
