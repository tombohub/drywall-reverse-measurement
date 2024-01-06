import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGameStarted: false,
  isGameOver: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: state => {
      state.isGameStarted = true;
      state.isGameOver = false;
    },
  },
});

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;
