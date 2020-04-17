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
    userAge.ageOnPlanets();
    expect(userAge.mercuryAge).toBe(104.17);
  });

  test('should determine age on Venus years', () => {
    userAge.ageOnPlanets();
    expect(userAge.venusAge).toBe(40.32);
  });

  test('should determine age on Mars years', () => {
    userAge.ageOnPlanets();
    expect(userAge.marsAge).toBe(13.3);
  });

  test('should determine age on Jupiter years', () => {
    userAge.ageOnPlanets();
    expect(userAge.jupiterAge).toBe(2.11);
  });
  
})