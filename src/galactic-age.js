export class ageCount {
  constructor(age) {
    this.age = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
  }

  determineAgeOnMercury() {
    this.mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
  }

  determineVenusAge() {
    this.venusAge = parseFloat((this.age / 0.62).toFixed(2));
  }

  determineMarsAge() {
    this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
  }
}