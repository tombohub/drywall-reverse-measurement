import { expect, expectTypeOf, test } from "vitest";

import { createRandomIntArrayWithIncludedNumber } from "../utils";

test("creates array of integers with specific length and number included", () => {
  expect(createRandomIntArrayWithIncludedNumber(4, 25)).toHaveLength(4);
  expect(createRandomIntArrayWithIncludedNumber(4, 34)).toContain(34);
  expectTypeOf(createRandomIntArrayWithIncludedNumber(4, 34)).toBeArray();
});
