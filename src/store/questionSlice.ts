import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Question } from "../game";

interface InitialState {
  question: null | number;
  answerOptions: number[];
  correctAnswer: number | null;
  isAnswerSubmitted: boolean;

  /**
   * True if answer is correct.
   * Null is if answer is not yet submitted
   */
  isAnswerCorrect: boolean | null;
}

const initialState: InitialState = {
  /**
   * Question value
   */
  question: null,
  answerOptions: [],
  correctAnswer: null,
  isAnswerSubmitted: false,
  isAnswerCorrect: null,
};

/**
 * Slice managing question state
 */
const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setNewQuestion: (state, action: PayloadAction<Question>) => {
      state.question = action.payload.questionValue;
      state.answerOptions = action.payload.answerOptions;
      state.correctAnswer = action.payload.correctAnswer;
    },
    setIsAnswerSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isAnswerSubmitted = action.payload;
    },
    setIsAnswerCorrect: (state, action: PayloadAction<boolean>) => {
      state.isAnswerCorrect = action.payload;
    },

    reset: () => initialState,
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
