import { randomRegularMeasurement } from "../drywall";
import { _createRandomIntArrayWithIncludedNumber } from "../utils";

/**
 * Number of choices to offer as an answer
 */
export const NUMBER_OF_CHOICES = 4;

/**
 * Number of turns for each game
 */
export const TOTAL_TURNS = 10;

/**
 * Creates array of numbers to offer as answer choice with given correct reverse measurement to include in the choices.
 * @param reverseMeasurement correct reverse measurement
 * @returns array of answer choices
 */
export function getAnswerChoices(reverseMeasurement: number): number[] {
  return _createRandomIntArrayWithIncludedNumber(
    NUMBER_OF_CHOICES,
    reverseMeasurement
  );
}

export function checkAnswer() {
  // check if answer is correct
}

/**
 * Creates a value (regular measurement) for question
 * @returns regular measurement
 */
export function createQuestionValue() {
  return randomRegularMeasurement();
}
