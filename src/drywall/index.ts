import { getRandomIntRangeInclusive } from "../utils";

`
All the measurements are in inches.

regular measurements are between 25 and 47

reverse measurements are between 1 and 23
`;

/**
 * Width of drywall in inches
 */
const DRYWALL_WIDTH = 48;

/**
 * Calculate coresponding reverse measurement for the given
 * regular measurement along the sheet's width
 * @param measurement regular width measurement
 * @returns coresponding reverse measurement
 */
export function calculateReverseMeasurement(measurement: number): number {
  return DRYWALL_WIDTH - measurement;
}

/**
 * Generate regular measurement along width.
 * @returns measurement
 */
export function randomRegularMeasurement() {
  // these are the range for 48 inch sheet
  const min = 25;
  const max = 47;

  return getRandomIntRangeInclusive(min, max);
}
/**
 * Generate reverse measurement along width.
 * @returns measurement
 */
export function randomReverseMeasurement() {
  // these are the range for 48 inch sheet
  const min = 1;
  const max = 23;

  return getRandomIntRangeInclusive(min, max);
}
