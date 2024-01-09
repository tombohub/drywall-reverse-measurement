import { atom } from "jotai";
import { randomRegularMeasurement } from "../drywall";

import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import gameReducer from "./gameSlice";
import countdownReducer from "./countdownSlice";
import { calculateReverseMeasurement } from "../drywall";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    game: gameReducer,
    countdown: countdownReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * current regular measurement given to the user to guess the * reverse measurement
 */
export const regularMeasurementAtom = atom(randomRegularMeasurement());
regularMeasurementAtom.debugLabel = "regular-measurement";

/**
 * Correct reverse measurement for the current regular measurement.
 */
export const reverseMeasurementAtom = atom(get =>
  calculateReverseMeasurement(get(regularMeasurementAtom))
);
reverseMeasurementAtom.debugLabel = "reverse-measurement";
