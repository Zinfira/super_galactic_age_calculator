export class ageCount {
  constructor(age, expectLifeAge) {
    this.age = age;
    this.expectLifeAge = expectLifeAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.mercuryExpectancy = 0;
    this.venusExpectancy = 0;
    this.marsExpectancy = 0;
    this.jupiterExpectancy = 0;
    this.earthYearsLeft = 0;
    this.mercuryYearsLeft = 0;
    this.venusYearsLeft = 0;
    this.marsYearsLeft = 0;
    this.jupiterYearsLeft = 0;
  }

  ageOnPlanets() {
    this.mercuryAge = parseFloat((this.age / 0.24).toFixed(0));
    this.venusAge = parseFloat((this.age / 0.62).toFixed(0));
    this.marsAge = parseFloat((this.age / 1.88).toFixed(0));
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(0));
  }

  lifeExpectancyOnPlanets() {
    this.mercuryExpectancy = parseFloat((this.expectLifeAge / 0.24).toFixed(0));
    this.venusExpectancy = parseFloat((this.expectLifeAge / 0.62).toFixed(0));
    this.marsExpectancy = parseFloat((this.expectLifeAge / 1.88).toFixed(0));
    this.jupiterExpectancy = parseFloat((this.expectLifeAge / 11.86).toFixed(0));
  }

  yearsLeftOnPlanets() {
    if (this.age < this.expectLifeAge) {
      this.earthYearsLeft = this.expectLifeAge - this.age;
      this.mercuryYearsLeft = parseFloat(((this.expectLifeAge - this.age) / 0.24).toFixed(0));
      this.venusYearsLeft = parseFloat(((this.expectLifeAge - this.age) / 0.62).toFixed(0));
      this.marsYearsLeft = parseFloat(((this.expectLifeAge - this.age) / 1.88).toFixed(0));
      this.jupiterYearsLeft = parseFloat(((this.expectLifeAge - this.age) / 11.86).toFixed(0));
    }
  }
}