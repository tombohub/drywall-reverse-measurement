import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import gameReducer from "./gameSlice";
import countdownReducer from "./countdownSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    game: gameReducer,
    countdown: countdownReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
