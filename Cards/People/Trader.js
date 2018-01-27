class Trader extends Person {
  constructor(victoryPoints, cost, color) {
    super(victoryPoints, cost, 'trade');
    this.victoryPoints = victoryPoints;
    this.cost = cost;
    this.color = color;
  }
}
