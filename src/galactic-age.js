export class ageCount {
  constructor(age) {
    this.age = age;
    this.mercuryAge = 0;
  }

  determineAgeOnMercury() {
    this.mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
  }
}