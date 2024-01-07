import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Question } from "../game";

interface InitialState {
  question: null | number;
  answerOptions: number[];
  correctAnwer: number | null;
}

const initialState: InitialState = {
  /**
   * Question value
   */
  question: null,
  answerOptions: [],
  correctAnwer: null,
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
      state.correctAnwer = action.payload.correctAnswer;
    },
  },
});

export const { setNewQuestion } = questionSlice.actions;
export default questionSlice.reducer;
