class Trader extends Person {
  constructor(victoryPoints, cost, color) {
    super(victoryPoints, cost, 'trade');
    this.color = color;
  }
}
