import { expect, test } from "vitest";
import {
  calculateReverseMeasurement,
  randomReverseMeasurement,
  randomRegularMeasurement,
} from "../drywall";

test("generates random regular measurement between 25 and 47 inclusive", () => {
  expect(randomRegularMeasurement()).toBeGreaterThanOrEqual(25);
  expect(randomRegularMeasurement()).toBeLessThanOrEqual(47);
});
test("generates random reverse measurement between 25 and 47 inclusive", () => {
  expect(randomReverseMeasurement()).toBeGreaterThanOrEqual(1);
  expect(randomReverseMeasurement()).toBeLessThanOrEqual(23);
});
test("calculates reverse measurement for 48 inch sheet given regular measurement", () => {
  expect(calculateReverseMeasurement(25)).toBe(23);
  expect(calculateReverseMeasurement(24)).toBe(24);
  expect(calculateReverseMeasurement(47)).toBe(1);
  expect(calculateReverseMeasurement(1)).toBe(47);
  expect(calculateReverseMeasurement(48)).toBe(0);
  expect(calculateReverseMeasurement(0)).toBe(48);
});
