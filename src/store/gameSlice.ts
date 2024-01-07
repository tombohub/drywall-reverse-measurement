import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isGameStarted: boolean;
  isGameOver: boolean;
}

const initialState = {
  isGameStarted: false,
  isGameOver: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setIsGameStartedTrue: state => {
      state.isGameStarted = true;
    },
  },
});

export const { setIsGameStartedTrue } = gameSlice.actions;
export default gameSlice.reducer;
