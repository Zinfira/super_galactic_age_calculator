export class ageCount {
  constructor(age, expectLifeAge) {
    this.age = age;
    this.expectLifeAge = expectLifeAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  ageOnPlanets () {
    this.mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
    this.venusAge = parseFloat((this.age / 0.62).toFixed(2));
    this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
  }
}