import { createSlice } from "@reduxjs/toolkit";
import { COUNTDOWN_SECONDS } from "../game";

interface InitialState {
  status: "idle" | "running";
  /**
   * how many seconds left in countdown
   */
  secondsLeft: number;
}

const initialState: InitialState = {
  status: "idle",
  secondsLeft: COUNTDOWN_SECONDS,
};

const countdownSlice = createSlice({
  name: "countdown",
  initialState,

  reducers: {
    decrementSecond: state => {
      state.secondsLeft = state.secondsLeft - 1;
    },
    startRunning: state => {
      if (state.status !== "running") state.status = "running";
    },
    stopRunning: state => {
      if (state.status !== "idle") {
        state.status = "idle";
      }
    },
    reset: () => initialState,
  },
});

export const countdownActions = countdownSlice.actions;
export default countdownSlice.reducer;
