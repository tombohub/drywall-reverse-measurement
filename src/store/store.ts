import { ThunkAction, configureStore, UnknownAction } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import gameReducer from "./gameSlice";
import countdownReducer from "./countdownSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    game: gameReducer,
    countdown: countdownReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
