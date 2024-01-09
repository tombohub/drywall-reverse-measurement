import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { COUNTDOWN_SECONDS } from "../game";

interface InitialState {
  /**
   * how many seconds left in countdown
   */
  secondsLeft: number;
  isCountdownRunning: boolean;
}

const initialState: InitialState = {
  secondsLeft: COUNTDOWN_SECONDS,
  isCountdownRunning: false,
};

const countdownSlice = createSlice({
  name: "countdown",
  initialState,

  reducers: {
    decrementSecond: state => {
      state.secondsLeft = state.secondsLeft - 1;
    },
    startRunning: state => {
      state.isCountdownRunning = true;
    },
    stopRunning: state => {
      state.isCountdownRunning = false;
    },
    reset: () => initialState,
  },
});

export const countdownActions = countdownSlice.actions;
export default countdownSlice.reducer;
