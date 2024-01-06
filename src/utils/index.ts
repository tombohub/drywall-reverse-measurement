import { randomReverseMeasurement } from "../drywall";

export function numberToStringInches(number: number) {
  return number.toString() + '"';
}
/**
 * Generate array of random integers from the reverse measurements range and number which must be included
 * @param length length of array
 * @param include number to include
 * @returns array of numbers
 */
export function _createRandomIntArrayWithIncludedNumber(
  length: number,
  include: number
): number[] {
  const intsArray = [];
  intsArray.push(include);

  while (intsArray.length < length) {
    const newNumber = randomReverseMeasurement();

    // making sure there is no duplicate values
    if (intsArray.includes(newNumber)) continue;

    intsArray.push(randomReverseMeasurement());
  }

  return shuffleArray(intsArray);
}
/**
 * Shuffle the given array
 * @param array array to shuffle
 * @returns shuffled array
 */
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
/**
 * Get random integer from range between minimum and maximum values inclusive
 * @param min minimum number
 * @param max maximum number
 * @returns random whole number
 */
export function getRandomIntRangeInclusive(min: number, max: number): number {
  if (min >= max)
    throw RangeError(`min: ${min} cannot be higher or equal than max: ${max}`);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
