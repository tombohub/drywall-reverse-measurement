import { createSlice } from "@reduxjs/toolkit";
import { createQuestionValue } from "../game";

const initialState = {
  /**
   * Question value
   */
  value: createQuestionValue(),
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    createNewQuestion: state => {
      state.value = createQuestionValue();
    },
  },
});

export const { createNewQuestion } = questionSlice.actions;
export default questionSlice.reducer;
