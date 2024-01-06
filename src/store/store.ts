import { atom } from "jotai";
import { randomRegularMeasurement } from "../drywall";
import { getAnswerChoices } from "../game";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import questionReducer from "./questionSlice";
import { calculateReverseMeasurement } from "../drywall";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    question: questionReducer,
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

export const answerChoicesAtom = atom(get =>
  getAnswerChoices(get(reverseMeasurementAtom))
);
