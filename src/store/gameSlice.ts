import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isGameStarted: boolean;
  isGameOver: boolean;
  questionNumber: number;

  /**
   * Keeps track of the score
   */
  score: number;
}

const initialState: InitialState = {
  isGameStarted: false,
  isGameOver: false,

  /**
   * Game has multiple question.
   * New game always start with question number 1
   */
  questionNumber: 1,
  score: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setIsGameStartedTrue: state => {
      state.isGameStarted = true;
    },
    incrementQuestionNumber: state => {
      state.questionNumber += 1;
    },
    incrementScore: state => {
      state.score += 1;
    },
    reset: () => initialState,
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
