class Ship extends Card {
  constructor(color, income, swords) {
    super(false);
    this.color = color;
    this.income = income;
    this.swords = swords;
  }

  toString() {
    return 'Ship: ' + this.color + ', ' + this.income + ', ' + this.swords;
  }
}
