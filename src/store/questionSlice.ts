import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Question } from "../game";

interface InitialState {
  /**
   * empty means question is not ready yet
   * active means it's currently in play
   * answered means player has submitted answer
   */
  status: "empty" | "active" | "answered";
  /**
   * value of the question
   */
  question: null | number;

  /**
   * options for multiple choice
   */
  answerOptions: number[];

  /**
   * value of the correct answer
   */
  correctAnswer: number | null;

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
  status: "empty",
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

    setAnswerSubmitted: state => {
      if (state.status !== "answered") {
        state.status = "answered";
      }
    },
    setIsAnswerCorrect: (state, action: PayloadAction<boolean>) => {
      state.isAnswerCorrect = action.payload;
    },

    reset: () => initialState,
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
