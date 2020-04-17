import { ageCount } from './../src/galactic-age.js';

describe("ageCount", () => {
  let userAge;
  beforeEach(() => {
    userAge = new ageCount(25);
  });

  test('should return number of Earth years', () => {
    expect(userAge.age).toEqual(25);
  });

  test('should determine age on Mercury years', () => {
    userAge.determineAgeOnMercury();
    expect(userAge.mercuryAge).toBe(104.17);
  });
})