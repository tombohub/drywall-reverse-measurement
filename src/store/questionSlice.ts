import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TOTAL_QUESTIONS, type Question } from "../game";

interface InitialState {
  question: null | number;
  answerOptions: number[];
  correctAnswer: number | null;
  isAnswerSubmitted: boolean;
  totalQuestions: number;
  questionNumber: number;

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
  totalQuestions: TOTAL_QUESTIONS,
  /**
   * Game has multiple question.
   * New game always start with question number 1
   */
  questionNumber: 1,
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
    incrementQuestionNumber: state => {
      state.questionNumber = state.questionNumber + 1;
    },
    reset: () => initialState,
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
