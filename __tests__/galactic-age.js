import { ageCount } from './../src/galactic-age.js';

describe("ageCount", () => {
  let userAge;
  beforeEach(() => {
    userAge = new ageCount(25,85);
  });

  test('should return number of Earth years', () => {
    expect(userAge.age).toEqual(25);
  });

  test('should determine age in Mercury years', () => {
    userAge.ageOnPlanets();
    expect(userAge.mercuryAge).toBe(104.17);
  });

  test('should determine age in Venus years', () => {
    userAge.ageOnPlanets();
    expect(userAge.venusAge).toBe(40.32);
  });

  test('should determine age in Mars years', () => {
    userAge.ageOnPlanets();
    expect(userAge.marsAge).toBe(13.3);
  });

  test('should determine age in Jupiter years', () => {
    userAge.ageOnPlanets();
    expect(userAge.jupiterAge).toBe(2.11);
  });

  test('should return number of life expectancy in Earth years', () => {
    expect(userAge.expectLifeAge).toEqual(85);
  });

  test('should determine life expectancy years on Mercury', () => {
    userAge.lifeExpectancyOnPlanets();
    expect(userAge.mercuryExpectancy).toBe(354.17);
  });

  test ('should determine life expectancy years on Venus', () => {
    userAge.lifeExpectancyOnPlanets();
    expect(userAge.venusExpectancy).toBe(137.1);
  });

  test('should determine life expectancy years on Mars', () => {
    userAge.lifeExpectancyOnPlanets();
    expect(userAge.marsExpectancy).toBe(45.21);
  });

  test('should determine life expectancy years on Jupiter', () => {
    userAge.lifeExpectancyOnPlanets();
    expect(userAge.jupiterExpectancy).toBe(7.17);
  });
  
})