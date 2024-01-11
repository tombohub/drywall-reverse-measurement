import {
  calculateReverseMeasurement,
  randomRegularMeasurement,
  randomReverseMeasurement,
} from "../drywall";
import { shuffleArray } from "../utils";

/**
 * Number of choices to offer as an answer
 */
const NUMBER_OF_CHOICES = 4;

/**
 * Time allowed to answer the question, in seconds
 */
export const COUNTDOWN_SECONDS = 5;

/**
 * Total number of questions for each game
 */
export const TOTAL_QUESTIONS = 5;

export interface Question {
  questionValue: number;
  answerOptions: number[];
  correctAnswer: number;
}

/**
 * Creates a question with answer options
 * @returns question object
 */
export function createQuestion(): Question {
  const questionValue = randomRegularMeasurement();
  const correctAnswer = calculateReverseMeasurement(questionValue);
  const answerOptions = createAnswerOptions(correctAnswer);
  return { questionValue, answerOptions, correctAnswer };
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

/**
 * Create answer options for multiple choice question.
 * @param correctAnswer correct answer to be included as one of the option
 * @returns array of options
 */
export function createAnswerOptions(correctAnswer: number): number[] {
  // create array lenght of number of choices of reverse measurements and one of them is correct answer
  const incorrectOptionsList: number[] = [];
  while (incorrectOptionsList.length < NUMBER_OF_CHOICES - 1) {
    const newOption = randomReverseMeasurement();

    // making sure options list does not contain duplicate values
    if (
      newOption !== correctAnswer &&
      !incorrectOptionsList.includes(newOption)
    ) {
      incorrectOptionsList.push(newOption);
    }
  }
  const allOptions = [...incorrectOptionsList, correctAnswer];
  return shuffleArray(allOptions);
}
