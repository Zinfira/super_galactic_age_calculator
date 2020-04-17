import { ageCount } from './../src/galactic-age.js';

describe("ageCount", () => {

  test('should return number of Earth years', () => {
    expect.ageCount(25).toEqual(25);
  });
})