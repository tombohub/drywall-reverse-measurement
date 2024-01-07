import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isGameStarted: boolean;
  isGameOver: boolean;
  roundNumber: number;
}

const initialState: InitialState = {
  isGameStarted: false,
  isGameOver: false,

  /**
   * Game has multiple rounds.
   * New game always start with round number 1
   */
  roundNumber: 1,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setIsGameStartedTrue: state => {
      state.isGameStarted = true;
    },
    incrementRounNumber: state => {
      state.roundNumber += 1;
    },
  },
});

export const gameSliceActions = gameSlice.actions;
export default gameSlice.reducer;
