export class ageCount {
  constructor(age) {
    this.age = age;
    this.mercuryAge = 0;
  }

  determineAgeOnMercury() {
    this.mercuryAge += (this.age / 0.24);
  }
}