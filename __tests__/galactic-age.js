import { ageCount } from './../src/galactic-age.js';

describe("ageCount", () => {
  let userAge;
  beforeEach(() => {
    userAge = new ageCount(25);
  });

  test('should return number of Earth years', () => {
    expect(userAge.age).toEqual(25);
  });
})